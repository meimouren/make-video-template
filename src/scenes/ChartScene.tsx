import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedLineChart } from "../components/AnimatedLineChart";

const PARTICIPATION_DATA = [
  { year: "2015", value: 18000 },
  { year: "2017", value: 20000 },
  { year: "2019", value: 22000 },
  { year: "2021", value: 19000 },
  { year: "2023", value: 24000 },
  { year: "2025", value: 27092 },
];

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
          fontSize: 110,
          fontWeight: 800,
          color: COLORS.primary,
          letterSpacing: 8,
          textAlign: "center",
        }}
      >
        Euclid
      </div>

      <AnimatedLineChart
        data={PARTICIPATION_DATA}
        title="历年参赛人数增长趋势"
        unit="+"
        delay={0.3 * fps}
      />
    </AbsoluteFill>
  );
};
