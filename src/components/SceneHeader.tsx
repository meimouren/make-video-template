import React from 'react';
import { useFrom } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { FONT_CN, FONT_CN_SANS } from '../theme/typography';

/**
 * Shared Bold Editorial scene header: cobalt accent bar + optional kicker +
 * serif title. Slides in from the left; the bar grows top-down.
 */
export const SceneHeader: React.FC<{
  kicker?: string;
  title: string;
  delay?: number;
  titleSize?: number;
}> = ({ kicker, title, delay = 0.1, titleSize = 78 }) => {
  const anim = useFrom({ delay, duration: 0.6, ease: power3Out, from: { x: -24, opacity: 0 } });
  const bar = useFrom({ delay: delay + 0.05, duration: 0.5, ease: power3Out, from: { scale: 0 } });
  return (
    <div style={{ display: 'flex', gap: 22, transform: `translateX(${anim.x}px)`, opacity: anim.opacity }}>
      <div style={{ width: 10, alignSelf: 'stretch', background: BRAND.yellow, transform: `scaleY(${bar.scale})`, transformOrigin: 'top' }} />
      <div>
        {kicker ? (
          <div style={{ fontFamily: FONT_CN_SANS, fontSize: 30, letterSpacing: '0.1em', color: BRAND.textLight, marginBottom: 12 }}>
            {kicker}
          </div>
        ) : null}
        <div style={{ fontFamily: FONT_CN, fontSize: titleSize, fontWeight: 700, color: BRAND.white, lineHeight: 1.05 }}>
          {title}
        </div>
      </div>
    </div>
  );
};
