import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../config";

type SceneNumberProps = {
  number: number;
  total: number;
};

export const SceneNumber: React.FC<SceneNumberProps> = ({ number, total }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  // 不在开场和结语显示编号
  if (number <= 1 || number >= total) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 60,
        right: 80,
        opacity: progress,
        transform: `scale(${progress})`,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: COLORS.primary,
        }}
      >
        {String(number - 1).padStart(2, "0")}
      </span>
      <span
        style={{
          fontSize: 36,
          color: COLORS.textLight,
        }}
      >
        / {String(total - 2).padStart(2, "0")}
      </span>
    </div>
  );
};
