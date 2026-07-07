import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN } from '../theme/typography';

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface PrepSceneProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

const StepRow: React.FC<{ step: Step; index: number; delay: number }> = ({ step, index, delay }) => {
  const row = useStagger({
    stagger: 0.16,
    index,
    delay,
    duration: 0.6,
    ease: back(1.4).out,
    from: { x: -28, opacity: 0 },
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 34,
        borderBottom: `1.5px solid ${BRAND.divider}`,
        padding: '32px 6px',
        transform: `translateX(${row.x}px)`,
        opacity: row.opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONT_HEAD_EN,
          fontSize: 92,
          fontWeight: 900,
          color: BRAND.yellow,
          width: 150,
          lineHeight: 1,
        }}
      >
        {step.num}
      </div>
      <div style={{ flex: 1, paddingTop: 12 }}>
        <div style={{ fontFamily: FONT_CN, fontSize: 50, fontWeight: 700, color: BRAND.white, marginBottom: 8 }}>
          {step.title}
        </div>
        <div style={{ fontFamily: FONT_CN, fontSize: 34, color: BRAND.textLight, lineHeight: 1.4 }}>
          {step.desc}
        </div>
      </div>
    </div>
  );
};

export const PrepScene: React.FC<PrepSceneProps> = ({ title, subtitle, steps }) => {
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
            marginTop: 50,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderTop: `2px solid ${BRAND.white}`,
            }}
          >
            {steps.map((s, i) => (
              <StepRow key={s.num + i} step={s} index={i} delay={0.8} />
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
