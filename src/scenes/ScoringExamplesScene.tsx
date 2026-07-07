import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useStagger } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_CN } from '../theme/typography';

interface ScoringExample {
  label: string;
  value: string;
  color?: string;
}

interface ScoringExamplesSceneProps {
  title: string;
  subtitle: string;
  scoringExamples: ScoringExample[];
}

/** Editorial row list: hairline-divided rows, ink labels, colored value chips. */
export const ScoringExamplesScene: React.FC<ScoringExamplesSceneProps> = ({
  title,
  subtitle,
  scoringExamples,
}) => {
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
            {scoringExamples.map((ex, i) => (
              <ScoringRow key={ex.label + i} ex={ex} index={i} />
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ScoringRow: React.FC<{ ex: ScoringExample; index: number }> = ({ ex, index }) => {
  const row = useStagger({
    stagger: 0.12,
    index,
    delay: 0.5,
    duration: 0.6,
    ease: power3Out,
    from: { y: 24, opacity: 0 },
  });
  const chipColor = ex.color ?? BRAND.yellow;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 40,
        borderBottom: `1.5px solid ${BRAND.divider}`,
        padding: '32px 6px',
        transform: `translateY(${row.y}px)`,
        opacity: row.opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONT_CN,
          fontSize: 50,
          fontWeight: 700,
          color: BRAND.white,
          lineHeight: 1.15,
        }}
      >
        {ex.label}
      </div>
      <div
        style={{
          background: chipColor,
          color: ON_ACCENT,
          fontFamily: FONT_CN,
          fontSize: 40,
          fontWeight: 700,
          padding: '12px 30px',
          lineHeight: 1.1,
          whiteSpace: 'nowrap',
        }}
      >
        {ex.value}
      </div>
    </div>
  );
};
