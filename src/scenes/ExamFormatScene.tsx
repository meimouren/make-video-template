import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { BarChart } from "../components/BarChart";
import { FormulaDisplay } from "../components/FormulaDisplay";

type Domain = { name: string; percentage: number };

type ExamFormatSceneProps = {
  title: string;
  subtitle: string;
  domains: Domain[];
  formula: string;
};

export const ExamFormatScene: React.FC<ExamFormatSceneProps> = ({
  title, subtitle, domains, formula,
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
        gap: 24,
        padding: "40px 80px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      <div style={{ display: "flex", alignItems: "center", gap: 80, marginTop: 8 }}>
        <div>
          <div
            style={{
              fontFamily: FONT_FAMILY_CN,
              fontSize: 22,
              color: COLORS.textLight,
              marginBottom: 16,
              letterSpacing: 4,
              textAlign: "center",
            }}
          >
            知识领域分布
          </div>
          <BarChart data={domains} delay={0.6 * fps} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <FormulaDisplay formula={formula} delay={1.2 * fps} />

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
            {[
              { label: "AMC 10/12 满分", value: "150 分" },
              { label: "禁止使用", value: "计算器" },
              { label: "题型", value: "25 道选择题" },
            ].map((item, i) => {
              const itemProgress = spring({
                frame: Math.max(0, frame - 1.5 * fps - i * 0.15 * fps),
                fps,
                config: { damping: 18, stiffness: 110, mass: 0.5 },
              });

              return (
                <div
                  key={i}
                  style={{
                    fontFamily: FONT_FAMILY_CN,
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    opacity: itemProgress,
                    transform: `translateX(${(1 - itemProgress) * 20}px)`,
                  }}
                >
                  <span style={{ fontSize: 20, color: COLORS.textLight, width: 140, textAlign: "right" }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: 24, fontWeight: 700, color: COLORS.highlight }}>
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
