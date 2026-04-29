import React from 'react';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D0_CAPTION, D1_BODY, D2_SUBTITLE, FONT_BODY_EN, FONT_CN, tokenToStyle } from '../theme/typography';

export interface StepNodeProps {
  /** Big number / stage label, e.g. "01" or "AMC10" */
  num: string;
  title: string;
  desc: string;
  /** Optional secondary metric (used by funnel/pathway) */
  metric?: string;
  index: number;
  delay: number;
  /** Total number of steps (used to size the funnel ratio) */
  totalSteps?: number;
}

export const StepNode: React.FC<StepNodeProps> = ({
  num,
  title,
  desc,
  metric,
  index,
  delay,
}) => {
  const card = useStagger({
    stagger: 0.18,
    index,
    delay,
    duration: 0.6,
    ease: back(1.4).out,
    from: { y: 24, opacity: 0, scale: 0.92 },
  });
  // Color rotates through DATA palette by index
  const palette = [DATA.red, DATA.blue, DATA.green, DATA.orange];
  const accent = palette[index % palette.length];

  return (
    <div
      style={{
        display: 'flex',
        gap: 22,
        padding: '24px 26px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderLeft: `4px solid ${accent}`,
        borderRadius: 12,
        transform: `translateY(${card.y}px) scale(${card.scale})`,
        opacity: card.opacity,
      }}
    >
      {/* Big number/label on the left */}
      <div
        style={{
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_BODY_EN,
          fontWeight: 900,
          color: accent,
          minWidth: 90,
          fontSize: 56,
          lineHeight: 1.0,
          letterSpacing: '0.02em',
        }}
      >
        {num}
      </div>

      {/* Title + desc */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <div
            style={{
              ...tokenToStyle(D2_SUBTITLE),
              fontFamily: FONT_CN,
              fontWeight: 800,
              color: BRAND.yellow,
            }}
          >
            {title}
          </div>
          {metric && (
            <div
              style={{
                ...tokenToStyle(D0_CAPTION),
                fontFamily: FONT_BODY_EN,
                color: BRAND.textLight,
                fontWeight: 600,
              }}
            >
              {metric}
            </div>
          )}
        </div>
        <div
          style={{
            ...tokenToStyle(D1_BODY),
            fontFamily: FONT_CN,
            color: BRAND.white,
            fontWeight: 400,
            opacity: 0.9,
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
};
