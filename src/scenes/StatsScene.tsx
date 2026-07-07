import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useStagger } from '../animations/primitives';
import { useNumberCount } from '../animations/data-hooks';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN } from '../theme/typography';

interface Stat {
  label: string;
  value: number | string;
  suffix?: string;
}

interface StatsSceneProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
}

// Parses "1500+" -> { numericPart: 1500, prefix: '', suffix: '+' }
//        "2011"  -> { numericPart: 2011, prefix: '', suffix: '' }
//        "85%"   -> { numericPart: 85, prefix: '', suffix: '%' }
//        "Top 5" -> { numericPart: null }
function parseValue(raw: number | string): { numericPart: number | null; prefix: string; suffix: string } {
  if (typeof raw === 'number') return { numericPart: raw, prefix: '', suffix: '' };
  const m = raw.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { numericPart: null, prefix: '', suffix: '' };
  const [, prefix, numStr, suffix] = m;
  return { numericPart: Number(numStr), prefix, suffix };
}

const AnimatedStatValue: React.FC<{ raw: number | string; suffix?: string; delay: number }> = ({
  raw,
  suffix: extraSuffix,
  delay,
}) => {
  const parsed = parseValue(raw);
  const finalSuffix = (parsed.suffix || '') + (extraSuffix || '');

  // If non-numeric (e.g. "Top 5"), just render static text — no count-up
  if (parsed.numericPart === null) {
    return <>{String(raw)}{extraSuffix ?? ''}</>;
  }

  // Only add thousands separators for genuinely large numbers — never for
  // 4-digit years like 2018 / 2026.
  const isLargeNumber = parsed.numericPart >= 10000;
  const counted = useNumberCount({
    delay,
    duration: 1.0,
    from: 0,
    to: parsed.numericPart,
    ease: power3Out,
  });

  return (
    <>
      {parsed.prefix}
      {isLargeNumber ? Math.round(counted).toLocaleString() : Math.round(counted)}
      {finalSuffix}
    </>
  );
};

const StatCell: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => {
  const cell = useStagger({
    stagger: 0.12,
    index,
    delay: 0.5,
    duration: 0.6,
    ease: power3Out,
    from: { y: 24, opacity: 0 },
  });

  return (
    <div
      style={{
        borderRight: `1.5px solid ${BRAND.divider}`,
        borderBottom: `1.5px solid ${BRAND.divider}`,
        padding: '46px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 16,
        transform: `translateY(${cell.y}px)`,
        opacity: cell.opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONT_HEAD_EN,
          fontSize: 150,
          fontWeight: 900,
          color: BRAND.yellow,
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
        }}
      >
        <AnimatedStatValue raw={stat.value} suffix={stat.suffix} delay={0.6 + index * 0.12} />
      </div>
      <div style={{ fontFamily: FONT_CN, fontSize: 40, color: BRAND.textLight, lineHeight: 1.3 }}>
        {stat.label}
      </div>
    </div>
  );
};

export const StatsScene: React.FC<StatsSceneProps> = ({ title, subtitle, stats }) => {
  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <Background />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '150px 70px 290px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {title ? <SceneHeader kicker={subtitle} title={title} /> : null}

        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridAutoRows: '1fr',
            alignSelf: 'stretch',
            borderTop: `2px solid ${BRAND.white}`,
            borderLeft: `1.5px solid ${BRAND.divider}`,
            marginTop: title ? 56 : 0,
          }}
        >
          {stats.map((stat, i) => (
            <StatCell key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
