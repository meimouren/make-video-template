import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { COLORS } from "../config";

type ProgressBarProps = {
  sceneIndex: number;
  totalScenes: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  sceneIndex,
  totalScenes,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const opacity = interpolate(frame, [0, 0.5 * fps], [0, 0.6], {
    extrapolateRight: "clamp",
  });

  const progress = ((sceneIndex + 1) / totalScenes) * 100;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 30,
        left: 40,
        right: 40,
        opacity,
      }}
    >
      <div
        style={{
          height: 3,
          background: COLORS.divider,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
            borderRadius: 2,
            transition: "none",
          }}
        />
      </div>
    </div>
  );
};
