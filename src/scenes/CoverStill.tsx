import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";

export const CoverStill: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        background: "#000000",
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 48,
          fontWeight: 700,
          color: "#FFFFFF",
          letterSpacing: 6,
          textAlign: "center",
        }}
      >
        每天介绍一个国际竞赛
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY_EN,
          fontSize: 240,
          fontWeight: 900,
          color: COLORS.primary,
          letterSpacing: 16,
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        AMC
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 72,
          fontWeight: 800,
          color: COLORS.primary,
          letterSpacing: 8,
          textAlign: "center",
        }}
      >
        美国数学竞赛
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          fontFamily: FONT_FAMILY_CN,
          fontSize: 28,
          color: "#444444",
          letterSpacing: 8,
        }}
      >
        翰林有方 · 国际竞赛系列
      </div>
    </AbsoluteFill>
  );
};
