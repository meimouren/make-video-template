import React from 'react';
import { SceneShell, MetaChip } from '../components/SceneShell';
import { useStagger } from '../animations/primitives';
import { back, power3Out } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D0_CAPTION, D1_BODY, D2_SUBTITLE, FONT_BODY_EN, FONT_CN, tokenToStyle } from '../theme/typography';

interface PathwayStep {
  stage: string;
  participants: string;
  desc: string;
}

interface ProgressionSceneProps {
  title: string;
  subtitle: string;
  pathway: PathwayStep[];
}

const palette = [DATA.red, DATA.blue, DATA.green, DATA.orange];

const StageCard: React.FC<{
  step: PathwayStep;
  index: number;
  delay: number;
  total: number;
  isLast: boolean;
}> = ({ step, index, delay, total, isLast }) => {
  const card = useStagger({
    stagger: 0.18,
    index,
    delay,
    duration: 0.6,
    ease: back(1.5).out,
    from: { y: 22, opacity: 0, scale: 0.92 },
  });
  const arrow = useStagger({
    stagger: 0.18,
    index,
    delay: delay + 0.3,
    duration: 0.45,
    ease: power3Out,
    from: { x: -14, opacity: 0 },
  });
  const accent = palette[index % palette.length];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
      <div
        style={{
          display: 'flex',
          gap: 22,
          padding: '24px 26px',
          background: BRAND.cardBg,
          border: `1px solid ${BRAND.cardBorder}`,
          borderLeft: `5px solid ${accent}`,
          borderRadius: 12,
          transform: `translateY(${card.y}px) scale(${card.scale})`,
          opacity: card.opacity,
        }}
      >
        {/* Stage badge */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 96,
            padding: '12px 0',
            background: `${accent}1a`,
            border: `1px solid ${accent}66`,
            borderRadius: 10,
          }}
        >
          <div
            style={{
              fontFamily: FONT_BODY_EN,
              fontSize: 16,
              color: BRAND.textLight,
              letterSpacing: '0.18em',
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            STAGE
          </div>
          <div
            style={{
              fontFamily: FONT_BODY_EN,
              fontSize: 38,
              fontWeight: 900,
              color: accent,
              lineHeight: 1.0,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Right side: stage + desc */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
            <div
              style={{
                ...tokenToStyle(D2_SUBTITLE),
                fontFamily: FONT_CN,
                fontWeight: 800,
                color: BRAND.yellow,
              }}
            >
              {step.stage}
            </div>
            {step.participants && (
              <div
                style={{
                  ...tokenToStyle(D0_CAPTION),
                  fontFamily: FONT_BODY_EN,
                  color: accent,
                  fontWeight: 700,
                  background: `${accent}22`,
                  padding: '4px 10px',
                  borderRadius: 6,
                  letterSpacing: '0.08em',
                }}
              >
                {step.participants}
              </div>
            )}
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

      {/* Connector arrow to next */}
      {!isLast && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '6px 0',
            color: accent,
            fontSize: 20,
            transform: `translateX(${arrow.x}px)`,
            opacity: arrow.opacity,
          }}
        >
          ↓
        </div>
      )}
    </div>
  );
};

export const ProgressionScene: React.FC<ProgressionSceneProps> = ({ title, subtitle, pathway }) => {
  const metaChips: MetaChip[] = [
    { label: 'STAGES', value: `${pathway.length} 阶段`, accent: BRAND.yellow },
    { label: 'PATHWAY', value: '晋级通道', accent: DATA.blue },
    { label: 'GOAL', value: '名校 / 国手', accent: DATA.red },
  ];

  return (
    <SceneShell
      eyebrow="PATHWAY · 晋级路径"
      title={title}
      subtitle={subtitle}
      metaChips={metaChips}
      footer="HANLIN · 国际竞赛系列"
      bodyPanel={false}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {pathway.map((step, i) => (
          <StageCard
            key={step.stage + i}
            step={step}
            index={i}
            delay={1.0}
            total={pathway.length}
            isLast={i === pathway.length - 1}
          />
        ))}
      </div>
    </SceneShell>
  );
};
