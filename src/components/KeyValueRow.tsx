import React from 'react';
import { useStagger } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { D1_BODY, D2_SUBTITLE, FONT_CN, tokenToStyle } from '../theme/typography';

export interface KeyValueRowProps {
  label: string;
  value: string;
  index: number;
  delay: number;
}

export const KeyValueRow: React.FC<KeyValueRowProps> = ({ label, value, index, delay }) => {
  const row = useStagger({
    stagger: 0.12,
    index,
    delay,
    duration: 0.55,
    ease: power3Out,
    from: { x: -16, opacity: 0 },
  });
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '20px 24px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderRadius: 12,
        transform: `translateX(${row.x}px)`,
        opacity: row.opacity,
      }}
    >
      <div
        style={{
          ...tokenToStyle(D1_BODY),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 500,
          opacity: 0.85,
        }}
      >
        {label}
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
        {value}
      </div>
    </div>
  );
};
