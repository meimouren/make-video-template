// Loaded fonts available in Remotion render — Academic Editorial typography stack.
// Cormorant Garamond: high-contrast editorial serif (Oxford/Cambridge press feel)
// IBM Plex Serif: refined readable body serif
// Chinese: Source Han Serif / Songti — editorial-grade Chinese
// FONT_FAMILY_* re-exports preserved for backwards compatibility with legacy components.

import { loadFont as loadCormorant } from '@remotion/google-fonts/CormorantGaramond';
import { loadFont as loadPlexSerif } from '@remotion/google-fonts/IBMPlexSerif';
import { loadFont as loadBaskerville } from '@remotion/google-fonts/LibreBaskerville';
import { loadFont as loadFranklin } from '@remotion/google-fonts/LibreFranklin';

loadCormorant();
loadPlexSerif();
loadBaskerville(); // legacy fallback
loadFranklin(); // legacy fallback

// New canonical aliases (Academic Editorial)
export const FONT_HEAD_EN = '"Cormorant Garamond", "Libre Baskerville", serif';
export const FONT_BODY_EN = '"IBM Plex Serif", "Libre Baskerville", serif';
export const FONT_CN      = '"Source Han Serif SC", "Songti SC", "STSong", "PingFang SC", serif';

// Backwards compatible exports — legacy components import these names
export const FONT_FAMILY_CN = FONT_CN;
export const FONT_FAMILY_EN = FONT_BODY_EN;
