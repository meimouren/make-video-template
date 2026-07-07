import React from 'react';
import { BRAND } from '../theme/colors';
import { FONT_HEAD_EN } from '../theme/typography';

/**
 * Giant ghosted display character behind scene content (editorial watermark).
 * Adds depth + on-theme motif (e.g. $, %, ", a number) without reading as clutter.
 */
export const Watermark: React.FC<{
  char: string;
  color?: string;
  size?: number;
  right?: number;
  left?: number;
  bottom?: number;
  top?: number;
  opacity?: number;
}> = ({ char, color, size = 900, right, left, bottom, top, opacity = 0.05 }) => (
  <div
    style={{
      position: 'absolute',
      right,
      left,
      bottom: bottom ?? (top === undefined ? -180 : undefined),
      top,
      fontFamily: FONT_HEAD_EN,
      fontSize: size,
      fontWeight: 900,
      lineHeight: 0.8,
      color: color ?? BRAND.white,
      opacity,
      pointerEvents: 'none',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    }}
  >
    {char}
  </div>
);
