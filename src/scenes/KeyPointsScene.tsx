import React from 'react';
import { SceneShell, MetaChip } from '../components/SceneShell';
import { useStagger } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D0_CAPTION, D1_BODY, D2_SUBTITLE, D3_TITLE, FONT_BODY_EN, FONT_CN, tokenToStyle } from '../theme/typography';

interface KeyPoint {
  label: string;
  value: string;
}

interface KeyPointsSceneProps {
  title: string;
  subtitle: string;
  keyPoints: KeyPoint[];
}

const palette = [DATA.red, DATA.blue, DATA.green, DATA.orange];

const KeyPointRow: React.FC<{ kp: KeyPoint; index: number; delay: number }> = ({
  kp,
  index,
  delay,
}) => {
  const row = useStagger({
    stagger: 0.13,
    index,
    delay,
    duration: 0.6,
    ease: power3Out,
    from: { x: -18, opacity: 0 },
  });
  const accent = palette[index % palette.length];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        padding: '22px 26px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderLeft: `5px solid ${accent}`,
        borderRadius: 12,
        transform: `translateX(${row.x}px)`,
        opacity: row.opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONT_BODY_EN,
          fontSize: 28,
          fontWeight: 900,
          color: accent,
          letterSpacing: '0.04em',
          minWidth: 56,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div
        style={{
          ...tokenToStyle(D1_BODY),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 600,
          flex: 1,
        }}
      >
        {kp.label}
      </div>

      <div
        style={{
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_CN,
          color: BRAND.yellow,
          fontWeight: 800,
          textAlign: 'right',
        }}
      >
        {kp.value}
      </div>
    </div>
  );
};

export const KeyPointsScene: React.FC<KeyPointsSceneProps> = ({ title, subtitle, keyPoints }) => {
  const metaChips: MetaChip[] = [
    { label: 'KEY POINTS', value: `${keyPoints.length} 项`, accent: BRAND.yellow },
  ];

  return (
    <SceneShell
      eyebrow="DETAILS · 关键信息"
      title={title}
      subtitle={subtitle}
      metaChips={metaChips}
      footer="HANLIN · 国际竞赛系列"
      bodyPanel={false}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minHeight: 0 }}>
        {keyPoints.map((kp, i) => (
          <div key={kp.label + i} style={{ flex: 1, display: 'flex', minHeight: 0 }}>
            <KeyPointRow kp={kp} index={i} delay={1.0} />
          </div>
        ))}
      </div>
    </SceneShell>
  );
};
