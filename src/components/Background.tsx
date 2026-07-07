import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { BRAND } from '../theme/colors';

/**
 * Bold Editorial background system — visible (but restrained) so pages never
 * read as blank white. Layers, back to front:
 *   1. paper base
 *   2. fine graph-paper grid (academic / ledger texture), slowly drifting
 *   3. editorial column rules (magazine structure)
 *   4. a cobalt half-tone dot cluster decorating the bottom-right corner
 *   5. a thin inset editorial frame
 */
export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 180) * 10;

  return (
    <AbsoluteFill style={{ background: BRAND.black, overflow: 'hidden' }}>
      {/* graph-paper grid */}
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${BRAND.white}14 1px, transparent 1px), linear-gradient(90deg, ${BRAND.white}14 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          transform: `translateY(${drift}px)`,
        }}
      />

      {/* editorial column rules */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        {[1, 2, 3, 4].map((i) => (
          <line key={i} x1={`${i * 20}%`} y1="0" x2={`${i * 20}%`} y2="100%" stroke={BRAND.white} strokeWidth={1} opacity={0.05} />
        ))}
      </svg>

      {/* cobalt half-tone corner decoration (bottom-right) */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: 560,
          height: 560,
          backgroundImage: `radial-gradient(${BRAND.yellow} 3px, transparent 3.5px)`,
          backgroundSize: '32px 32px',
          opacity: 0.14,
          WebkitMaskImage: 'radial-gradient(circle at 100% 100%, #000 0%, transparent 68%)',
          maskImage: 'radial-gradient(circle at 100% 100%, #000 0%, transparent 68%)',
        }}
      />

      {/* thin inset editorial frame */}
      <div style={{ position: 'absolute', inset: 34, border: `1px solid ${BRAND.white}1A` }} />
    </AbsoluteFill>
  );
};
