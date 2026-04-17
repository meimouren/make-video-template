import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_CN, FONT_FAMILY_EN } from "../fonts";

/**
 * Top guide 风格品牌标识层
 * 左上角：黄色大引号
 * 顶部居中：品牌名
 * 右上角：灰色注释
 */
export const BrandOverlay: React.FC = () => {
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* 左上角黄色双引号 */}
      <div
        style={{
          position: "absolute",
          top: 58,
          left: 36,
          fontFamily: FONT_FAMILY_EN,
          fontSize: 80,
          fontWeight: 900,
          color: COLORS.primary,
          lineHeight: 0.8,
        }}
      >
        {"\u201C"}
      </div>

      {/* 顶部居中品牌名 */}
      <div
        style={{
          position: "absolute",
          top: 66,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: FONT_FAMILY_CN,
          fontSize: 32,
          fontWeight: 700,
          color: COLORS.primary,
          letterSpacing: 6,
        }}
      >
        翰林有方
      </div>

      {/* 右上角注释 */}
      <div
        style={{
          position: "absolute",
          top: 70,
          right: 32,
          fontFamily: FONT_FAMILY_CN,
          fontSize: 20,
          color: "#555555",
        }}
      >
        注：视频部分素材仅供参考
      </div>
    </AbsoluteFill>
  );
};
