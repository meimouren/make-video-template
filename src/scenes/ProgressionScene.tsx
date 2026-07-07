import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useStagger, useFrom } from '../animations/primitives';
import { back, power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface PathwayStep {
  stage: string;
  participants: string;
  desc: string;
}

interface ProgressionSceneProps {
  title: string;
  subtitle: string;
  pathway: PathwayStep[];
}

const NUM_COL = 150;
const ROW_GAP = 40;
const ROW_PAD_Y = 38;

const StageRow: React.FC<{
  step: PathwayStep;
  index: number;
  delay: number;
  isLast: boolean;
}> = ({ step, index, delay, isLast }) => {
  const row = useStagger({
    stagger: 0.18,
    index,
    delay,
    duration: 0.6,
    ease: back(1.4).out,
    from: { x: -28, opacity: 0 },
  });
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: ROW_GAP,
        borderBottom: isLast ? 'none' : `1.5px solid ${BRAND.divider}`,
        padding: `${ROW_PAD_Y}px 6px`,
        transform: `translateX(${row.x}px)`,
        opacity: row.opacity,
      }}
    >
      {/* Number (the node) — vertically centered, line drawn as continuous overlay by parent */}
      <div
        style={{
          width: NUM_COL,
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: FONT_HEAD_EN,
            fontSize: 92,
            fontWeight: 900,
            color: BRAND.yellow,
            lineHeight: 1,
            // opaque backing so the continuous line reads as connecting nodes
            background: BRAND.black,
            padding: '2px 8px',
          }}
        >
          {num}
        </div>
      </div>

      {/* Stage + participants + desc */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, flexWrap: 'wrap', marginBottom: 8 }}>
          <div style={{ fontFamily: FONT_CN, fontSize: 50, fontWeight: 700, color: BRAND.white, lineHeight: 1.1 }}>
            {step.stage}
          </div>
          {step.participants && (
            <div
              style={{
                fontFamily: FONT_CN_SANS,
                fontSize: 26,
                fontWeight: 600,
                color: BRAND.yellow,
                letterSpacing: '0.06em',
              }}
            >
              {step.participants}
            </div>
          )}
        </div>
        <div style={{ fontFamily: FONT_CN, fontSize: 34, color: BRAND.textLight, lineHeight: 1.4 }}>
          {step.desc}
        </div>
      </div>
    </div>
  );
};

export const ProgressionScene: React.FC<ProgressionSceneProps> = ({ title, subtitle, pathway }) => {
  const line = useFrom({ delay: 0.9, duration: 0.7, ease: power3Out, from: { scale: 0 } });
  // Horizontal center of the number column, measured from the rows' left edge.
  const lineLeft = NUM_COL / 2;

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
          }}
        >
          <div style={{ position: 'relative' }}>
            {/* Continuous vertical line connecting adjacent numbers */}
            <div
              style={{
                position: 'absolute',
                top: ROW_PAD_Y,
                bottom: ROW_PAD_Y,
                left: lineLeft - 1,
                width: 2,
                background: BRAND.yellow,
                transform: `scaleY(${line.scale})`,
                transformOrigin: 'top',
              }}
            />
            {pathway.map((step, i) => (
              <StageRow
                key={step.stage + i}
                step={step}
                index={i}
                delay={0.8}
                isLast={i === pathway.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
