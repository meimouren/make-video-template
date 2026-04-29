import React from 'react';
import { SceneShell, MetaChip } from '../components/SceneShell';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D0_CAPTION, D1_BODY, D2_SUBTITLE, FONT_BODY_EN, FONT_CN, tokenToStyle } from '../theme/typography';

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface PrepSceneProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

const palette = [DATA.red, DATA.blue, DATA.green, DATA.orange];

const StepCard: React.FC<{ step: Step; index: number; delay: number }> = ({ step, index, delay }) => {
  const card = useStagger({
    stagger: 0.18,
    index,
    delay,
    duration: 0.6,
    ease: back(1.4).out,
    from: { y: 22, opacity: 0, scale: 0.92 },
  });
  const accent = palette[index % palette.length];

  return (
    <div
      style={{
        display: 'flex',
        gap: 22,
        padding: '24px 26px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderRadius: 14,
        transform: `translateY(${card.y}px) scale(${card.scale})`,
        opacity: card.opacity,
        flex: 1,
        alignItems: 'center',
      }}
    >
      {/* Number badge */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 88,
          padding: '14px 0',
          background: BRAND.black,
          border: `2px solid ${accent}`,
          borderRadius: 12,
          color: accent,
        }}
      >
        <div
          style={{
            fontFamily: FONT_BODY_EN,
            fontSize: 14,
            color: BRAND.textLight,
            letterSpacing: '0.18em',
            fontWeight: 700,
            marginBottom: 2,
          }}
        >
          STEP
        </div>
        <div
          style={{
            fontFamily: FONT_BODY_EN,
            fontSize: 40,
            fontWeight: 900,
            color: accent,
            lineHeight: 1.0,
          }}
        >
          {step.num}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div
          style={{
            ...tokenToStyle(D2_SUBTITLE),
            fontFamily: FONT_CN,
            fontWeight: 800,
            color: BRAND.yellow,
          }}
        >
          {step.title}
        </div>
        <div
          style={{
            ...tokenToStyle(D1_BODY),
            fontFamily: FONT_CN,
            color: BRAND.white,
            fontWeight: 400,
            opacity: 0.92,
          }}
        >
          {step.desc}
        </div>
      </div>
    </div>
  );
};

export const PrepScene: React.FC<PrepSceneProps> = ({ title, subtitle, steps }) => {
  const metaChips: MetaChip[] = [
    { label: 'ROADMAP', value: `${steps.length} 步`, accent: BRAND.yellow },
    { label: 'TIMELINE', value: '系统性备赛', accent: DATA.blue },
  ];

  return (
    <SceneShell
      eyebrow="PREP · 备赛路线"
      title={title}
      subtitle={subtitle}
      metaChips={metaChips}
      footer="HANLIN · 国际竞赛系列"
      bodyPanel={false}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minHeight: 0 }}>
        {steps.map((s, i) => (
          <div key={s.num + i} style={{ flex: 1, minHeight: 0, display: 'flex' }}>
            <StepCard step={s} index={i} delay={1.0} />
          </div>
        ))}
      </div>
    </SceneShell>
  );
};
