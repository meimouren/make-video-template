import React from 'react';
import { AbsoluteFill } from 'remotion';
import { FormulaCard } from '../components/FormulaCard';
import { ScoreCard } from '../components/ScoreCard';
import { useFrom } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import {
  D2_SUBTITLE,
  D4_HEADLINE,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

interface ScoringExample {
  correct: number;
  blank: number;
  score: number;
  label: string;
}

interface ScoringSceneProps {
  title: string;
  subtitle: string;
  formula: string;
  scoringExamples: ScoringExample[];
}

export const ScoringScene: React.FC<ScoringSceneProps> = ({
  title,
  subtitle,
  formula,
  scoringExamples,
}) => {
  const titleAnim = useFrom({
    delay: 0.1,
    duration: 0.7,
    ease: power3Out,
    from: { x: -20, opacity: 0 },
  });
  const subtitleAnim = useFrom({
    delay: 0.3,
    duration: 0.6,
    ease: power3Out,
    from: { y: -12, opacity: 0 },
  });

  const hasExamples = scoringExamples && scoringExamples.length > 0;

  return (
    <AbsoluteFill
      style={{
        background: BRAND.black,
        padding: '180px 70px 220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Title block */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 24,
          transform: `translateX(${titleAnim.x}px)`,
          opacity: titleAnim.opacity,
          marginBottom: 18,
        }}
      >
        <div
          style={{
            width: 8,
            alignSelf: 'stretch',
            background: BRAND.yellow,
            borderRadius: 4,
            marginTop: 8,
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              ...tokenToStyle(D4_HEADLINE),
              fontFamily: FONT_CN,
              color: BRAND.yellow,
              fontWeight: 800,
            }}
          >
            {title}
          </div>
          <div
            style={{
              ...tokenToStyle(D2_SUBTITLE),
              fontFamily: FONT_CN,
              color: BRAND.white,
              fontWeight: 400,
              marginTop: 12,
              transform: `translateY(${subtitleAnim.y}px)`,
              opacity: subtitleAnim.opacity,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* Formula card */}
      <div style={{ marginTop: 48, marginBottom: hasExamples ? 32 : 0 }}>
        <FormulaCard formula={formula} delay={0.7} caption="SCORING FORMULA" />
      </div>

      {/* Examples grid (if any) */}
      {hasExamples && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 18,
            marginTop: 12,
          }}
        >
          {scoringExamples.map((ex, i) => (
            <ScoreCard
              key={i}
              index={i}
              delay={1.4}
              label={ex.label}
              correct={ex.correct}
              blank={ex.blank}
              score={ex.score}
              emphasis={i === 0}
            />
          ))}
        </div>
      )}
    </AbsoluteFill>
  );
};
