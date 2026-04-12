import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN } from "../fonts";

type AnimatedTitleProps = {
  title: string;
  subtitle: string;
};

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  subtitle,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 120, mass: 0.6 },
  });

  const subtitleProgress = spring({
    frame: Math.max(0, frame - 0.2 * fps),
    fps,
    config: { damping: 20, stiffness: 100, mass: 0.6 },
  });

  const lineProgress = spring({
    frame: Math.max(0, frame - 0.15 * fps),
    fps,
    config: { damping: 25, stiffness: 80, mass: 0.8 },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 110,
          fontWeight: 700,
          color: COLORS.primary,
          letterSpacing: 6,
          textAlign: "center",
          width: "100%",
          transform: `translateY(${(1 - titleProgress) * 30}px)`,
          opacity: titleProgress,
        }}
      >
        {title}
      </div>

      <div
        style={{
          width: lineProgress * 260,
          height: 4,
          background: `linear-gradient(90deg, transparent, ${COLORS.highlight}, transparent)`,
          borderRadius: 2,
        }}
      />

      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 48,
          fontWeight: 400,
          color: COLORS.textLight,
          letterSpacing: 6,
          textAlign: "center",
          width: "100%",
          opacity: subtitleProgress,
          transform: `translateY(${(1 - subtitleProgress) * 15}px)`,
        }}
      >
        {subtitle}
      </div>
    </div>
  );
};
