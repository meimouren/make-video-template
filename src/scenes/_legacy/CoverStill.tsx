import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS, COMPETITION } from "../../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../../fonts";

/**
 * 封面静态图 — 从 COMPETITION 常量自动读取名称，自适应字号
 */
export const CoverStill: React.FC = () => {
  const enLen = COMPETITION.name.length;
  const enFontSize = enLen <= 3 ? 280 : enLen <= 4 ? 240 : enLen <= 5 ? 200 : 170;
  const enLetterSpacing = enLen <= 3 ? 20 : enLen <= 4 ? 16 : 12;

  const cnLen = COMPETITION.nameCn.length;
  const cnFontSize = cnLen <= 7 ? 80 : cnLen <= 9 ? 72 : cnLen <= 11 ? 64 : 56;
  const cnLetterSpacing = cnLen <= 9 ? 8 : 6;

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
          fontSize: enFontSize,
          fontWeight: 900,
          color: COLORS.primary,
          letterSpacing: enLetterSpacing,
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        {COMPETITION.name}
      </div>
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: cnFontSize,
          fontWeight: 800,
          color: COLORS.primary,
          letterSpacing: cnLetterSpacing,
          textAlign: "center",
        }}
      >
        {COMPETITION.nameCn}
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
