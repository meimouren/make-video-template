import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { BRAND } from '../theme/colors';
import { FONT_CN_SANS } from '../theme/typography';
import durations from '../scene-durations.json';

// Hide the persistent chip during the cover (scene 0), which brands itself in
// its own top bar — avoids the doubled "翰林有方" at the top.
const COVER_END = (durations.sceneDurations?.[0] ?? 175) - 8;

/**
 * Minimal persistent brand mark — a small dark chip, top-right, on content scenes.
 */
export const BrandOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  if (frame < COVER_END) return null;

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          top: 54,
          right: 48,
          background: BRAND.white,
          color: BRAND.black,
          fontFamily: FONT_CN_SANS,
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: '0.18em',
          padding: '8px 16px',
        }}
      >
        翰林有方
      </div>
    </AbsoluteFill>
  );
};
