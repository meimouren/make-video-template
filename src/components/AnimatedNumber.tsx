import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_EN } from "../fonts";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
};

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  suffix = "",
  label,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);

  // 使用 spring 让数字弹入更自然
  const entryProgress = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.8 },
  });

  // 数字滚动用 interpolate 确保到达目标值
  const countProgress = interpolate(
    adjustedFrame,
    [0, 1.5 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  // easeOutExpo 缓动：开头快、结尾慢
  const eased = 1 - Math.pow(1 - countProgress, 4);

  const displayValue = Math.round(eased * value);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        opacity: entryProgress,
        transform: `scale(${0.6 + entryProgress * 0.4}) translateY(${(1 - entryProgress) * 20}px)`,
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY_EN,
          fontSize: 100,
          fontWeight: 800,
          color: COLORS.highlight,
          lineHeight: 1,
          textAlign: "center",
        }}
      >
        {displayValue.toLocaleString()}
        <span style={{ fontSize: 56 }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 42, color: COLORS.textLight, fontWeight: 500, textAlign: "center" }}>
        {label}
      </div>
    </div>
  );
};
