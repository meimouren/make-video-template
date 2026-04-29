import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useFrom, useTextReveal } from '../animations/primitives';
import { back, power3Out } from '../animations/easings';
import { COMPETITION } from '../config';
import { BRAND } from '../theme/colors';
import { D2_SUBTITLE, FONT_BODY_EN, FONT_CN, tokenToStyle } from '../theme/typography';

interface CoverSceneProps {
  seriesName: string;
  competitionName: string;
  competitionNameEn: string;
  episodeTag: string;
}

export const CoverScene: React.FC<CoverSceneProps> = ({
  seriesName,
  competitionName,
  episodeTag,
}) => {
  const cnNameFull = COMPETITION.nameCn;

  // Adaptive font sizes
  const enLen = competitionName.length;
  const enFontSize = enLen <= 3 ? 280 : enLen <= 4 ? 240 : enLen <= 5 ? 200 : 170;
  const enLetterSpacing = enLen <= 3 ? 16 : enLen <= 4 ? 12 : 8;

  const cnLen = cnNameFull.length;
  const cnFontSize = cnLen <= 7 ? 80 : cnLen <= 9 ? 72 : cnLen <= 11 ? 64 : 56;

  // Series name on top
  const seriesAnim = useFrom({
    delay: 0.1,
    duration: 0.5,
    ease: power3Out,
    from: { y: -20, opacity: 0 },
  });

  // Big EN name reveal
  const enReveal = useTextReveal({
    text: competitionName,
    delay: 0.4,
    durationPerChar: 0.07,
  });

  // Yellow underline bar grows after EN name
  const underlineAnim = useFrom({
    delay: 0.4 + competitionName.length * 0.07 + 0.15,
    duration: 0.55,
    ease: power3Out,
    from: { scale: 0 },
  });

  // CN full name fades in
  const cnAnim = useFrom({
    delay: 0.4 + competitionName.length * 0.07 + 0.4,
    duration: 0.55,
    ease: power3Out,
    from: { y: 14, opacity: 0 },
  });

  // Episode tag chip pops up last
  const chipAnim = useFrom({
    delay: 1.5,
    duration: 0.5,
    ease: back(1.6).out,
    from: { y: 16, opacity: 0, scale: 0.85 },
  });

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
          opacity: seriesAnim.opacity * 0.85,
          transform: `translateY(${seriesAnim.y}px)`,
        }}
      >
        {seriesName}
      </div>

      {/* Big EN name with reveal */}
      <div
        style={{
          fontFamily: FONT_BODY_EN,
          fontSize: enFontSize,
          fontWeight: 900,
          color: BRAND.yellow,
          letterSpacing: enLetterSpacing,
          textAlign: 'center',
          minHeight: enFontSize * 1.0,
          lineHeight: 1.0,
        }}
      >
        {enReveal.visibleText || ' '}
      </div>

      {/* Yellow underline */}
      <div
        style={{
          width: enLen * (enFontSize * 0.55),
          maxWidth: 800,
          height: 8,
          background: BRAND.yellow,
          borderRadius: 4,
          transform: `scaleX(${underlineAnim.scale})`,
          transformOrigin: 'center',
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
          opacity: cnAnim.opacity,
          transform: `translateY(${cnAnim.y}px)`,
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
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_CN,
          fontSize: 28,
          color: BRAND.textLight,
          letterSpacing: '0.18em',
          fontWeight: 500,
          transform: `translateY(${chipAnim.y}px) scale(${chipAnim.scale})`,
          opacity: chipAnim.opacity,
        }}
      >
        {episodeTag}
      </div>
    </AbsoluteFill>
  );
};
