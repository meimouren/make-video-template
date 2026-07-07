import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useFrom } from '../animations/primitives';
import { useNumberCount } from '../animations/data-hooks';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface Domain {
  name: string;
  percentage: number;
  topics: string;
}

interface TopicsSceneProps {
  title: string;
  subtitle: string;
  domains: Domain[];
}

/**
 * Bold Editorial topic breakdown: chunky horizontal bars. Each row is a domain
 * — CJK name, a thick bar sized by its share (the largest in cobalt, the rest
 * in ink), a giant serif percentage, and grey topic detail. Bars grow from 0,
 * percentages count up, hairline rules separate rows.
 */

const BarRow: React.FC<{
  domain: Domain;
  index: number;
  maxPercentage: number;
  delay: number;
  isMax: boolean;
}> = ({ domain, index, maxPercentage, delay, isMax }) => {
  const rowDelay = delay + index * 0.14;
  const row = useFrom({ delay: rowDelay, duration: 0.5, ease: power3Out, from: { x: -18, opacity: 0 } });
  const grow = useFrom({ delay: rowDelay + 0.08, duration: 0.9, ease: power3Out, from: { scale: 0 } });
  const pct = useNumberCount({
    delay: rowDelay + 0.08,
    duration: 0.9,
    from: 0,
    to: domain.percentage,
    ease: power3Out,
  });

  const barColor = isMax ? BRAND.yellow : BRAND.white;
  // widest bar ~ 62% of the row; others scale relative to the max
  const widthPct = (domain.percentage / maxPercentage) * 62;

  return (
    <div
      style={{
        borderBottom: `1px solid ${BRAND.divider}`,
        padding: '26px 4px 22px',
        transform: `translateX(${row.x}px)`,
        opacity: row.opacity,
      }}
    >
      {/* top line: name + giant percentage */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ fontFamily: FONT_CN, fontSize: 46, fontWeight: 700, color: BRAND.white, lineHeight: 1.1 }}>
          {domain.name}
        </div>
        <div
          style={{
            fontFamily: FONT_HEAD_EN,
            fontWeight: 900,
            fontSize: 92,
            lineHeight: 0.85,
            letterSpacing: '-0.03em',
            color: isMax ? BRAND.yellow : BRAND.white,
            whiteSpace: 'nowrap',
          }}
        >
          {Math.round(pct)}
          <span style={{ fontSize: 46 }}>%</span>
        </div>
      </div>

      {/* thick bar */}
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 20 }}>
        <div
          style={{
            width: `${widthPct}%`,
            height: 26,
            background: barColor,
            transform: `scaleX(${grow.scale})`,
            transformOrigin: 'left',
          }}
        />
        <div
          style={{
            fontFamily: FONT_CN_SANS,
            fontSize: 30,
            color: BRAND.textLight,
            lineHeight: 1.3,
            flex: 1,
            opacity: row.opacity,
          }}
        >
          {domain.topics}
        </div>
      </div>
    </div>
  );
};

export const TopicsScene: React.FC<TopicsSceneProps> = ({ title, subtitle, domains }) => {
  const maxPercentage = Math.max(...domains.map((d) => d.percentage));
  const maxIndex = domains.findIndex((d) => d.percentage === maxPercentage);

  const listAnim = useFrom({ delay: 0.6, duration: 0.5, ease: power3Out, from: { opacity: 0 } });

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
        <SceneHeader kicker={subtitle} title={title} />

        {/* bars list — compact block, vertically centered in available space */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
        <div
          style={{
            borderTop: `2px solid ${BRAND.white}`,
            opacity: listAnim.opacity,
          }}
        >
          {domains.map((d, i) => (
            <BarRow
              key={d.name}
              domain={d}
              index={i}
              maxPercentage={maxPercentage}
              delay={0.8}
              isMax={i === maxIndex}
            />
          ))}
        </div>
        </div>

        <div
          style={{
            marginTop: 'auto',
            paddingTop: 24,
            fontFamily: FONT_CN_SANS,
            fontSize: 26,
            color: BRAND.textLight,
            letterSpacing: '0.06em',
            alignSelf: 'flex-end',
          }}
        >
          ※ 数据来源 翰林有方 · 国际竞赛系列
        </div>
      </div>
    </AbsoluteFill>
  );
};
