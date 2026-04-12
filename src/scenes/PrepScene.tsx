import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";

type Step = { num: string; title: string; desc: string };

type PrepSceneProps = {
  title: string;
  subtitle: string;
  steps: Step[];
};

export const PrepScene: React.FC<PrepSceneProps> = ({
  title, subtitle, steps,
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
        gap: 26,
        padding: "40px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginTop: 10 }}>
        {steps.map((step, i) => {
          const cardProgress = spring({
            frame: Math.max(0, frame - 0.5 * fps - i * 0.2 * fps),
            fps,
            config: { damping: 16, stiffness: 90, mass: 0.6 },
          });

          return (
            <div
              key={i}
              style={{
                fontFamily: FONT_FAMILY_CN,
                width: 460,
                background: COLORS.cardBg,
                border: `2px solid ${COLORS.cardBorder}`,
                borderRadius: 16,
                padding: "32px 26px",
                textAlign: "center",
                opacity: cardProgress,
                transform: `translateY(${(1 - cardProgress) * 30}px)`,
              }}
            >
              <div
                style={{
                  fontFamily: FONT_FAMILY_EN,
                  fontSize: 72,
                  fontWeight: 800,
                  color: COLORS.primary,
                  opacity: 0.3,
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontSize: 50,
                  fontWeight: 700,
                  color: COLORS.highlight,
                  marginBottom: 10,
                }}
              >
                {step.title}
              </div>
              <div style={{ fontSize: 40, color: COLORS.textLight, lineHeight: 1.5 }}>
                {step.desc}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
