import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedLineChart } from "../components/AnimatedLineChart";

const PARTICIPATION_DATA = [
  { year: "2018", value: 600 },
  { year: "2019", value: 700 },
  { year: "2020", value: 500 },
  { year: "2021", value: 650 },
  { year: "2022", value: 800 },
  { year: "2023", value: 900 },
  { year: "2024", value: 1000 },
  { year: "2025", value: 1100 },
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
          fontSize: 130,
          fontWeight: 800,
          color: COLORS.primary,
          letterSpacing: 6,
          textAlign: "center",
        }}
      >
        HMMT
      </div>

      <AnimatedLineChart
        data={PARTICIPATION_DATA}
        title="历年参赛队伍数趋势"
        unit="+"
        delay={0.3 * fps}
      />
    </AbsoluteFill>
  );
};
