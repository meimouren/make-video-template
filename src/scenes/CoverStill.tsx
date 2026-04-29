import React from 'react';
import { AbsoluteFill } from 'remotion';
import { COMPETITION } from '../config';
import { BRAND } from '../theme/colors';
import { FONT_BODY_EN, FONT_CN } from '../theme/typography';

/**
 * Static cover frame for the AMCCover Still composition.
 * Same end-state as CoverScene but no animations.
 */
export const CoverStill: React.FC = () => {
  const enName = COMPETITION.name;
  const cnNameFull = COMPETITION.nameCn;

  const enLen = enName.length;
  const enFontSize = enLen <= 3 ? 280 : enLen <= 4 ? 240 : enLen <= 5 ? 200 : 170;
  const enLetterSpacing = enLen <= 3 ? 16 : enLen <= 4 ? 12 : 8;

  const cnLen = cnNameFull.length;
  const cnFontSize = cnLen <= 7 ? 80 : cnLen <= 9 ? 72 : cnLen <= 11 ? 64 : 56;

  return (
    <AbsoluteFill
      style={{
        background: BRAND.black,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
      }}
    >
      <div
        style={{
          fontFamily: FONT_CN,
          fontSize: 36,
          fontWeight: 600,
          color: BRAND.white,
          letterSpacing: '0.4em',
          opacity: 0.85,
        }}
      >
        每天介绍一个国际竞赛
      </div>

      <div
        style={{
          fontFamily: FONT_BODY_EN,
          fontSize: enFontSize,
          fontWeight: 900,
          color: BRAND.yellow,
          letterSpacing: enLetterSpacing,
          textAlign: 'center',
          lineHeight: 1.0,
        }}
      >
        {enName}
      </div>

      <div
        style={{
          width: enLen * (enFontSize * 0.55),
          maxWidth: 800,
          height: 8,
          background: BRAND.yellow,
          borderRadius: 4,
        }}
      />

      <div
        style={{
          fontFamily: FONT_CN,
          fontSize: cnFontSize,
          fontWeight: 700,
          color: BRAND.white,
          letterSpacing: '0.06em',
          textAlign: 'center',
        }}
      >
        {cnNameFull}
      </div>

      <div
        style={{
          marginTop: 28,
          padding: '12px 28px',
          background: BRAND.cardBg,
          border: `1px solid ${BRAND.cardBorder}`,
          borderRadius: 999,
          fontFamily: FONT_CN,
          fontSize: 28,
          color: BRAND.textLight,
          letterSpacing: '0.18em',
          fontWeight: 500,
        }}
      >
        翰林有方 · 国际竞赛系列
      </div>
    </AbsoluteFill>
  );
};
