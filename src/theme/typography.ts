import type { CSSProperties } from 'react';

// Type-scale tokens. Sizes target 1080x1920 vertical canvas at 30fps.
// Floor: body >=36px, headline >=72px (per ~/.claude/memory/feedback_video_mobile_typography.md)

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

export const FONT_HEAD_EN = '"Libre Baskerville", serif';
export const FONT_BODY_EN = '"Libre Franklin", sans-serif';
export const FONT_CN      = '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';

// Helper: spread a token directly into a style object
export const tokenToStyle = (t: TypeToken): CSSProperties => ({
  fontSize: t.fontSize,
  lineHeight: t.lineHeight,
  letterSpacing: t.letterSpacing,
});
