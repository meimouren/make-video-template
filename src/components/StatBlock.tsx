import React from 'react';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND } from '../theme/colors';
import {
  D0_CAPTION,
  D3_TITLE,
  FONT_BODY_EN,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

export interface StatBlockProps {
  label: string;
  value: React.ReactNode;
  index: number;
  delay: number;
  /** When true, the card uses BRAND.yellow background + black text (used for the highlight/latest stat). */
  emphasis?: boolean;
}

export const StatBlock: React.FC<StatBlockProps> = ({
  label,
  value,
  index,
  delay,
  emphasis,
}) => {
  const card = useStagger({
    stagger: 0.12,
    index,
    delay,
    duration: 0.55,
    ease: back(1.4).out,
    from: { y: 24, opacity: 0, scale: 0.85 },
  });
  return (
    <div
      style={{
        flex: 1,
        padding: '24px 24px',
        background: emphasis ? BRAND.yellow : BRAND.cardBg,
        border: emphasis ? 'none' : `1px solid ${BRAND.cardBorder}`,
        borderRadius: 12,
        transform: `translateY(${card.y}px) scale(${card.scale})`,
        opacity: card.opacity,
        transformOrigin: 'center bottom',
      }}
    >
      <div
        style={{
          ...tokenToStyle(D3_TITLE),
          fontFamily: FONT_BODY_EN,
          fontWeight: 800,
          color: emphasis ? BRAND.black : BRAND.yellow,
          marginBottom: 4,
        }}
      >
        {value}
      </div>
      <div
        style={{
          ...tokenToStyle(D0_CAPTION),
          fontFamily: FONT_CN,
          fontWeight: 500,
          color: emphasis ? BRAND.black : BRAND.textLight,
          opacity: emphasis ? 0.85 : 1,
        }}
      >
        {label}
      </div>
    </div>
  );
};
