import React from 'react';
import { useStagger } from '../animations/primitives';
import { useBarGrow, useNumberCount } from '../animations/data-hooks';
import { power3Out } from '../animations/easings';
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

export interface BarRowProps {
  name: string;
  /** 0-100 percentage */
  percentage: number;
  topics?: string;
  index: number;
  delay: number;
  /** Reference max for relative bar width (default 100) */
  maxPercentage?: number;
}

export const BarRow: React.FC<BarRowProps> = ({
  name,
  percentage,
  topics,
  index,
  delay,
  maxPercentage = 100,
}) => {
  const labelAnim = useStagger({
    stagger: 0.12,
    index,
    delay,
    duration: 0.5,
    ease: power3Out,
    from: { x: -16, opacity: 0 },
  });
  const barProgress = useBarGrow({
    delay: delay + 0.2,
    duration: 1.0,
    index,
    stagger: 0.12,
    ease: power3Out,
  });
  const counted = useNumberCount({
    delay: delay + 0.2 + index * 0.12,
    duration: 1.0,
    from: 0,
    to: percentage,
    ease: power3Out,
  });

  const targetWidthPercent = (percentage / maxPercentage) * 100;
  const animatedWidth = targetWidthPercent * barProgress;
  // Use red for top performer (>=30%), blue for others
  const barColor = percentage >= 30 ? DATA.red : DATA.blue;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        transform: `translateX(${labelAnim.x}px)`,
        opacity: labelAnim.opacity,
      }}
    >
      {/* Top row: name + percentage */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <div
          style={{
            ...tokenToStyle(D2_SUBTITLE),
            fontFamily: FONT_CN,
            fontWeight: 700,
            color: BRAND.white,
          }}
        >
          {name}
        </div>
        <div
          style={{
            ...tokenToStyle(D3_TITLE),
            fontFamily: FONT_BODY_EN,
            fontWeight: 800,
            color: barColor === DATA.red ? BRAND.yellow : BRAND.white,
          }}
        >
          {Math.round(counted)}%
        </div>
      </div>

      {/* Bar track + fill */}
      <div
        style={{
          height: 14,
          width: '100%',
          background: BRAND.cardBg,
          borderRadius: 7,
          overflow: 'hidden',
          border: `1px solid ${BRAND.cardBorder}`,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${animatedWidth}%`,
            background: `linear-gradient(90deg, ${barColor} 0%, ${barColor} 100%)`,
            borderRadius: 7,
            boxShadow: `0 0 24px ${barColor}55`,
          }}
        />
      </div>

      {/* Topics description (if provided) */}
      {topics && (
        <div
          style={{
            ...tokenToStyle(D0_CAPTION),
            fontFamily: FONT_CN,
            color: BRAND.textLight,
            marginTop: 4,
          }}
        >
          {topics}
        </div>
      )}
    </div>
  );
};
