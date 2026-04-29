import React from 'react';
import { SceneShell, MetaChip } from '../components/SceneShell';
import { useFrom, useStagger } from '../animations/primitives';
import { back, power3Out } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import {
  D0_CAPTION,
  D1_BODY,
  D2_SUBTITLE,
  D3_TITLE,
  FONT_BODY_EN,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

interface ComparisonItem {
  aspect: string;
  left: string;
  right: string;
}

interface ComparisonSceneProps {
  title: string;
  subtitle: string;
  comparison: ComparisonItem[];
  leftLabel: string;
  rightLabel: string;
}

const Row: React.FC<{
  item: ComparisonItem;
  index: number;
  delay: number;
}> = ({ item, index, delay }) => {
  const row = useStagger({
    stagger: 0.13,
    index,
    delay,
    duration: 0.6,
    ease: power3Out,
    from: { y: 14, opacity: 0 },
  });
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '180px 1fr 1fr',
        alignItems: 'stretch',
        gap: 14,
        transform: `translateY(${row.y}px)`,
        opacity: row.opacity,
      }}
    >
      {/* Aspect label cell */}
      <div
        style={{
          ...tokenToStyle(D0_CAPTION),
          fontFamily: FONT_CN,
          color: BRAND.textLight,
          fontWeight: 700,
          letterSpacing: '0.12em',
          padding: '20px 18px',
          background: 'rgba(255,255,255,0.015)',
          border: `1px solid ${BRAND.cardBorder}`,
          borderRadius: 10,
          textAlign: 'center',
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {item.aspect}
      </div>
      {/* Left value */}
      <div
        style={{
          ...tokenToStyle(D1_BODY),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 600,
          textAlign: 'center',
          padding: '20px 18px',
          background: BRAND.cardBg,
          border: `1px solid ${DATA.blue}55`,
          borderRadius: 10,
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {item.left}
      </div>
      {/* Right value */}
      <div
        style={{
          ...tokenToStyle(D1_BODY),
          fontFamily: FONT_CN,
          color: BRAND.yellow,
          fontWeight: 700,
          textAlign: 'center',
          padding: '20px 18px',
          background: `${DATA.red}1a`,
          border: `1px solid ${DATA.red}88`,
          borderRadius: 10,
          alignSelf: 'stretch',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {item.right}
      </div>
    </div>
  );
};

const HeaderCell: React.FC<{ label: string; color: string; delay: number; isRight?: boolean }> = ({
  label,
  color,
  delay,
  isRight,
}) => {
  const anim = useFrom({
    delay,
    duration: 0.55,
    ease: back(1.4).out,
    from: { y: 14, opacity: 0, scale: 0.9 },
  });
  return (
    <div
      style={{
        background: isRight ? color : 'transparent',
        border: `2px solid ${color}`,
        borderRadius: 10,
        padding: '14px 18px',
        textAlign: 'center',
        ...tokenToStyle(D2_SUBTITLE),
        fontFamily: FONT_CN,
        fontWeight: 800,
        color: isRight ? BRAND.black : color,
        transform: `translateY(${anim.y}px) scale(${anim.scale})`,
        opacity: anim.opacity,
      }}
    >
      {label}
    </div>
  );
};

export const ComparisonScene: React.FC<ComparisonSceneProps> = ({
  title,
  subtitle,
  comparison,
  leftLabel,
  rightLabel,
}) => {
  const metaChips: MetaChip[] = [
    { label: 'OPTION A', value: leftLabel, accent: DATA.blue },
    { label: 'OPTION B', value: rightLabel, accent: DATA.red },
    { label: 'CRITERIA', value: `${comparison.length} 维度`, accent: BRAND.yellow },
  ];

  return (
    <SceneShell
      eyebrow="COMPARISON · 维度对比"
      title={title}
      subtitle={subtitle}
      metaChips={metaChips}
      footer="HANLIN · 国际竞赛系列"
      bodyPanel
    >
      {/* Column headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '180px 1fr 1fr',
          gap: 14,
          marginBottom: 14,
        }}
      >
        <div />
        <HeaderCell label={leftLabel} color={DATA.blue} delay={0.7} />
        <HeaderCell label={rightLabel} color={DATA.red} delay={0.85} isRight />
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {comparison.map((c, i) => (
          <Row key={c.aspect + i} item={c} index={i} delay={1.0} />
        ))}
      </div>
    </SceneShell>
  );
};
