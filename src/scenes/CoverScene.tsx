import React from 'react';
import { AbsoluteFill } from 'remotion';
import { COMPETITION } from '../config';
import { BRAND } from '../theme/colors';
import { FONT_BODY_EN, FONT_CN } from '../fonts';

interface CoverSceneProps {
  seriesName: string;
  competitionName: string;
  competitionNameEn: string;
  episodeTag: string;
}

/**
 * Cover scene — STATIC from frame 0 so platform auto-cover extraction works.
 * (Previously had reveal animations that left frame 0 blank, which broke
 *  Douyin/Xiaohongshu/Bilibili first-frame thumbnail auto-detection.)
 *
 * Same end-state visual as CoverStill — first frame == final frame.
 */
export const CoverScene: React.FC<CoverSceneProps> = ({
  seriesName,
  competitionName,
  episodeTag,
}) => {
  const cnNameFull = COMPETITION.nameCn;

  // Adaptive font sizes
  const enLen = competitionName.length;
  const enFontSize = enLen <= 3 ? 280 : enLen <= 4 ? 240 : enLen <= 5 ? 200 : enLen <= 8 ? 170 : 140;
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
      {/* Series name */}
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
        {seriesName}
      </div>

      {/* Big EN name */}
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
        {competitionName}
      </div>

      {/* Yellow underline */}
      <div
        style={{
          width: Math.min(enLen * (enFontSize * 0.55), 800),
          height: 8,
          background: BRAND.yellow,
          borderRadius: 4,
        }}
      />

      {/* CN full name */}
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

      {/* Episode tag chip */}
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
        {episodeTag}
      </div>
    </AbsoluteFill>
  );
};
