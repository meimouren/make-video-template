import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";

type CoverSceneProps = {
  seriesName: string;
  competitionName: string;
  competitionNameEn: string;
  episodeTag: string;
};

/**
 * Top guide 风格封面 — 纯黑+网格+黄白大字
 */
export const CoverScene: React.FC<CoverSceneProps> = ({
  seriesName,
  competitionName,
  competitionNameEn,
  episodeTag,
}) => {
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

      {/* 竞赛名 — 超大黄色 */}
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
        {competitionName}
      </div>

      {/* 中文名 — 黄色 */}
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
        欧几里得数学竞赛
      </div>

      {/* 注释 */}
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 26,
          color: "#666666",
          textAlign: "center",
          marginTop: 20,
          letterSpacing: 2,
        }}
      >
        注：依托权威数据精准建模，客观呈现真实结果
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
