import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";

type TitleCardSceneProps = {
  title: string;
  subtitle: string;
  highlights: string[];
};

export const TitleCardScene: React.FC<TitleCardSceneProps> = ({
  title, subtitle, highlights,
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
        gap: 48,
        padding: "60px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
        {highlights.map((h, i) => {
          const chipProgress = spring({
            frame: Math.max(0, frame - 0.4 * fps - i * 0.15 * fps),
            fps,
            config: { damping: 14, stiffness: 100, mass: 0.5 },
          });

          return (
            <div
              key={i}
              style={{
                fontFamily: FONT_FAMILY_CN,
                fontSize: 40,
                fontWeight: 600,
                color: i % 2 === 0 ? COLORS.primary : COLORS.highlight,
                background: COLORS.cardBg,
                border: `2px solid ${COLORS.cardBorder}`,
                borderRadius: 50,
                padding: "16px 40px",
                opacity: chipProgress,
                transform: `scale(${0.7 + chipProgress * 0.3}) translateY(${(1 - chipProgress) * 20}px)`,
              }}
            >
              {h}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
