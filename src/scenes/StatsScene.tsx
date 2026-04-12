import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedNumber } from "../components/AnimatedNumber";

type Stat = { label: string; value: number; suffix: string };

type StatsSceneProps = {
  stats: Stat[];
};

export const StatsScene: React.FC<StatsSceneProps> = ({ stats }) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 50px",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px 60px" }}>
        {stats.map((stat, i) => (
          <AnimatedNumber
            key={i}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={i * 5}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
