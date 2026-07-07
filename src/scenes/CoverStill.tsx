import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { Watermark } from '../components/Watermark';
import { COMPETITION } from '../config';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

/**
 * Static cover frame for the AMCCover Still composition.
 * Bold Editorial: black top bar, cobalt eyebrow block, giant serif name,
 * thick cobalt rule, bold stat strip on a heavy baseline. $ watermark.
 */
export const CoverStill: React.FC = () => {
  const enName = COMPETITION.name;
  const cnNameFull = COMPETITION.nameCn;

  const enLen = enName.length;
  const enFontSize = enLen <= 3 ? 420 : enLen <= 4 ? 320 : enLen <= 5 ? 250 : 200;

  const cnLen = cnNameFull.length;
  const cnFontSize = cnLen <= 9 ? 86 : cnLen <= 11 ? 74 : 64;

  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <Background />
      <Watermark char="$" color={BRAND.yellow} size={1000} right={-80} bottom={-160} opacity={0.07} />

      {/* top brand bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          background: BRAND.white,
          color: BRAND.black,
          fontFamily: FONT_CN_SANS,
          fontSize: 26,
          letterSpacing: '0.32em',
          padding: '24px 70px',
        }}
      >
        翰林有方 · 国际竞赛系列
      </div>

      {/* content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '188px 70px 130px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            alignSelf: 'flex-start',
            background: BRAND.yellow,
            color: ON_ACCENT,
            fontFamily: FONT_CN,
            fontSize: 36,
            fontWeight: 700,
            padding: '12px 28px',
            letterSpacing: '0.06em',
          }}
        >
          每天介绍一个国际竞赛
        </div>

        <div>
          <div
            style={{
              fontFamily: FONT_HEAD_EN,
              fontSize: enFontSize,
              fontWeight: 900,
              color: BRAND.white,
              lineHeight: 0.82,
              letterSpacing: '-0.03em',
            }}
          >
            {enName}
          </div>
          <div style={{ height: 16, width: 360, background: BRAND.yellow, margin: '40px 0 30px' }} />
          <div
            style={{
              fontFamily: FONT_CN,
              fontSize: cnFontSize,
              fontWeight: 700,
              color: BRAND.white,
              letterSpacing: '0.04em',
            }}
          >
            {cnNameFull}
          </div>
        </div>

        <div
          style={{
            borderTop: `6px solid ${BRAND.white}`,
            paddingTop: 30,
            display: 'flex',
            alignItems: 'baseline',
            gap: 20,
          }}
        >
          <span style={{ fontFamily: FONT_HEAD_EN, fontSize: 128, fontWeight: 900, color: BRAND.yellow, lineHeight: 1 }}>
            60+
          </span>
          <span style={{ fontFamily: FONT_CN, fontSize: 40, color: BRAND.textLight }}>
            国家 · 2018 创办 · 诺奖发起
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
