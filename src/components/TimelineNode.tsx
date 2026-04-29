import React from 'react';
import { useStagger } from '../animations/primitives';
import { back, power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { D0_CAPTION, D1_BODY, D2_SUBTITLE, FONT_BODY_EN, FONT_CN, tokenToStyle } from '../theme/typography';

export interface TimelineNodeProps {
  date: string;
  event: string;
  index: number;
  delay: number;
  isLast: boolean;
  /** When true, the node is highlighted as the upcoming/current event */
  highlight?: boolean;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({
  date,
  event,
  index,
  delay,
  isLast,
  highlight,
}) => {
  const dot = useStagger({
    stagger: 0.18,
    index,
    delay,
    duration: 0.5,
    ease: back(1.5).out,
    from: { scale: 0 },
  });
  const text = useStagger({
    stagger: 0.18,
    index,
    delay: delay + 0.12,
    duration: 0.5,
    ease: power3Out,
    from: { x: 16, opacity: 0 },
  });
  const line = useStagger({
    stagger: 0.18,
    index,
    delay: delay + 0.25,
    duration: 0.45,
    ease: power3Out,
    from: { scale: 0 },
  });

  return (
    <div style={{ display: 'flex', gap: 24, position: 'relative' }}>
      {/* Left: dot + connector */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 28 }}>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 999,
            background: highlight ? BRAND.yellow : BRAND.white,
            transform: `scale(${dot.scale})`,
            boxShadow: highlight ? `0 0 16px ${BRAND.yellow}88` : 'none',
            marginTop: 4,
          }}
        />
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: 3,
              background: BRAND.divider,
              marginTop: 8,
              transform: `scaleY(${line.scale})`,
              transformOrigin: 'top',
            }}
          />
        )}
      </div>

      {/* Right: date + event */}
      <div
        style={{
          flex: 1,
          paddingBottom: isLast ? 0 : 20,
          transform: `translateX(${text.x}px)`,
          opacity: text.opacity,
        }}
      >
        <div
          style={{
            ...tokenToStyle(D0_CAPTION),
            fontFamily: FONT_BODY_EN,
            color: highlight ? BRAND.yellow : BRAND.textLight,
            fontWeight: 700,
            letterSpacing: '0.12em',
            marginBottom: 4,
          }}
        >
          {date}
        </div>
        <div
          style={{
            ...tokenToStyle(D1_BODY),
            fontFamily: FONT_CN,
            color: BRAND.white,
            fontWeight: highlight ? 700 : 400,
          }}
        >
          {event}
        </div>
      </div>
    </div>
  );
};
