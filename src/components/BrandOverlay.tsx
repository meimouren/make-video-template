import React from 'react';
import { AbsoluteFill } from 'remotion';
import { BRAND } from '../theme/colors';
import { FONT_BODY_EN, FONT_CN, FONT_HEAD_EN } from '../fonts';

/**
 * Academic Editorial brand bar.
 * Top: ink "翰林有方" centered with editorial rule.
 * Top-left: small em-dash + EN series label.
 * Top-right: italic note caption.
 */
export const BrandOverlay: React.FC = () => {
  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {/* Top-left: small EN series label */}
      <div
        style={{
          position: 'absolute',
          top: 70,
          left: 40,
          fontFamily: FONT_BODY_EN,
          fontSize: 18,
          fontWeight: 600,
          color: BRAND.yellow,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
        }}
      >
        Hanlin · Series
      </div>

      {/* Top-center brand name (ink, serif) */}
      <div
        style={{
          position: 'absolute',
          top: 64,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontFamily: FONT_CN,
          fontSize: 32,
          fontWeight: 700,
          color: BRAND.white,
          letterSpacing: '0.24em',
        }}
      >
        翰林有方
      </div>

      {/* Top-center thin rule under brand */}
      <div
        style={{
          position: 'absolute',
          top: 110,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 40,
          height: 1.5,
          background: BRAND.yellow,
        }}
      />

      {/* Top-right italic note */}
      <div
        style={{
          position: 'absolute',
          top: 72,
          right: 36,
          fontFamily: FONT_CN,
          fontSize: 18,
          fontStyle: 'italic',
          color: BRAND.textLight,
          letterSpacing: '0.04em',
        }}
      >
        — 视频部分素材仅供参考
      </div>
    </AbsoluteFill>
  );
};
