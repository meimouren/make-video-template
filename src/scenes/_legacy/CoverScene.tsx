import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS, COMPETITION } from "../../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../../fonts";

type CoverSceneProps = {
  seriesName: string;
  competitionName: string;
  competitionNameEn: string;
  episodeTag: string;
};

/**
 * Top guide 风格封面 — 纯黑+网格+黄白大字
 * 竞赛中文名从 COMPETITION.nameCn 读取，自动适配字号
 */
export const CoverScene: React.FC<CoverSceneProps> = ({
  competitionName,
  episodeTag,
}) => {
  // 英文缩写自适应字号
  const enLen = competitionName.length;
  const enFontSize = enLen <= 3 ? 240 : enLen <= 4 ? 200 : enLen <= 5 ? 170 : 150;
  const enLetterSpacing = enLen <= 3 ? 16 : enLen <= 4 ? 12 : 8;

  // 中文名自适应字号
  const cnLen = COMPETITION.nameCn.length;
  const cnFontSize = cnLen <= 7 ? 72 : cnLen <= 9 ? 64 : cnLen <= 11 ? 56 : 50;
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
      {/* 系列名 — 白色 */}
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

      {/* 竞赛英文缩写 — 超大黄色 */}
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
        {competitionName}
      </div>

      {/* 中文名 — 黄色，从 COMPETITION 读取 */}
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

      {/* 底部品牌 */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          fontFamily: FONT_FAMILY_CN,
          fontSize: 28,
          color: "#444444",
          letterSpacing: 8,
          textAlign: "center",
        }}
      >
        {episodeTag}
      </div>
    </AbsoluteFill>
  );
};
