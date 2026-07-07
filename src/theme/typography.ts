import type { CSSProperties } from 'react';
import { loadFont as loadPlayfair } from '@remotion/google-fonts/PlayfairDisplay';

// Bold Editorial type system.
// Latin display = Playfair Display (high-contrast didone — bold + editorial).
// Loaded via @remotion/google-fonts (Latin only, small + reliable).
// CJK = system serif stack (Source Han Serif / SimSun) — reliable on the
// render machine without a heavy webfont download.
loadPlayfair();

// Type-scale tokens. Sizes target 1080x1920 vertical canvas at 30fps.
// Floor: body >=36px, headline >=72px.

export interface TypeToken {
  fontSize: number;        // px
  lineHeight: number;      // unitless multiplier
  letterSpacing: string;   // CSS letter-spacing value
}

export const D5_DISPLAY:   TypeToken = { fontSize: 112, lineHeight: 1.0,  letterSpacing: '-0.02em'  };
export const D4_HEADLINE:  TypeToken = { fontSize:  84, lineHeight: 1.08, letterSpacing: '-0.015em' };
export const D3_TITLE:     TypeToken = { fontSize:  60, lineHeight: 1.15, letterSpacing: '-0.01em'  };
export const D2_SUBTITLE:  TypeToken = { fontSize:  42, lineHeight: 1.3,  letterSpacing: '0'        };
export const D1_BODY:      TypeToken = { fontSize:  36, lineHeight: 1.7,  letterSpacing: '0'        };
export const D0_CAPTION:   TypeToken = { fontSize:  26, lineHeight: 1.5,  letterSpacing: '0'        };

// Display serif — big EN headlines, numbers, "IEO"
export const FONT_HEAD_EN = '"Playfair Display", "Times New Roman", Georgia, serif';
// Small Latin labels / eyebrows — clean grotesk
export const FONT_BODY_EN = '"Libre Franklin", system-ui, -apple-system, sans-serif';
// Chinese — editorial serif (headings + body)
export const FONT_CN      = '"Source Han Serif SC", "Noto Serif SC", "SimSun", "STSong", serif';
// Chinese — sans for tiny chrome labels where serif gets noisy
export const FONT_CN_SANS = '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';

// Helper: spread a token directly into a style object
export const tokenToStyle = (t: TypeToken): CSSProperties => ({
  fontSize: t.fontSize,
  lineHeight: t.lineHeight,
  letterSpacing: t.letterSpacing,
});
