import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";

type BarChartProps = {
  data: Array<{ name: string; percentage: number }>;
  delay: number;
};

export const BarChart: React.FC<BarChartProps> = ({ data, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, width: "100%", padding: "0 50px" }}>
      {data.map((item, i) => {
        const barDelay = delay + i * 0.15 * fps;
        const adjustedFrame = Math.max(0, frame - barDelay);

        // spring 驱动条形图生长
        const barProgress = spring({
          frame: adjustedFrame,
          fps,
          config: { damping: 20, stiffness: 60, mass: 0.8 },
        });

        const labelProgress = spring({
          frame: adjustedFrame,
          fps,
          config: { damping: 18, stiffness: 120, mass: 0.5 },
        });

        const barColor = i % 2 === 0 ? COLORS.primary : COLORS.highlight;
        const barWidth = barProgress * item.percentage;

        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                fontFamily: FONT_FAMILY_CN,
                fontSize: 44,
                fontWeight: 600,
                color: COLORS.text,
                width: 160,
                textAlign: "right",
                opacity: labelProgress,
                transform: `translateX(${(1 - labelProgress) * -15}px)`,
              }}
            >
              {item.name}
            </div>
            <div
              style={{
                flex: 1,
                height: 60,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${barWidth}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${barColor}, ${barColor}CC)`,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: 16,
                }}
              >
                {barWidth > 10 && (
                  <span
                    style={{
                      fontFamily: FONT_FAMILY_EN,
                      fontSize: 38,
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {Math.round(barWidth)}%
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
