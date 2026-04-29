import React from 'react';
import { useFrom, useTextReveal } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { D3_TITLE, FONT_BODY_EN, tokenToStyle } from '../theme/typography';

export interface FormulaCardProps {
  formula: string;
  delay?: number;
  /** Optional caption above the formula (e.g. "评分公式") */
  caption?: string;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({ formula, delay = 0.4, caption }) => {
  const cardAnim = useFrom({
    delay,
    duration: 0.6,
    ease: power3Out,
    from: { y: 24, opacity: 0 },
  });
  const reveal = useTextReveal({
    text: formula,
    delay: delay + 0.4,
    durationPerChar: 0.04,
  });

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `2px solid ${BRAND.yellow}`,
        borderRadius: 16,
        padding: '36px 56px',
        transform: `translateY(${cardAnim.y}px)`,
        opacity: cardAnim.opacity,
        textAlign: 'center',
      }}
    >
      {caption && (
        <div
          style={{
            fontFamily: FONT_BODY_EN,
            fontSize: 22,
            letterSpacing: '0.18em',
            color: BRAND.yellow,
            fontWeight: 600,
            marginBottom: 16,
            textTransform: 'uppercase',
          }}
        >
          {caption}
        </div>
      )}
      <div
        style={{
          ...tokenToStyle(D3_TITLE),
          fontFamily: FONT_BODY_EN,
          color: BRAND.white,
          fontWeight: 700,
          minHeight: D3_TITLE.fontSize * D3_TITLE.lineHeight,
          letterSpacing: '0.04em',
        }}
      >
        {reveal.visibleText || ' '}
      </div>
    </div>
  );
};
