import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { FONT_FAMILY_CN } from "../fonts";
import subtitlesData from "../subtitles.json";

type SubtitleLine = {
  id: number;
  startFrame: number;
  endFrame: number;
  text: string;
};

const subtitles: SubtitleLine[] = subtitlesData;

/**
 * 字幕层 — 从 subtitles.json 读取
 * 编辑 src/subtitles.json 可手动调整每句字幕内容和时间
 */
export const SubtitleOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 找到当前帧对应的字幕
  const current = subtitles.find(
    (s) => frame >= s.startFrame && frame < s.endFrame,
  );

  if (!current) return null;

  const localFrame = frame - current.startFrame;

  const progress = spring({
    frame: localFrame,
    fps,
    config: { damping: 18, stiffness: 150, mass: 0.4 },
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 40,
          right: 40,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: FONT_FAMILY_CN,
            fontSize: 44,
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
            maxWidth: 960,
            lineHeight: 1.4,
            opacity: progress,
            transform: `translateY(${(1 - progress) * 8}px)`,
          }}
        >
          {current.text}
        </div>
      </div>
    </AbsoluteFill>
  );
};
