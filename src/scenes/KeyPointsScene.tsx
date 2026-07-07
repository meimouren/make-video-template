import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useStagger } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN } from '../theme/typography';

interface KeyPoint {
  label: string;
  value: string;
}

interface KeyPointsSceneProps {
  title: string;
  subtitle: string;
  keyPoints: KeyPoint[];
}

/** Editorial info list: thick ink rule, hairline-divided rows, cobalt values. */
export const KeyPointsScene: React.FC<KeyPointsSceneProps> = ({ title, subtitle, keyPoints }) => {
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 56,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderTop: `2px solid ${BRAND.white}`,
            }}
          >
            {keyPoints.map((kp, i) => (
              <KeyPointRow key={kp.label + i} kp={kp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const KeyPointRow: React.FC<{ kp: KeyPoint; index: number }> = ({ kp, index }) => {
  const row = useStagger({
    stagger: 0.12,
    index,
    delay: 0.5,
    duration: 0.6,
    ease: power3Out,
    from: { y: 24, opacity: 0 },
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        borderBottom: `1.5px solid ${BRAND.divider}`,
        padding: '36px 6px',
        transform: `translateY(${row.y}px)`,
        opacity: row.opacity,
      }}
    >
      <div
        style={{
          flex: 1,
          fontFamily: FONT_CN,
          fontSize: 50,
          fontWeight: 700,
          color: BRAND.white,
          lineHeight: 1.15,
        }}
      >
        {kp.label}
      </div>
      <div
        style={{
          fontFamily: FONT_HEAD_EN,
          fontSize: 60,
          fontWeight: 900,
          color: BRAND.yellow,
          textAlign: 'right',
          lineHeight: 1.0,
          letterSpacing: '-0.01em',
        }}
      >
        {kp.value}
      </div>
    </div>
  );
};
