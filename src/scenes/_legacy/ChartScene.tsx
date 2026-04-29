import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { COLORS, COMPETITION } from "../../config";
import { FONT_FAMILY_EN } from "../../fonts";
import { AnimatedLineChart } from "../../components/_legacy/AnimatedLineChart";

export const ChartScene: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY_EN,
          fontSize: 130,
          fontWeight: 800,
          color: COLORS.primary,
          letterSpacing: 6,
          textAlign: "center",
        }}
      >
        {COMPETITION.name}
      </div>

      <AnimatedLineChart
        data={COMPETITION.participationData}
        title={COMPETITION.participationTitle}
        unit={COMPETITION.participationUnit}
        delay={0.3 * fps}
      />
    </AbsoluteFill>
  );
};
