import React from 'react';
import { AbsoluteFill } from 'remotion';
import { BRAND } from '../theme/colors';

/**
 * Academic Editorial background — warm parchment with subtle vertical rule grid
 * (like the faint rules on a Penguin Classics inside cover).
 */
export const Background: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: BRAND.black, overflow: 'hidden' }}>
      {/* Very subtle vertical column rules — editorial print signature */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        {Array.from({ length: 6 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={`${(i + 1) * 14.28}%`}
            y1="0"
            x2={`${(i + 1) * 14.28}%`}
            y2="100%"
            stroke={BRAND.divider}
            strokeWidth={1}
            opacity={0.25}
          />
        ))}
      </svg>
    </AbsoluteFill>
  );
};
