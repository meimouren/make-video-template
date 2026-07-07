import React from 'react';
import { AbsoluteFill } from 'remotion';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface QuoteSceneProps {
  kicker?: string;
  lines?: string[];
  foot?: string;
}

/**
 * Inverted cobalt "key message" scene — the rhythm accent / punctuation page.
 * Full-bleed accent background, reversed-out serif statement, white dot
 * halftone + giant ghost quote mark for depth. Used sparingly (2-3 per video).
 */
export const QuoteScene: React.FC<QuoteSceneProps> = ({
  kicker = 'WHY IT MATTERS',
  lines = ['国际科学奥赛', '唯一的', '经济学竞赛'],
  foot = '诺奖得主 Eric Maskin 发起 · 2017',
}) => {
  return (
    <AbsoluteFill style={{ background: BRAND.yellow, overflow: 'hidden' }}>
      {/* white dot halftone */}
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(${ON_ACCENT}22 1.6px, transparent 1.7px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* giant ghost quote mark */}
      <div
        style={{
          position: 'absolute',
          right: 30,
          top: -120,
          fontFamily: FONT_HEAD_EN,
          fontSize: 900,
          fontWeight: 900,
          lineHeight: 1,
          color: `${ON_ACCENT}1F`,
          pointerEvents: 'none',
        }}
      >
        ”
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '170px 70px 160px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: ON_ACCENT,
        }}
      >
        <div style={{ fontFamily: FONT_CN_SANS, fontSize: 30, letterSpacing: '0.4em', opacity: 0.85 }}>
          {kicker}
        </div>

        <div style={{ fontFamily: FONT_CN, fontSize: 110, fontWeight: 700, lineHeight: 1.18 }}>
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>

        <div
          style={{
            borderTop: `1px solid ${ON_ACCENT}66`,
            paddingTop: 22,
            fontFamily: FONT_CN,
            fontSize: 36,
            opacity: 0.92,
          }}
        >
          {foot}
        </div>
      </div>
    </AbsoluteFill>
  );
};
