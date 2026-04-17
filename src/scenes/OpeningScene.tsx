import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedNumber } from "../components/AnimatedNumber";
import { AnimatedLineChart } from "../components/AnimatedLineChart";

type Stat = { label: string; value: number; suffix: string };

type OpeningSceneProps = {
  title: string;
  subtitle: string;
  stats: Stat[];
};

// 参赛人数历年增长数据（从 config 切换主题时需同步更新 ChartScene.tsx）
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

export const OpeningScene: React.FC<OpeningSceneProps> = ({
  title,
  subtitle,
  stats,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80, mass: 0.6 },
  });

  const subtitleProgress = spring({
    frame: Math.max(0, frame - 0.2 * fps),
    fps,
    config: { damping: 18, stiffness: 100, mass: 0.6 },
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: "40px 20px",
      }}
    >
      {/* 标题区 */}
      <div
        style={{
          fontFamily: FONT_FAMILY_EN,
          fontSize: 130,
          fontWeight: 800,
          color: COLORS.primary,
          letterSpacing: 20,
          textAlign: "center",
          width: "100%",
          transform: `scale(${titleProgress})`,
          opacity: titleProgress,
        }}
      >
        HMMT
      </div>

      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 48,
          color: COLORS.primary,
          fontWeight: 600,
          textAlign: "center",
          width: "100%",
          opacity: subtitleProgress,
        }}
      >
        {title}
      </div>

      {/* 财经风折线图 — 参赛人数增长 */}
      <AnimatedLineChart
        data={PARTICIPATION_DATA}
        title="历年参赛人数增长趋势"
        unit="+"
        delay={0.8 * fps}
      />

      {/* 底部关键数字 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px 48px",
          marginTop: 8,
        }}
      >
        {stats.map((stat, i) => (
          <AnimatedNumber
            key={i}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={2.5 * fps + i * 0.15 * fps}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
