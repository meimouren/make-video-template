import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../../config";
import { FONT_FAMILY_CN } from "../../fonts";
import { AnimatedTitle } from "../../components/_legacy/AnimatedTitle";

type ComparisonItem = { aspect: string; left: string; right: string };

type ComparisonSceneProps = {
  title: string;
  subtitle: string;
  comparison: ComparisonItem[];
  leftLabel?: string;   // 左列标题，默认从 subtitle 解析
  rightLabel?: string;  // 右列标题，默认从 subtitle 解析
};

export const ComparisonScene: React.FC<ComparisonSceneProps> = ({
  title,
  subtitle,
  comparison,
  leftLabel,
  rightLabel,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 从 subtitle 解析列标题（格式 "A vs B"），或使用显式传入的 label
  const parts = subtitle.split(" vs ");
  const colLeft = leftLabel ?? parts[0] ?? "A";
  const colRight = rightLabel ?? parts[1] ?? "B";

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
        <div style={{ display: "flex", background: COLORS.primary, padding: "20px 0" }}>
          <div style={{ flex: 1, textAlign: "center", fontSize: 38, fontWeight: 700, color: "#000" }}>对比项</div>
          <div style={{ flex: 1, textAlign: "center", fontSize: 38, fontWeight: 700, color: "#000" }}>{colLeft}</div>
          <div style={{ flex: 1, textAlign: "center", fontSize: 38, fontWeight: 700, color: "#000" }}>{colRight}</div>
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
              <div style={{ flex: 1, textAlign: "center", fontSize: 36, fontWeight: 600, color: COLORS.textLight }}>{row.aspect}</div>
              <div style={{ flex: 1, textAlign: "center", fontSize: 36, color: COLORS.primary, fontWeight: 700 }}>{row.left}</div>
              <div style={{ flex: 1, textAlign: "center", fontSize: 36, color: COLORS.text, fontWeight: 600 }}>{row.right}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
