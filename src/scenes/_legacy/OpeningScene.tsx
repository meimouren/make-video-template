import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";
import { COLORS, COMPETITION } from "../../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../../fonts";
import { AnimatedNumber } from "../../components/_legacy/AnimatedNumber";
import { AnimatedLineChart } from "../../components/_legacy/AnimatedLineChart";

type Stat = { label: string; value: number; suffix: string };

type OpeningSceneProps = {
  title: string;
  subtitle: string;
  stats: Stat[];
};

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
      {/* 竞赛名 — 从 COMPETITION 常量读取 */}
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
        {COMPETITION.name}
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

      {/* 折线图 — 数据从 COMPETITION 常量读取 */}
      <AnimatedLineChart
        data={COMPETITION.participationData}
        title={COMPETITION.participationTitle}
        unit={COMPETITION.participationUnit}
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
