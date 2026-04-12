import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN } from "../fonts";

type Benefit = { icon: string; title: string; desc: string };
type BenefitGridProps = { benefits: Benefit[] };

export const BenefitGrid: React.FC<BenefitGridProps> = ({ benefits }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "center",
        gap: 36,
        padding: "0 50px",
      }}
    >
      {benefits.map((benefit, i) => {
        const delay = 0.4 * fps + i * 0.15 * fps;
        const adjustedFrame = Math.max(0, frame - delay);

        const cardProgress = spring({
          frame: adjustedFrame,
          fps,
          config: { damping: 18, stiffness: 100, mass: 0.6 },
        });

        const borderColor = i % 2 === 0 ? COLORS.primary : COLORS.highlight;

        return (
          <div
            key={i}
            style={{
              fontFamily: FONT_FAMILY_CN,
              width: 460,
              background: COLORS.cardBg,
              border: `2px solid ${COLORS.cardBorder}`,
              borderTop: `5px solid ${borderColor}`,
              borderRadius: 16,
              padding: "36px 32px",
              opacity: cardProgress,
              transform: `translateY(${(1 - cardProgress) * 30}px)`,
            }}
          >
            <div style={{ fontSize: 64, marginBottom: 16 }}>{benefit.icon}</div>
            <div
              style={{
                fontSize: 50,
                fontWeight: 700,
                color: borderColor,
                marginBottom: 10,
              }}
            >
              {benefit.title}
            </div>
            <div
              style={{ fontSize: 40, color: COLORS.textLight, lineHeight: 1.5 }}
            >
              {benefit.desc}
            </div>
          </div>
        );
      })}
    </div>
  );
};
