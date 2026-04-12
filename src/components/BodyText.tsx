import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN } from "../fonts";

type BodyTextProps = {
  text: string;
};

export const BodyText: React.FC<BodyTextProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: Math.max(0, frame - 0.3 * fps),
    fps,
    config: { damping: 22, stiffness: 100, mass: 0.6 },
  });

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 20}px)`,
        fontFamily: FONT_FAMILY_CN,
        fontSize: 50,
        lineHeight: 1.8,
        color: COLORS.text,
        maxWidth: 1400,
        textAlign: "center",
        padding: "0 80px",
        fontWeight: 400,
      }}
    >
      {text}
    </div>
  );
};
