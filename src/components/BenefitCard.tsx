import React from 'react';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D1_BODY, D2_SUBTITLE, FONT_CN, tokenToStyle } from '../theme/typography';

export interface BenefitCardProps {
  /** A short emoji or symbol; we keep it minimal but allow it for legacy compatibility */
  icon?: string;
  title: string;
  desc: string;
  index: number;
  delay: number;
}

const palette = [DATA.red, DATA.blue, DATA.green, DATA.orange];

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, desc, index, delay }) => {
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
        padding: '32px 28px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderRadius: 16,
        transform: `translateY(${card.y}px) scale(${card.scale})`,
        opacity: card.opacity,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        overflow: 'hidden',
      }}
    >
      {/* Top-left accent corner */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 56,
          height: 4,
          background: accent,
        }}
      />

      {/* Number badge */}
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 22,
          color: accent,
          fontWeight: 700,
          letterSpacing: '0.18em',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div
        style={{
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_CN,
          color: BRAND.yellow,
          fontWeight: 800,
        }}
      >
        {title}
      </div>

      <div
        style={{
          ...tokenToStyle(D1_BODY),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 400,
          opacity: 0.9,
          lineHeight: 1.5,
        }}
      >
        {desc}
      </div>
    </div>
  );
};
