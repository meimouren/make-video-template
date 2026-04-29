import React from 'react';
import { useStagger } from '../animations/primitives';
import { useNumberCount } from '../animations/data-hooks';
import { back, power3Out } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import {
  D0_CAPTION,
  D1_BODY,
  D2_SUBTITLE,
  D3_TITLE,
  FONT_BODY_EN,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

export interface ScoreCardProps {
  /** Top label e.g. "答全对" */
  label: string;
  correct: number;
  blank: number;
  score: number;
  index: number;
  delay: number;
  /** When true, card uses yellow background (e.g. for the "perfect score" card) */
  emphasis?: boolean;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  label,
  correct,
  blank,
  score,
  index,
  delay,
  emphasis,
}) => {
  const card = useStagger({
    stagger: 0.18,
    index,
    delay,
    duration: 0.6,
    ease: back(1.5).out,
    from: { y: 32, opacity: 0, scale: 0.85 },
  });

  const scoreCounted = useNumberCount({
    delay: delay + index * 0.18 + 0.3,
    duration: 0.9,
    from: 0,
    to: score,
    ease: power3Out,
  });

  const fg = emphasis ? BRAND.black : BRAND.white;
  const bg = emphasis ? BRAND.yellow : BRAND.cardBg;
  const border = emphasis ? 'transparent' : BRAND.cardBorder;
  const accent = emphasis ? BRAND.black : BRAND.yellow;

  return (
    <div
      style={{
        padding: '28px 28px 24px',
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 14,
        transform: `translateY(${card.y}px) scale(${card.scale})`,
        opacity: card.opacity,
        transformOrigin: 'center bottom',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {/* Top label */}
      <div
        style={{
          fontFamily: FONT_CN,
          fontSize: 24,
          fontWeight: 600,
          color: emphasis ? BRAND.black : BRAND.textLight,
          opacity: emphasis ? 0.7 : 1,
          letterSpacing: '0.12em',
        }}
      >
        {label}
      </div>

      {/* Detail row: 答对 X · 留空 Y */}
      <div
        style={{
          ...tokenToStyle(D1_BODY),
          fontFamily: FONT_CN,
          color: fg,
          fontWeight: 400,
          opacity: emphasis ? 0.85 : 0.9,
        }}
      >
        答对 <span style={{ fontWeight: 800, color: accent }}>{correct}</span>
        <span style={{ margin: '0 12px', opacity: 0.4 }}>·</span>
        留空 <span style={{ fontWeight: 800, color: accent }}>{blank}</span>
      </div>

      {/* Big score */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 10,
          marginTop: 4,
        }}
      >
        <div
          style={{
            ...tokenToStyle(D3_TITLE),
            fontFamily: FONT_BODY_EN,
            fontWeight: 800,
            color: accent,
          }}
        >
          {Math.round(scoreCounted * 10) / 10}
        </div>
        <div
          style={{
            ...tokenToStyle(D0_CAPTION),
            fontFamily: FONT_CN,
            fontWeight: 600,
            color: fg,
            opacity: emphasis ? 0.7 : 0.6,
            letterSpacing: '0.1em',
          }}
        >
          分
        </div>
      </div>
    </div>
  );
};
