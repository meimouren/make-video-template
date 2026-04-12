import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedLineChart } from "../components/AnimatedLineChart";

const PARTICIPATION_DATA = [
  { year: "2010", value: 180000 },
  { year: "2012", value: 200000 },
  { year: "2014", value: 220000 },
  { year: "2016", value: 240000 },
  { year: "2018", value: 270000 },
  { year: "2020", value: 250000 },
  { year: "2022", value: 290000 },
  { year: "2024", value: 310000 },
  { year: "2026", value: 350000 },
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
          fontSize: 120,
          fontWeight: 800,
          color: COLORS.primary,
          letterSpacing: 12,
          textAlign: "center",
        }}
      >
        AMC
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
