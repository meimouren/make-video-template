// Loaded fonts available in Remotion render.
// FONT_FAMILY_* re-exports preserved for backwards compatibility with legacy components.
//
// NOTE: @remotion/google-fonts CDN fetch is currently unreliable from this network.
// Skipping the loadFont() calls — browser falls back to system serif/sans-serif via the
// FONT_HEAD_EN / FONT_BODY_EN family stacks. Re-enable when network is stable:
//   import { loadFont as loadBaskerville } from '@remotion/google-fonts/LibreBaskerville';
//   import { loadFont as loadFranklin } from '@remotion/google-fonts/LibreFranklin';
//   loadBaskerville();
//   loadFranklin();

// New canonical aliases (matches theme/typography.ts naming)
export const FONT_HEAD_EN = '"Libre Baskerville", serif';
export const FONT_BODY_EN = '"Libre Franklin", sans-serif';
export const FONT_CN      = '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';

// Backwards compatible exports — legacy components import these names
export const FONT_FAMILY_CN = FONT_CN;
export const FONT_FAMILY_EN = FONT_BODY_EN;
