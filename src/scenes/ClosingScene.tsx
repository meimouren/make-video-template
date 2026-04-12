import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";

type ClosingSceneProps = { title: string; text: string };

export const ClosingScene: React.FC<ClosingSceneProps> = ({ title, text }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 70, mass: 0.6 },
  });

  const textProgress = spring({
    frame: Math.max(0, frame - 0.4 * fps),
    fps,
    config: { damping: 18, stiffness: 90, mass: 0.6 },
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 1.5 * fps, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        opacity: fadeOut,
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 100,
          fontWeight: 900,
          color: COLORS.primary,
          letterSpacing: 8,
          textAlign: "center",
          width: "100%",
          transform: `scale(${titleProgress})`,
          opacity: titleProgress,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 44,
          lineHeight: 1.8,
          color: COLORS.text,
          maxWidth: 900,
          textAlign: "center",
          padding: "0 50px",
          opacity: textProgress,
          transform: `translateY(${(1 - textProgress) * 15}px)`,
        }}
      >
        {text}
      </div>

      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          marginTop: 40,
          fontSize: 36,
          color: COLORS.primary,
          letterSpacing: 12,
          textAlign: "center",
          width: "100%",
          opacity: textProgress,
        }}
      >
        翰林有方 HANLIN
      </div>
    </AbsoluteFill>
  );
};
