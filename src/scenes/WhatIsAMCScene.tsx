import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useStagger } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface Level {
  name: string;
  target?: string;
  questions?: number;
  time?: string;
  scoring?: string;
  detail?: string;
  badge?: string;
  color?: string;
}

interface WhatIsAMCSceneProps {
  title: string;
  subtitle: string;
  levels: Level[];
}

/** Bold Editorial competition-level breakdown: hairline-divided rows. */
export const WhatIsAMCScene: React.FC<WhatIsAMCSceneProps> = ({ title, subtitle, levels }) => {
  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <Background />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '150px 70px 290px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SceneHeader kicker={subtitle} title={title} />

        <div
          style={{
            flex: 1,
            marginTop: 60,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderTop: `2px solid ${BRAND.white}`,
          }}
        >
          {levels.map((lv, i) => (
            <LevelRow key={lv.name + i} level={lv} index={i} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const LevelRow: React.FC<{ level: Level; index: number }> = ({ level, index }) => {
  const row = useStagger({
    stagger: 0.13,
    index,
    delay: 0.6,
    duration: 0.6,
    ease: power3Out,
    from: { y: 18, opacity: 0 },
  });
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        borderBottom: `1.5px solid ${BRAND.divider}`,
        padding: '28px 6px',
        transform: `translateY(${row.y}px)`,
        opacity: row.opacity,
      }}
    >
      {/* big serif index numeral */}
      <div
        style={{
          fontFamily: FONT_HEAD_EN,
          fontSize: 92,
          fontWeight: 900,
          color: BRAND.yellow,
          width: 130,
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div style={{ flex: 1 }}>
        {/* name + badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 10 }}>
          <div style={{ fontFamily: FONT_CN, fontSize: 56, fontWeight: 700, color: BRAND.white }}>{level.name}</div>
          {level.badge ? (
            <span
              style={{
                fontFamily: FONT_CN_SANS,
                fontSize: 28,
                fontWeight: 700,
                color: ON_ACCENT,
                background: BRAND.yellow,
                padding: '6px 16px',
                letterSpacing: '0.04em',
              }}
            >
              {level.badge}
            </span>
          ) : null}
        </div>

        {/* target (cobalt) */}
        {level.target ? (
          <div style={{ fontFamily: FONT_CN, fontSize: 36, fontWeight: 700, color: BRAND.yellow, marginBottom: 6 }}>
            {level.target}
          </div>
        ) : null}

        {/* detail (muted) */}
        {level.detail ? (
          <div style={{ fontFamily: FONT_CN, fontSize: 34, color: BRAND.textLight, lineHeight: 1.4 }}>
            {level.detail}
          </div>
        ) : null}
      </div>
    </div>
  );
};
