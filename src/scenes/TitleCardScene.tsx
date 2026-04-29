import React from 'react';
import { SceneShell, MetaChip } from '../components/SceneShell';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D1_BODY, D2_SUBTITLE, FONT_BODY_EN, FONT_CN, tokenToStyle } from '../theme/typography';

interface TitleCardSceneProps {
  title: string;
  subtitle: string;
  highlights: string[];
}

const palette = [DATA.red, DATA.blue, DATA.green, DATA.orange, BRAND.yellow];

const HighlightTile: React.FC<{ text: string; index: number; delay: number; total: number }> = ({
  text,
  index,
  delay,
  total,
}) => {
  const tile = useStagger({
    stagger: 0.12,
    index,
    delay,
    duration: 0.6,
    ease: back(1.5).out,
    from: { y: 18, opacity: 0, scale: 0.88 },
  });
  const accent = palette[index % palette.length];

  return (
    <div
      style={{
        padding: '24px 26px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderTop: `4px solid ${accent}`,
        borderRadius: 12,
        transform: `translateY(${tile.y}px) scale(${tile.scale})`,
        opacity: tile.opacity,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div
        style={{
          fontFamily: FONT_BODY_EN,
          fontSize: 44,
          fontWeight: 900,
          color: accent,
          letterSpacing: '0.02em',
          lineHeight: 1.0,
        }}
      >
        {String(index + 1).padStart(2, '0')}
        <span style={{ color: BRAND.textLight, fontWeight: 500, marginLeft: 8, fontSize: 22 }}>
          / {String(total).padStart(2, '0')}
        </span>
      </div>
      <div
        style={{
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_CN,
          color: BRAND.yellow,
          fontWeight: 800,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export const TitleCardScene: React.FC<TitleCardSceneProps> = ({ title, subtitle, highlights }) => {
  const metaChips: MetaChip[] = [
    { label: 'OVERVIEW', value: `${highlights.length} 关键词`, accent: BRAND.yellow },
    { label: 'AT A GLANCE', value: '核心特征速览', accent: DATA.blue },
  ];

  return (
    <SceneShell
      eyebrow="OVERVIEW · 核心定位"
      title={title}
      subtitle={subtitle}
      metaChips={metaChips}
      footer="HANLIN · 国际竞赛系列"
      bodyPanel={false}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '1fr',
          gap: 14,
          flex: 1,
          minHeight: 0,
        }}
      >
        {highlights.map((h, i) => (
          <HighlightTile key={h + i} text={h} index={i} delay={1.0} total={highlights.length} />
        ))}
      </div>
    </SceneShell>
  );
};
