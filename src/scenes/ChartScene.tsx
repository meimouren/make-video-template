import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedLineChart } from "../components/AnimatedLineChart";

const PARTICIPATION_DATA = [
  { year: "2019", value: 3500 },
  { year: "2020", value: 3200 },
  { year: "2021", value: 4000 },
  { year: "2022", value: 4800 },
  { year: "2023", value: 5500 },
  { year: "2024", value: 6000 },
  { year: "2025", value: 6500 },
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
          fontSize: 150,
          fontWeight: 800,
          color: COLORS.primary,
          letterSpacing: 8,
          textAlign: "center",
        }}
      >
        SPC
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
