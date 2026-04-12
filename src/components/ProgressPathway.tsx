import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";

type PathwayStep = { stage: string; participants: string; desc: string };
type ProgressPathwayProps = { steps: PathwayStep[] };

export const ProgressPathway: React.FC<ProgressPathwayProps> = ({ steps }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
        padding: "0 50px",
        width: "100%",
      }}
    >
      {steps.map((step, i) => {
        const delay = 0.4 * fps + i * 0.25 * fps;
        const adjustedFrame = Math.max(0, frame - delay);

        const nodeProgress = spring({
          frame: adjustedFrame,
          fps,
          config: { damping: 16, stiffness: 100, mass: 0.6 },
        });

        const lineDelay = delay + 0.1 * fps;
        const lineFrame = Math.max(0, frame - lineDelay);
        const lineProgress = spring({
          frame: lineFrame,
          fps,
          config: { damping: 20, stiffness: 80, mass: 0.7 },
        });

        const circleSize = 120;
        const isLast = i === steps.length - 1;
        const nodeColor = isLast ? COLORS.highlight : COLORS.primary;

        return (
          <React.Fragment key={i}>
            {/* 每个节点：圆 + 文字 横排 */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 36,
                opacity: nodeProgress,
                transform: `translateX(${(1 - nodeProgress) * 40}px)`,
                width: 900,
                padding: "0 50px",
              }}
            >
              <div
                style={{
                  width: circleSize,
                  height: circleSize,
                  borderRadius: "50%",
                  background: nodeColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 20px ${nodeColor}40`,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_FAMILY_EN,
                    fontSize: 30,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {step.participants}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div
                  style={{
                    fontFamily: FONT_FAMILY_EN,
                    fontSize: 50,
                    fontWeight: 700,
                    color: nodeColor,
                  }}
                >
                  {step.stage}
                </div>
                <div
                  style={{
                    fontFamily: FONT_FAMILY_CN,
                    fontSize: 40,
                    color: COLORS.textLight,
                  }}
                >
                  {step.desc}
                </div>
              </div>
            </div>

            {/* 向下连接线 + 箭头 */}
            {!isLast && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 900,
                  padding: "0 50px",
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: lineProgress * 50,
                    background: `linear-gradient(180deg, ${COLORS.primary}, ${COLORS.highlight})`,
                    marginLeft: -circleSize * 3.5,
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: `14px solid ${COLORS.highlight}`,
                    opacity: lineProgress,
                    marginLeft: -circleSize * 3.5,
                  }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
