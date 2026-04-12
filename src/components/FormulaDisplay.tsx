import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_EN, FONT_FAMILY_CN } from "../fonts";

type FormulaDisplayProps = {
  formula: string;
  delay: number;
};

export const FormulaDisplay: React.FC<FormulaDisplayProps> = ({
  formula,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);

  const scaleIn = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 18, stiffness: 100, mass: 0.6 },
  });

  const visibleChars = Math.floor(
    interpolate(adjustedFrame, [0.1 * fps, 0.8 * fps], [0, formula.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        opacity: scaleIn,
        transform: `scale(${0.85 + scaleIn * 0.15})`,
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 44,
          color: COLORS.textLight,
          letterSpacing: 6,
        }}
      >
        评分公式
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY_EN,
          fontSize: 60,
          fontWeight: 700,
          color: COLORS.primary,
          background: COLORS.cardBg,
          border: `2px solid ${COLORS.primary}30`,
          borderRadius: 14,
          padding: "26px 60px",
          letterSpacing: 3,
        }}
      >
        {formula.slice(0, visibleChars)}
        <span
          style={{
            opacity: frame % fps < fps / 2 ? 1 : 0,
            color: COLORS.highlight,
          }}
        >
          |
        </span>
      </div>
    </div>
  );
};
