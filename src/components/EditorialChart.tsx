import React from 'react';
import { useChartDraw, useStagger } from '../animations';
import { power3Out, back } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D0_CAPTION, FONT_BODY_EN } from '../theme/typography';

export interface ChartPoint {
  label: string;
  value: number;
}

interface EditorialChartProps {
  points: ChartPoint[];
  width: number;
  height: number;
  unit: string;
  drawDelay?: number;
  drawDuration?: number;
  pointStaggerDelay?: number;
  /** Color for the line + points (default: DATA.red) */
  seriesColor?: string;
}

const ChartDot: React.FC<{ x: number; y: number; index: number; delay: number; color: string }> = ({
  x, y, index, delay, color,
}) => {
  const dot = useStagger({
    stagger: 0.12, index,
    delay, duration: 0.4,
    ease: back().out,
    from: { scale: 0 },
  });
  return (
    <circle
      cx={x}
      cy={y}
      r={8}
      fill={color}
      style={{ transform: `scale(${dot.scale})`, transformOrigin: `${x}px ${y}px` }}
    />
  );
};

const ChartLabel: React.FC<{ x: number; y: number; text: string; index: number; delay: number }> = ({
  x, y, text, index, delay,
}) => {
  const lab = useStagger({
    stagger: 0.12, index,
    delay: delay + 0.1, duration: 0.4,
    ease: power3Out,
    from: { y: -10, opacity: 0 },
  });
  return (
    <text
      x={x}
      y={y + lab.y}
      textAnchor="middle"
      fontFamily={FONT_BODY_EN}
      fontSize={D0_CAPTION.fontSize}
      fontWeight={600}
      fill={BRAND.white}
      opacity={lab.opacity}
    >
      {text}
    </text>
  );
};

export const EditorialChart: React.FC<EditorialChartProps> = ({
  points, width, height, unit,
  drawDelay = 0.3, drawDuration = 1.4,
  pointStaggerDelay = 1.2,
  seriesColor = DATA.red,
}) => {
  const padL = 80;
  const padR = 80;
  const padT = 40;
  const padB = 80;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;

  const maxVal = Math.max(...points.map((p) => p.value));
  const minVal = Math.min(...points.map((p) => p.value)) * 0.85;
  const range = maxVal - minVal || 1;

  const projected = points.map((p, i) => ({
    ...p,
    x: padL + (i / (points.length - 1)) * innerW,
    y: padT + innerH - ((p.value - minVal) / range) * innerH,
  }));

  const pathD = projected.reduce(
    (acc, p, i) => acc + (i === 0 ? `M ${p.x} ${p.y}` : ` L ${p.x} ${p.y}`),
    ''
  );

  // Approximate path length for stroke-dashoffset (sum of segment lengths)
  const totalLen = projected.reduce((sum, p, i) => {
    if (i === 0) return 0;
    const prev = projected[i - 1];
    return sum + Math.hypot(p.x - prev.x, p.y - prev.y);
  }, 0);

  const { dashOffset } = useChartDraw({
    delay: drawDelay,
    duration: drawDuration,
    ease: power3Out,
  });

  // Y-axis gridlines (5 lines)
  const gridYs = [0, 0.25, 0.5, 0.75, 1].map((p) => padT + innerH * p);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {/* Gridlines */}
      {gridYs.map((y, i) => (
        <line
          key={i}
          x1={padL}
          y1={y}
          x2={width - padR}
          y2={y}
          stroke={BRAND.divider}
          strokeWidth={1}
          opacity={0.6}
        />
      ))}

      {/* Y-axis unit label (top-left) */}
      <text
        x={padL}
        y={padT - 12}
        fontFamily={FONT_BODY_EN}
        fontSize={D0_CAPTION.fontSize}
        fill={BRAND.textLight}
      >
        {unit}
      </text>

      {/* Animated line */}
      <path
        d={pathD}
        fill="none"
        stroke={seriesColor}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={totalLen}
        strokeDashoffset={dashOffset(totalLen)}
      />

      {/* Data points (stagger overshoot) */}
      {projected.map((p, i) => (
        <ChartDot
          key={`dot-${i}`}
          x={p.x}
          y={p.y}
          index={i}
          delay={pointStaggerDelay}
          color={seriesColor}
        />
      ))}

      {/* Value labels above points */}
      {projected.map((p, i) => (
        <ChartLabel
          key={`label-${i}`}
          x={p.x}
          y={p.y - 22}
          text={p.value.toLocaleString()}
          index={i}
          delay={pointStaggerDelay}
        />
      ))}

      {/* X-axis labels (years) */}
      {projected.map((p, i) => (
        <text
          key={`xlabel-${i}`}
          x={p.x}
          y={height - padB / 2 + 8}
          textAnchor="middle"
          fontFamily={FONT_BODY_EN}
          fontSize={D0_CAPTION.fontSize}
          fill={BRAND.textLight}
        >
          {p.label}
        </text>
      ))}

      {/* Baseline */}
      <line
        x1={padL}
        y1={padT + innerH}
        x2={width - padR}
        y2={padT + innerH}
        stroke={BRAND.white}
        strokeWidth={1.5}
      />
    </svg>
  );
};
