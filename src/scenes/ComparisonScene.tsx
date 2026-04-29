import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { useStagger } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import {
  D0_CAPTION,
  D1_BODY,
  D2_SUBTITLE,
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
  aspect: string;
  left: string;
  right: string;
  index: number;
  delay: number;
}> = ({ aspect, left, right, index, delay }) => {
  const row = useStagger({
    stagger: 0.12,
    index,
    delay,
    duration: 0.55,
    ease: power3Out,
    from: { y: 14, opacity: 0 },
  });
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 1fr 1fr',
        alignItems: 'center',
        gap: 18,
        padding: '18px 22px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderRadius: 12,
        transform: `translateY(${row.y}px)`,
        opacity: row.opacity,
      }}
    >
      <div
        style={{
          ...tokenToStyle(D0_CAPTION),
          fontFamily: FONT_CN,
          color: BRAND.textLight,
          fontWeight: 600,
          letterSpacing: '0.1em',
        }}
      >
        {aspect}
      </div>
      <div
        style={{
          ...tokenToStyle(D1_BODY),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 600,
          textAlign: 'center',
        }}
      >
        {left}
      </div>
      <div
        style={{
          ...tokenToStyle(D1_BODY),
          fontFamily: FONT_CN,
          color: BRAND.yellow,
          fontWeight: 700,
          textAlign: 'center',
        }}
      >
        {right}
      </div>
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
  return (
    <SceneShell title={title} subtitle={subtitle}>
      {/* Header row with column labels */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '160px 1fr 1fr',
          alignItems: 'center',
          gap: 18,
          padding: '0 22px 16px',
          marginTop: 4,
        }}
      >
        <div />
        <div
          style={{
            ...tokenToStyle(D2_SUBTITLE),
            fontFamily: FONT_CN,
            color: DATA.blue,
            fontWeight: 800,
            textAlign: 'center',
          }}
        >
          {leftLabel}
        </div>
        <div
          style={{
            ...tokenToStyle(D2_SUBTITLE),
            fontFamily: FONT_CN,
            color: DATA.red,
            fontWeight: 800,
            textAlign: 'center',
          }}
        >
          {rightLabel}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {comparison.map((c, i) => (
          <Row key={c.aspect + i} {...c} index={i} delay={0.7} />
        ))}
      </div>
    </SceneShell>
  );
};
