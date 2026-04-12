import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";

type KeyPoint = { label: string; value: string };

type KeyPointsSceneProps = {
  title: string;
  subtitle: string;
  keyPoints: KeyPoint[];
};

export const KeyPointsScene: React.FC<KeyPointsSceneProps> = ({
  title, subtitle, keyPoints,
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
        gap: 52,
        padding: "60px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      {/* 全宽卡片纵向排列 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 26,
          width: "100%",
          padding: "0 26px",
        }}
      >
        {keyPoints.map((kp, i) => {
          const cardProgress = spring({
            frame: Math.max(0, frame - 0.4 * fps - i * 0.12 * fps),
            fps,
            config: { damping: 16, stiffness: 100, mass: 0.6 },
          });

          const accentColor = i % 2 === 0 ? COLORS.primary : COLORS.highlight;

          return (
            <div
              key={i}
              style={{
                fontFamily: FONT_FAMILY_CN,
                background: COLORS.cardBg,
                border: `2px solid ${COLORS.cardBorder}`,
                borderLeft: `6px solid ${accentColor}`,
                borderRadius: 16,
                padding: "32px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                opacity: cardProgress,
                transform: `translateX(${(1 - cardProgress) * 30}px)`,
              }}
            >
              <span style={{ fontSize: 46, color: COLORS.textLight }}>{kp.label}</span>
              <span style={{ fontSize: 48, fontWeight: 700, color: accentColor }}>{kp.value}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
