import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";

type Level = {
  name: string;
  target: string;
  questions: number;
  time: string;
  scoring: string;
};

type WhatIsAMCSceneProps = {
  title: string;
  subtitle: string;
  levels: Level[];
};

export const WhatIsAMCScene: React.FC<WhatIsAMCSceneProps> = ({
  title,
  subtitle,
  levels,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        padding: "40px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 10, alignItems: "center" }}>
        {levels.map((level, i) => {
          const cardDelay = 0.6 * fps + i * 0.2 * fps;
          const adjustedFrame = Math.max(0, frame - cardDelay);

          const cardProgress = spring({
            frame: adjustedFrame,
            fps,
            config: { damping: 16, stiffness: 90, mass: 0.6 },
          });

          const borderColor =
            i === 0 ? "#4CAF50" : i === 1 ? COLORS.primary : COLORS.highlight;

          return (
            <div
              key={i}
              style={{
                fontFamily: FONT_FAMILY_CN,
                width: 960,
                background: COLORS.cardBg,
                border: `2px solid ${COLORS.cardBorder}`,
                borderTop: `5px solid ${borderColor}`,
                borderRadius: 16,
                padding: "26px 40px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 32,
                opacity: cardProgress,
                transform: `translateY(${(1 - cardProgress) * 35}px)`,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div
                  style={{
                    fontFamily: FONT_FAMILY_EN,
                    fontSize: 54,
                    fontWeight: 800,
                    color: borderColor,
                    marginBottom: 6,
                  }}
                >
                  {level.name}
                </div>
                <div
                  style={{
                    fontSize: 40,
                    color: COLORS.text,
                    fontWeight: 600,
                  }}
                >
                  {level.target}
                </div>
              </div>
              <div style={{ flex: 1 }}>
              {[
                { label: "题目", value: `${level.questions} 道选择题` },
                { label: "时间", value: level.time },
                { label: "评分", value: level.scoring },
              ].map((item, j) => {
                const itemProgress = spring({
                  frame: Math.max(0, frame - cardDelay - j * 0.08 * fps),
                  fps,
                  config: { damping: 20, stiffness: 120, mass: 0.5 },
                });

                return (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: j < 2 ? `1px solid ${COLORS.divider}` : "none",
                      opacity: itemProgress,
                    }}
                  >
                    <span style={{ fontSize: 40, color: COLORS.textLight }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: 40, fontWeight: 600, color: COLORS.text }}>
                      {item.value}
                    </span>
                  </div>
                );
              })}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
