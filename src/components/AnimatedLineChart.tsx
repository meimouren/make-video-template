import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { COLORS } from "../config";
import { FONT_FAMILY_EN, FONT_FAMILY_CN } from "../fonts";

type DataPoint = { year: string; value: number };
type AnimatedLineChartProps = {
  data: DataPoint[];
  title: string;
  unit: string;
  delay: number;
};

export const AnimatedLineChart: React.FC<AnimatedLineChartProps> = ({
  data,
  title,
  unit,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const adjustedFrame = Math.max(0, frame - delay);

  const chartW = 880;
  const chartH = 400;
  const padL = 80;
  const padR = 120;
  const padT = 60;
  const padB = 80;
  const innerW = chartW - padL - padR;
  const innerH = chartH - padT - padB;

  const maxVal = Math.max(...data.map((d) => d.value));
  const minVal = Math.min(...data.map((d) => d.value)) * 0.8;
  const range = maxVal - minVal;

  const points = data.map((d, i) => ({
    x: padL + (i / (data.length - 1)) * innerW,
    y: padT + innerH - ((d.value - minVal) / range) * innerH,
    ...d,
  }));

  // 画线进度 — spring 驱动
  const lineDrawProgress = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 30, stiffness: 30, mass: 1.2 },
  });

  // 标题淡入
  const titleProgress = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.5 },
  });

  // 构建 SVG path
  const visibleCount = Math.floor(lineDrawProgress * points.length);
  const fractional = (lineDrawProgress * points.length) % 1;

  let pathD = "";
  for (let i = 0; i <= visibleCount && i < points.length; i++) {
    let px = points[i].x;
    let py = points[i].y;

    if (i === visibleCount && i < points.length - 1) {
      const next = points[i + 1];
      px = points[i].x + (next.x - points[i].x) * fractional;
      py = points[i].y + (next.y - points[i].y) * fractional;
    }

    pathD += i === 0 ? `M ${px} ${py}` : ` L ${px} ${py}`;
  }

  // 渐变填充区域
  let areaD = pathD;
  if (visibleCount > 0) {
    const lastIdx = Math.min(visibleCount, points.length - 1);
    let lastX = points[lastIdx].x;
    if (visibleCount < points.length - 1) {
      const next = points[visibleCount + 1];
      lastX =
        points[visibleCount].x +
        (next.x - points[visibleCount].x) * fractional;
    }
    areaD += ` L ${lastX} ${padT + innerH} L ${padL} ${padT + innerH} Z`;
  }

  // 当前高亮点
  const currentPointIdx = Math.min(
    Math.floor(lineDrawProgress * (points.length - 1)),
    points.length - 1,
  );
  const currentPoint = points[currentPointIdx];
  const dotProgress = spring({
    frame: Math.max(0, adjustedFrame - 0.5 * fps),
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.5 },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          fontFamily: FONT_FAMILY_CN,
          fontSize: 36,
          fontWeight: 600,
          color: COLORS.textLight,
          letterSpacing: 4,
          textAlign: "center",
          opacity: titleProgress,
        }}
      >
        {title}
      </div>

      <svg width={chartW} height={chartH} viewBox={`0 0 ${chartW} ${chartH}`}>
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.primary} stopOpacity="0.25" />
            <stop offset="100%" stopColor={COLORS.primary} stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={COLORS.primary} />
            <stop offset="100%" stopColor={COLORS.highlight} />
          </linearGradient>
        </defs>

        {/* 网格线 */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
          const y = padT + innerH * (1 - pct);
          const val = Math.round(minVal + range * pct);
          const gridOpacity = interpolate(
            adjustedFrame,
            [i * 0.05 * fps, (i * 0.05 + 0.3) * fps],
            [0, 0.3],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          return (
            <React.Fragment key={i}>
              <line
                x1={padL}
                y1={y}
                x2={padL + innerW}
                y2={y}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth={1}
                opacity={gridOpacity}
              />
              <text
                x={padL - 12}
                y={y + 5}
                textAnchor="end"
                fontSize={22}
                fill={COLORS.textLight}
                fontFamily="sans-serif"
                opacity={gridOpacity}
              >
                {val >= 10000
                  ? `${(val / 10000).toFixed(0)}万`
                  : val.toLocaleString()}
              </text>
            </React.Fragment>
          );
        })}

        {/* X轴标签 */}
        {points.map((p, i) => {
          const labelOpacity = interpolate(
            adjustedFrame,
            [0.1 * fps + i * 0.06 * fps, 0.4 * fps + i * 0.06 * fps],
            [0, 0.7],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          return (
            <text
              key={i}
              x={p.x}
              y={padT + innerH + 50}
              textAnchor="middle"
              fontSize={24}
              fill={COLORS.textLight}
              fontFamily="sans-serif"
              opacity={labelOpacity}
            >
              {p.year}
            </text>
          );
        })}

        {/* 渐变填充区域 */}
        {visibleCount > 0 && (
          <path d={areaD} fill="url(#areaGrad)" />
        )}

        {/* 折线 */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 当前高亮圆点 */}
        {lineDrawProgress > 0.1 && (
          <>
            <circle
              cx={currentPoint.x}
              cy={currentPoint.y}
              r={10 * dotProgress}
              fill={COLORS.highlight}
              opacity={dotProgress}
            />
            <circle
              cx={currentPoint.x}
              cy={currentPoint.y}
              r={18 * dotProgress}
              fill="none"
              stroke={COLORS.highlight}
              strokeWidth={2}
              opacity={dotProgress * 0.4}
            />
          </>
        )}

        {/* 最终数值标注 */}
        {lineDrawProgress > 0.9 && (
          <text
            x={points[points.length - 1].x}
            y={points[points.length - 1].y - 28}
            textAnchor="end"
            fontSize={34}
            fontWeight="bold"
            fill={COLORS.highlight}
            fontFamily="sans-serif"
            opacity={dotProgress}
          >
            {data[data.length - 1].value.toLocaleString()}
            {unit}
          </text>
        )}
      </svg>
    </div>
  );
};
