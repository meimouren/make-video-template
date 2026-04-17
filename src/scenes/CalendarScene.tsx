import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN } from "../fonts";
import { AnimatedTitle } from "../components/AnimatedTitle";

type CalendarEvent = { date: string; event: string };

type CalendarSceneProps = {
  title: string;
  subtitle: string;
  events: CalendarEvent[];
};

export const CalendarScene: React.FC<CalendarSceneProps> = ({
  title, subtitle, events,
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
        gap: 26,
        padding: "40px 50px",
      }}
    >
      <AnimatedTitle title={title} subtitle={subtitle} />

      {/* 时间轴 */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 10 }}>
        {events.map((ev, i) => {
          const itemProgress = spring({
            frame: Math.max(0, frame - 0.5 * fps - i * 0.15 * fps),
            fps,
            config: { damping: 16, stiffness: 100, mass: 0.6 },
          });

          // 最后两个事件高亮（通常是晋级赛/国际赛）
          const isHighlight = i >= events.length - 2;

          return (
            <div
              key={i}
              style={{
                fontFamily: FONT_FAMILY_CN,
                display: "flex",
                alignItems: "center",
                gap: 32,
                opacity: itemProgress,
                transform: `translateX(${(1 - itemProgress) * 40}px)`,
              }}
            >
              {/* 时间轴圆点和线 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: isHighlight ? COLORS.highlight : COLORS.primary,
                    border: `3px solid ${isHighlight ? COLORS.highlight : COLORS.primary}40`,
                  }}
                />
                {i < events.length - 1 && (
                  <div style={{ width: 3, height: 48, background: COLORS.divider }} />
                )}
              </div>

              {/* 内容 */}
              <div
                style={{
                  background: COLORS.cardBg,
                  border: `2px solid ${isHighlight ? COLORS.highlight + "40" : COLORS.cardBorder}`,
                  borderRadius: 14,
                  padding: "20px 40px",
                  display: "flex",
                  gap: 52,
                  alignItems: "center",
                  minWidth: 840,
                  marginBottom: i < events.length - 1 ? 0 : 0,
                }}
              >
                <span style={{ fontSize: 42, color: COLORS.textLight, fontWeight: 500, minWidth: 260 }}>
                  {ev.date}
                </span>
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 700,
                    color: isHighlight ? COLORS.highlight : COLORS.primary,
                  }}
                >
                  {ev.event}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 底部注释 */}
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 24,
          color: "#555555",
          textAlign: "center",
          marginTop: 8,
        }}
      >
        * 以上时间参考往年安排，具体以官方公布为准
      </div>
    </AbsoluteFill>
  );
};
