import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";

type Domain = { name: string; percentage: number; topics: string };

type TopicsSceneProps = {
  title: string;
  subtitle: string;
  domains: Domain[];
};

export const TopicsScene: React.FC<TopicsSceneProps> = ({
  title, subtitle, domains,
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
        gap: 52,
        padding: "60px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      {/* 四大领域卡片 — 每个领域一行，带进度条 */}
      <div style={{ display: "flex", flexDirection: "column", gap: 36, width: "100%", padding: "0 26px" }}>
        {domains.map((d, i) => {
          const cardDelay = 0.4 * fps + i * 0.2 * fps;
          const adjustedFrame = Math.max(0, frame - cardDelay);

          const cardProgress = spring({
            frame: adjustedFrame,
            fps,
            config: { damping: 16, stiffness: 90, mass: 0.6 },
          });

          const barProgress = spring({
            frame: Math.max(0, adjustedFrame - 0.15 * fps),
            fps,
            config: { damping: 20, stiffness: 60, mass: 0.8 },
          });

          const color = i % 2 === 0 ? COLORS.primary : COLORS.highlight;

          return (
            <div
              key={i}
              style={{
                fontFamily: FONT_FAMILY_CN,
                background: COLORS.cardBg,
                border: `2px solid ${COLORS.cardBorder}`,
                borderLeft: `6px solid ${color}`,
                borderRadius: 16,
                padding: "36px 40px",
                opacity: cardProgress,
                transform: `translateY(${(1 - cardProgress) * 25}px)`,
              }}
            >
              {/* 领域名称 + 百分比 */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: 52, fontWeight: 700, color }}>{d.name}</span>
                <span style={{ fontFamily: FONT_FAMILY_EN, fontSize: 52, fontWeight: 800, color }}>{d.percentage}%</span>
              </div>

              {/* 进度条 */}
              <div style={{ height: 18, background: "rgba(255,255,255,0.1)", borderRadius: 9, overflow: "hidden", marginBottom: 20 }}>
                <div
                  style={{
                    width: `${barProgress * d.percentage}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${color}, ${color}BB)`,
                    borderRadius: 9,
                  }}
                />
              </div>

              {/* 考点详情 */}
              <div style={{ fontSize: 42, color: COLORS.textLight, lineHeight: 1.5 }}>
                {d.topics}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
