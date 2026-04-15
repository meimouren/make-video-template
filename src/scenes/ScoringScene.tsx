import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { FormulaDisplay } from "../components/FormulaDisplay";

type ScoringExample = { correct: number; blank: number; score: number; label: string };

type ScoringSceneProps = {
  title: string;
  subtitle: string;
  formula: string;
  scoringExamples: ScoringExample[];
};

export const ScoringScene: React.FC<ScoringSceneProps> = ({
  title, subtitle, formula, scoringExamples,
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
        gap: 26,
        padding: "40px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      <FormulaDisplay formula={formula} delay={0.5 * fps} />

      {/* 得分示例对比 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 10 }}>
        {scoringExamples.map((ex, i) => {
          const cardProgress = spring({
            frame: Math.max(0, frame - 1.2 * fps - i * 0.15 * fps),
            fps,
            config: { damping: 16, stiffness: 100, mass: 0.6 },
          });

          const isTop = i === 0;

          return (
            <div
              key={i}
              style={{
                fontFamily: FONT_FAMILY_CN,
                width: 460,
                background: isTop ? COLORS.primary : COLORS.cardBg,
                border: `2px solid ${isTop ? COLORS.primary : COLORS.cardBorder}`,
                borderRadius: 16,
                padding: "26px 22px",
                textAlign: "center",
                opacity: cardProgress,
                transform: `translateY(${(1 - cardProgress) * 25}px)`,
              }}
            >
              <div style={{ fontSize: 40, color: isTop ? "#ffffffCC" : COLORS.textLight, marginBottom: 10 }}>
                {ex.label}
              </div>
              <div
                style={{
                  fontFamily: FONT_FAMILY_EN,
                  fontSize: 76,
                  fontWeight: 800,
                  color: isTop ? "#fff" : COLORS.highlight,
                  lineHeight: 1,
                  marginBottom: 14,
                }}
              >
                {ex.score}
              </div>
              {(ex.correct > 0 || ex.blank > 0) && (
                <div style={{ fontSize: 36, color: isTop ? "#ffffffBB" : COLORS.textLight }}>
                  对{ex.correct}题 · 空{ex.blank}题
                </div>
              )}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
