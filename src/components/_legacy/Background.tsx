import React from "react";
import { AbsoluteFill } from "remotion";

/**
 * Top guide 风格背景 — 纯黑 + 暗灰网格
 */
export const Background: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#000000", overflow: "hidden" }}>
      {/* 暗灰网格纹理 */}
      <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
        {Array.from({ length: 25 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={`${(i + 1) * 4}%`}
            x2="100%"
            y2={`${(i + 1) * 4}%`}
            stroke="#222222"
            strokeWidth={1}
          />
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={`${(i + 1) * 7.14}%`}
            y1="0"
            x2={`${(i + 1) * 7.14}%`}
            y2="100%"
            stroke="#222222"
            strokeWidth={1}
          />
        ))}
      </svg>
    </AbsoluteFill>
  );
};
