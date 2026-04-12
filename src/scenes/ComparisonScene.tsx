import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";

type ComparisonItem = { item: string; amc10: string; amc12: string };

type ComparisonSceneProps = {
  title: string;
  subtitle: string;
  comparison: ComparisonItem[];
};

export const ComparisonScene: React.FC<ComparisonSceneProps> = ({
  title, subtitle, comparison,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const tableProgress = spring({
    frame: Math.max(0, frame - 0.5 * fps),
    fps,
    config: { damping: 18, stiffness: 80, mass: 0.7 },
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        padding: "40px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      {/* 对比表格 */}
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          background: COLORS.cardBg,
          borderRadius: 16,
          overflow: "hidden",
          border: `2px solid ${COLORS.cardBorder}`,
          opacity: tableProgress,
          transform: `scale(${0.9 + tableProgress * 0.1})`,
          width: 980,
        }}
      >
        {/* 表头 */}
        <div
          style={{
            display: "flex",
            background: COLORS.primary,
            padding: "20px 0",
          }}
        >
          <div style={{ flex: 1, textAlign: "center", fontSize: 44, fontWeight: 700, color: "#fff" }}>对比项</div>
          <div style={{ flex: 1, textAlign: "center", fontSize: 44, fontWeight: 700, color: "#fff" }}>AMC 10</div>
          <div style={{ flex: 1, textAlign: "center", fontSize: 44, fontWeight: 700, color: "#fff" }}>AMC 12</div>
        </div>

        {/* 数据行 */}
        {comparison.map((row, i) => {
          const rowProgress = spring({
            frame: Math.max(0, frame - 0.7 * fps - i * 0.12 * fps),
            fps,
            config: { damping: 18, stiffness: 110, mass: 0.5 },
          });

          return (
            <div
              key={i}
              style={{
                display: "flex",
                padding: "18px 0",
                borderBottom: i < comparison.length - 1 ? `1px solid ${COLORS.divider}` : "none",
                background: i % 2 === 1 ? "rgba(255,255,255,0.04)" : "transparent",
                opacity: rowProgress,
              }}
            >
              <div style={{ flex: 1, textAlign: "center", fontSize: 40, fontWeight: 600, color: COLORS.text }}>{row.item}</div>
              <div style={{ flex: 1, textAlign: "center", fontSize: 40, color: COLORS.primary, fontWeight: 600 }}>{row.amc10}</div>
              <div style={{ flex: 1, textAlign: "center", fontSize: 40, color: COLORS.highlight, fontWeight: 600 }}>{row.amc12}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
