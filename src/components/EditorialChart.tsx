import React from 'react';
import { useChartDraw, useStagger, useFrom } from '../animations';
import { power3Out, back } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D0_CAPTION, D2_SUBTITLE, FONT_BODY_EN } from '../theme/typography';

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

const ChartDot: React.FC<{
  x: number;
  y: number;
  index: number;
  delay: number;
  color: string;
  isLast: boolean;
}> = ({ x, y, index, delay, color, isLast }) => {
  const dot = useStagger({
    stagger: 0.12,
    index,
    delay,
    duration: 0.45,
    ease: back().out,
    from: { scale: 0 },
  });
  // Pulsing halo on the last (latest) point only — draws attention to current value
  const halo = useFrom({
    delay: delay + index * 0.12 + 0.3,
    duration: 0.6,
    ease: power3Out,
    from: { opacity: 0, scale: 0.5 },
  });
  return (
    <g style={{ transform: `scale(${dot.scale})`, transformOrigin: `${x}px ${y}px` }}>
      {isLast && (
        <circle
          cx={x}
          cy={y}
          r={26}
          fill={color}
          opacity={halo.opacity * 0.18 * halo.scale}
        />
      )}
      <circle cx={x} cy={y} r={20} fill={BRAND.black} stroke={color} strokeWidth={3} />
      <circle cx={x} cy={y} r={10} fill={color} />
    </g>
  );
};

const ChartLabel: React.FC<{
  x: number;
  y: number;
  text: string;
  index: number;
  delay: number;
  highlight: boolean;
}> = ({ x, y, text, index, delay, highlight }) => {
  const lab = useStagger({
    stagger: 0.12,
    index,
    delay: delay + 0.15,
    duration: 0.45,
    ease: power3Out,
    from: { y: -14, opacity: 0 },
  });
  const padX = 14;
  const padY = 6;
  const charW = D0_CAPTION.fontSize * 0.62;
  const w = text.length * charW + padX * 2;
  const h = D0_CAPTION.fontSize + padY * 2;
  return (
    <g
      style={{
        transform: `translateY(${lab.y}px)`,
        opacity: lab.opacity,
      }}
    >
      <rect
        x={x - w / 2}
        y={y - h}
        width={w}
        height={h}
        rx={6}
        fill={highlight ? BRAND.yellow : 'rgba(255,255,255,0.08)'}
        stroke={highlight ? 'transparent' : 'rgba(255,255,255,0.18)'}
        strokeWidth={1}
      />
      <text
        x={x}
        y={y - h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily={FONT_BODY_EN}
        fontSize={D0_CAPTION.fontSize}
        fontWeight={700}
        fill={highlight ? BRAND.black : BRAND.white}
      >
        {text}
      </text>
    </g>
  );
};

export const EditorialChart: React.FC<EditorialChartProps> = ({
  points,
  width,
  height,
  unit,
  drawDelay = 0.3,
  drawDuration = 1.4,
  pointStaggerDelay = 1.2,
  seriesColor = DATA.red,
}) => {
  const padL = 110;
  const padR = 110;
  const padT = 70;
  const padB = 100;
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

  // Closed area path: line -> bottom-right -> bottom-left -> close
  const baselineY = padT + innerH;
  const areaD =
    pathD +
    ` L ${projected[projected.length - 1].x} ${baselineY}` +
    ` L ${projected[0].x} ${baselineY} Z`;

  // Approximate path length for stroke-dashoffset
  const totalLen = projected.reduce((sum, p, i) => {
    if (i === 0) return 0;
    const prev = projected[i - 1];
    return sum + Math.hypot(p.x - prev.x, p.y - prev.y);
  }, 0);

  const { dashOffset, progress: drawProgress } = useChartDraw({
    delay: drawDelay,
    duration: drawDuration,
    ease: power3Out,
  });

  const areaAnim = useFrom({
    delay: drawDelay + 0.3,
    duration: 0.9,
    ease: power3Out,
    from: { opacity: 0 },
  });

  // Y-axis gridlines (5 lines)
  const gridYs = [0, 0.25, 0.5, 0.75, 1].map((p) => padT + innerH * p);
  const gridValues = [0, 0.25, 0.5, 0.75, 1].map((p) => Math.round(maxVal - p * (maxVal - minVal)));

  const gradientId = `area-gradient-${seriesColor.replace('#', '')}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={seriesColor} stopOpacity={0.55} />
          <stop offset="60%" stopColor={seriesColor} stopOpacity={0.18} />
          <stop offset="100%" stopColor={seriesColor} stopOpacity={0} />
        </linearGradient>
        <clipPath id={`area-clip-${gradientId}`}>
          <rect
            x={padL}
            y={padT}
            width={innerW * drawProgress}
            height={innerH}
          />
        </clipPath>
      </defs>

      {/* Gridlines + numeric ticks on left axis */}
      {gridYs.map((y, i) => (
        <g key={i}>
          <line
            x1={padL}
            y1={y}
            x2={width - padR}
            y2={y}
            stroke={i === gridYs.length - 1 ? BRAND.white : BRAND.divider}
            strokeWidth={i === gridYs.length - 1 ? 1.5 : 1}
            opacity={i === gridYs.length - 1 ? 1 : 0.45}
            strokeDasharray={i === gridYs.length - 1 ? '0' : '4 6'}
          />
          {i < gridYs.length - 1 && (
            <text
              x={padL - 16}
              y={y + 6}
              textAnchor="end"
              fontFamily={FONT_BODY_EN}
              fontSize={D0_CAPTION.fontSize - 2}
              fill={BRAND.textLight}
            >
              {gridValues[i].toLocaleString()}
            </text>
          )}
        </g>
      ))}

      {/* Y-axis unit label (top-left) */}
      <text
        x={padL - 16}
        y={padT - 16}
        textAnchor="end"
        fontFamily={FONT_BODY_EN}
        fontSize={D0_CAPTION.fontSize}
        fontWeight={600}
        fill={BRAND.yellow}
      >
        {unit}
      </text>

      {/* Area fill under line (clipped by drawProgress so it grows with the line) */}
      <g opacity={areaAnim.opacity} clipPath={`url(#area-clip-${gradientId})`}>
        <path d={areaD} fill={`url(#${gradientId})`} />
      </g>

      {/* Animated line on top of fill */}
      <path
        d={pathD}
        fill="none"
        stroke={seriesColor}
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={totalLen}
        strokeDashoffset={dashOffset(totalLen)}
      />

      {/* Data points with rings */}
      {projected.map((p, i) => (
        <ChartDot
          key={`dot-${i}`}
          x={p.x}
          y={p.y}
          index={i}
          delay={pointStaggerDelay}
          color={seriesColor}
          isLast={i === projected.length - 1}
        />
      ))}

      {/* Value labels above points (last one highlighted yellow) */}
      {projected.map((p, i) => (
        <ChartLabel
          key={`label-${i}`}
          x={p.x}
          y={p.y - 32}
          text={p.value.toLocaleString()}
          index={i}
          delay={pointStaggerDelay}
          highlight={i === projected.length - 1}
        />
      ))}

      {/* X-axis labels (years) */}
      {projected.map((p, i) => (
        <text
          key={`xlabel-${i}`}
          x={p.x}
          y={baselineY + 38}
          textAnchor="middle"
          fontFamily={FONT_BODY_EN}
          fontSize={D0_CAPTION.fontSize}
          fontWeight={i === projected.length - 1 ? 700 : 400}
          fill={i === projected.length - 1 ? BRAND.yellow : BRAND.textLight}
        >
          {p.label}
        </text>
      ))}
    </svg>
  );
};
