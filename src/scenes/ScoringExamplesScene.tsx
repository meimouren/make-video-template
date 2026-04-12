import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";

type ScoringExample = { correct: number; blank: number; score: number; label: string };

type ScoringExamplesSceneProps = {
  title: string;
  subtitle: string;
  scoringExamples: ScoringExample[];
};

export const ScoringExamplesScene: React.FC<ScoringExamplesSceneProps> = ({
  title, subtitle, scoringExamples,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: "60px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        {scoringExamples.map((ex, i) => {
          const cardProgress = spring({
            frame: Math.max(0, frame - 0.4 * fps - i * 0.15 * fps),
            fps,
            config: { damping: 16, stiffness: 100, mass: 0.6 },
          });
          const isTop = i === 0;

          return (
            <div
              key={i}
              style={{
                fontFamily: FONT_FAMILY_CN,
                width: 440,
                background: isTop ? COLORS.primary : COLORS.cardBg,
                border: `2px solid ${isTop ? COLORS.primary : COLORS.cardBorder}`,
                borderRadius: 20,
                padding: "28px 22px",
                textAlign: "center",
                opacity: cardProgress,
                transform: `translateY(${(1 - cardProgress) * 25}px)`,
              }}
            >
              <div style={{ fontSize: 36, color: isTop ? "#ffffffBB" : COLORS.textLight, marginBottom: 10 }}>
                {ex.label}
              </div>
              <div style={{ fontFamily: FONT_FAMILY_EN, fontSize: 72, fontWeight: 800, color: isTop ? "#fff" : COLORS.highlight, lineHeight: 1, marginBottom: 14 }}>
                {ex.score}
              </div>
              <div style={{ fontSize: 30, color: isTop ? "#ffffffAA" : COLORS.textLight }}>
                对{ex.correct}题 · 空{ex.blank}题
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
