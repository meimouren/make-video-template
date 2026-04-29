import React from 'react';
import { SceneShell, MetaChip } from '../components/SceneShell';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D0_CAPTION, D1_BODY, D2_SUBTITLE, FONT_BODY_EN, FONT_CN, tokenToStyle } from '../theme/typography';

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface WhyAMCSceneProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

const palette = [DATA.red, DATA.blue, DATA.green, DATA.orange, BRAND.yellow];

const BenefitTile: React.FC<{ benefit: Benefit; index: number; delay: number; total: number }> = ({
  benefit,
  index,
  delay,
  total,
}) => {
  const card = useStagger({
    stagger: 0.15,
    index,
    delay,
    duration: 0.6,
    ease: back(1.5).out,
    from: { y: 28, opacity: 0, scale: 0.9 },
  });
  const accent = palette[index % palette.length];

  return (
    <div
      style={{
        position: 'relative',
        padding: '28px 26px 26px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderTop: `4px solid ${accent}`,
        borderRadius: 14,
        transform: `translateY(${card.y}px) scale(${card.scale})`,
        opacity: card.opacity,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        overflow: 'hidden',
      }}
    >
      {/* Accent glow */}
      <div
        style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 200,
          height: 200,
          borderRadius: 999,
          background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Top: index badge + accent rule */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <div
          style={{
            fontFamily: FONT_BODY_EN,
            fontSize: 28,
            fontWeight: 900,
            color: accent,
            letterSpacing: '0.04em',
          }}
        >
          {String(index + 1).padStart(2, '0')}
          <span style={{ color: BRAND.textLight, fontWeight: 500, marginLeft: 6 }}>
            / {String(total).padStart(2, '0')}
          </span>
        </div>
        <div
          style={{
            width: 60,
            height: 4,
            background: accent,
            borderRadius: 2,
            opacity: 0.7,
          }}
        />
      </div>

      <div
        style={{
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_CN,
          color: BRAND.yellow,
          fontWeight: 800,
          position: 'relative',
        }}
      >
        {benefit.title}
      </div>

      <div
        style={{
          ...tokenToStyle(D1_BODY),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 400,
          opacity: 0.92,
          lineHeight: 1.55,
          position: 'relative',
        }}
      >
        {benefit.desc}
      </div>
    </div>
  );
};

export const WhyAMCScene: React.FC<WhyAMCSceneProps> = ({ title, subtitle, benefits }) => {
  const cols = benefits.length >= 5 ? 1 : 2;
  const total = benefits.length;

  const metaChips: MetaChip[] = [
    { label: 'BENEFITS', value: `${total} 大优势`, accent: BRAND.yellow },
    { label: 'TARGET', value: '中国家长 / 学生', accent: DATA.blue },
    { label: 'SCOPE', value: '招生 + 学术', accent: DATA.green },
  ];

  return (
    <SceneShell
      eyebrow="VALUE · 申请价值"
      title={title}
      subtitle={subtitle}
      metaChips={metaChips}
      footer="HANLIN · 国际竞赛系列"
      bodyPanel={false}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: cols === 1 ? '1fr' : '1fr 1fr',
          gap: 16,
        }}
      >
        {benefits.map((b, i) => (
          <BenefitTile key={b.title + i} benefit={b} index={i} delay={1.0} total={total} />
        ))}
      </div>
    </SceneShell>
  );
};
