// Legacy font-alias module. The canonical Bold Editorial font stack now lives in
// theme/typography.ts (which also loads Playfair Display via @remotion/google-fonts).
// Re-export from there so any component still importing from '../fonts' stays
// consistent with the new system.
export {
  FONT_HEAD_EN,
  FONT_BODY_EN,
  FONT_CN,
  FONT_CN_SANS,
} from './theme/typography';

import { FONT_CN as _CN, FONT_BODY_EN as _EN } from './theme/typography';

// Backwards-compatible names used by older components.
export const FONT_FAMILY_CN = _CN;
export const FONT_FAMILY_EN = _EN;
