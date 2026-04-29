import React from 'react';
import { AbsoluteFill } from 'remotion';
import { StatBlock } from '../components/StatBlock';
import { useFrom } from '../animations/primitives';
import { useNumberCount } from '../animations/data-hooks';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import {
  D2_SUBTITLE,
  D4_HEADLINE,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

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

  const isLargeNumber = parsed.numericPart >= 1000;
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

export const StatsScene: React.FC<StatsSceneProps> = ({ title, subtitle, stats }) => {
  const titleAnim = useFrom({
    delay: 0.1,
    duration: 0.7,
    ease: power3Out,
    from: { x: -20, opacity: 0 },
  });
  const subtitleAnim = useFrom({
    delay: 0.3,
    duration: 0.6,
    ease: power3Out,
    from: { y: -12, opacity: 0 },
  });

  return (
    <AbsoluteFill
      style={{
        background: BRAND.black,
        padding: '180px 70px 220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Title block with yellow accent bar */}
      {title && (
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 24,
            transform: `translateX(${titleAnim.x}px)`,
            opacity: titleAnim.opacity,
            marginBottom: subtitle ? 18 : 60,
          }}
        >
          <div
            style={{
              width: 8,
              alignSelf: 'stretch',
              background: BRAND.yellow,
              borderRadius: 4,
              marginTop: 8,
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                ...tokenToStyle(D4_HEADLINE),
                fontFamily: FONT_CN,
                color: BRAND.yellow,
                fontWeight: 800,
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  ...tokenToStyle(D2_SUBTITLE),
                  fontFamily: FONT_CN,
                  color: BRAND.white,
                  fontWeight: 400,
                  marginTop: 12,
                  transform: `translateY(${subtitleAnim.y}px)`,
                  opacity: subtitleAnim.opacity,
                }}
              >
                {subtitle}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2x2 stat grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          marginTop: 40,
        }}
      >
        {stats.map((stat, i) => (
          <StatBlock
            key={i}
            index={i}
            delay={0.6}
            label={stat.label}
            value={
              <AnimatedStatValue raw={stat.value} suffix={stat.suffix} delay={0.6 + i * 0.12 + 0.2} />
            }
            // Highlight the last (4th) stat with yellow background
            emphasis={i === stats.length - 1}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
