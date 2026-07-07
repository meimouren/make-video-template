import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { Watermark } from '../components/Watermark';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface BigStatSceneProps {
  kicker?: string;
  value?: string;
  unit?: string;
  foot?: string;
  footEmphasis?: string;
  watermark?: string;
}

/**
 * Dramatic single-number scene — the "big number" hero of the data set.
 * Giant serif numeral dominates; cobalt unit block + heavy baseline keep it
 * structured. Static end-state (used for proof stills + as a scene template).
 */
export const BigStatScene: React.FC<BigStatSceneProps> = ({
  kicker = '全球站 · 经济学考试',
  value = '40',
  unit = '道选择题 · 90 分钟',
  foot = '＋ 5 道开放题 · ',
  footEmphasis = '取最高 4 题计分',
  watermark = '%',
}) => {
  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <Background />
      <Watermark char={watermark} color={BRAND.white} size={1100} left={-60} top={260} opacity={0.05} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '150px 70px 170px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontFamily: FONT_CN_SANS,
            fontSize: 32,
            letterSpacing: '0.14em',
            color: BRAND.textLight,
            borderBottom: `5px solid ${BRAND.white}`,
            paddingBottom: 18,
          }}
        >
          {kicker}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div
            style={{
              fontFamily: FONT_HEAD_EN,
              fontSize: 400,
              fontWeight: 900,
              color: BRAND.white,
              lineHeight: 0.78,
              letterSpacing: '-0.04em',
            }}
          >
            {value}
          </div>
          <div
            style={{
              background: BRAND.yellow,
              color: ON_ACCENT,
              fontFamily: FONT_CN,
              fontSize: 40,
              fontWeight: 700,
              padding: '12px 28px',
              marginTop: 26,
            }}
          >
            {unit}
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${BRAND.cardBorder}`,
            paddingTop: 24,
            fontFamily: FONT_CN,
            fontSize: 42,
            color: BRAND.white,
          }}
        >
          {foot}
          <span style={{ color: BRAND.yellow, fontWeight: 700 }}>{footEmphasis}</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
