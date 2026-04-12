import React from "react";
import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN } from "../fonts";

type DataCardProps = {
  title: string;
  items: Array<{ label: string; value: string }>;
  delay: number;
  accentColor?: string;
};

export const DataCard: React.FC<DataCardProps> = ({
  title,
  items,
  delay,
  accentColor = COLORS.primary,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);

  const slideIn = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 20, stiffness: 100, mass: 0.6 },
  });

  return (
    <div
      style={{
        fontFamily: FONT_FAMILY_CN,
        background: COLORS.cardBg,
        border: `2px solid ${COLORS.cardBorder}`,
        borderRadius: 16,
        padding: "36px 46px",
        borderLeft: `6px solid ${accentColor}`,
        opacity: slideIn,
        transform: `translateX(${(1 - slideIn) * 40}px)`,
        minWidth: 460,
      }}
    >
      <div
        style={{
          fontSize: 52,
          fontWeight: 700,
          color: accentColor,
          marginBottom: 20,
        }}
      >
        {title}
      </div>
      {items.map((item, i) => {
        const itemDelay = delay + i * 0.08 * fps;
        const itemFrame = Math.max(0, frame - itemDelay);
        const itemProgress = spring({
          frame: itemFrame,
          fps,
          config: { damping: 20, stiffness: 120, mass: 0.5 },
        });

        return (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: i < items.length - 1 ? `1px solid ${COLORS.divider}` : "none",
              opacity: itemProgress,
              transform: `translateX(${(1 - itemProgress) * 15}px)`,
            }}
          >
            <span style={{ fontSize: 42, color: COLORS.textLight }}>{item.label}</span>
            <span style={{ fontSize: 42, fontWeight: 700, color: COLORS.text }}>{item.value}</span>
          </div>
        );
      })}
    </div>
  );
};
