import React from 'react';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D0_CAPTION, D1_BODY, D2_SUBTITLE, FONT_CN, tokenToStyle } from '../theme/typography';

export interface LevelCardProps {
  name: string;
  // AMC-style full schema
  target?: string;
  questions?: number;
  time?: string;
  scoring?: string;
  // Simple schema
  detail?: string;
  badge?: string;
  /** badge color hint — if not provided, falls back to brand yellow */
  badgeColor?: string;
  index: number;
  delay: number;
}

const dataPaletteByIndex = [DATA.red, DATA.blue, DATA.green, DATA.orange];

export const LevelCard: React.FC<LevelCardProps> = ({
  name,
  target,
  questions,
  time,
  scoring,
  detail,
  badge,
  badgeColor,
  index,
  delay,
}) => {
  const card = useStagger({
    stagger: 0.15,
    index,
    delay,
    duration: 0.6,
    ease: back(1.4).out,
    from: { y: 24, opacity: 0, scale: 0.9 },
  });

  const accent = badgeColor ?? dataPaletteByIndex[index % dataPaletteByIndex.length];

  const hasFullSchema = target || questions || time || scoring;

  return (
    <div
      style={{
        position: 'relative',
        padding: '32px 28px 28px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderRadius: 16,
        transform: `translateY(${card.y}px) scale(${card.scale})`,
        opacity: card.opacity,
        transformOrigin: 'center bottom',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {/* Top: badge + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: accent,
            boxShadow: `0 0 18px ${accent}88`,
          }}
        />
        <div
          style={{
            ...tokenToStyle(D2_SUBTITLE),
            fontFamily: FONT_CN,
            fontWeight: 800,
            color: BRAND.yellow,
          }}
        >
          {name}
        </div>
        {badge && (
          <div
            style={{
              marginLeft: 'auto',
              padding: '4px 12px',
              background: 'transparent',
              border: `1px solid ${accent}`,
              borderRadius: 999,
              fontFamily: FONT_CN,
              fontSize: 22,
              color: accent,
              fontWeight: 700,
            }}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Detail rows */}
      {hasFullSchema ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {target && (
            <Row label="对象" value={target} />
          )}
          {questions !== undefined && (
            <Row label="题量" value={`${questions} 题`} />
          )}
          {time && <Row label="时长" value={time} />}
          {scoring && <Row label="计分" value={scoring} />}
        </div>
      ) : (
        <div
          style={{
            ...tokenToStyle(D1_BODY),
            fontFamily: FONT_CN,
            color: BRAND.white,
            fontWeight: 400,
            opacity: 0.95,
          }}
        >
          {detail}
        </div>
      )}
    </div>
  );
};

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
    <div
      style={{
        ...tokenToStyle(D0_CAPTION),
        fontFamily: FONT_CN,
        color: BRAND.textLight,
        minWidth: 60,
      }}
    >
      {label}
    </div>
    <div
      style={{
        ...tokenToStyle(D1_BODY),
        fontFamily: FONT_CN,
        color: BRAND.white,
        fontWeight: 600,
      }}
    >
      {value}
    </div>
  </div>
);
