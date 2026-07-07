import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useFrom } from '../animations/primitives';
import { useNumberCount, computeChartDraw } from '../animations/data-hooks';
import { power3Out } from '../animations/easings';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface OpeningStatOverride {
  /** Middle stat label, e.g. "运营年份" (default: derived first-last year range) */
  midLabel?: string;
  /** Middle stat value, e.g. "47 年" (default: `${participationData.length} 届`) */
  midValue?: string;
  /** Growth stat value override (default: auto-calculated from data) */
  growthValue?: string;
  /** Scale stat value override (default: last data point) */
  scaleValue?: string;
  /** Scale stat label override */
  scaleLabel?: string;
}

interface OpeningSceneProps {
  title: string;
  subtitle: string;
  participationTitle: string;
  participationData: Array<{ year: string; value: number }>;
  participationUnit: string;
  openingStats?: OpeningStatOverride;
}

/**
 * Bold Editorial opening: a cobalt line/area chart of participation history
 * drawn against an ink baseline, with giant serif year + value marks, plus two
 * oversized serif hero stats below.
 */

// Splits a display value into an animatable numeric prefix (e.g. "60+" -> 60)
// and a static suffix ("+"). Non-numeric values ("Eric Maskin") render whole.
const splitNumeric = (raw: string): { num: number | null; suffix: string; whole: string } => {
  const m = raw.match(/^\s*([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return { num: null, suffix: '', whole: raw };
  const num = parseFloat(m[1].replace(/,/g, ''));
  if (Number.isNaN(num)) return { num: null, suffix: '', whole: raw };
  return { num, suffix: m[2], whole: raw };
};

const HeroStat: React.FC<{
  value: string;
  label: string;
  delay: number;
  accent?: boolean;
}> = ({ value, label, delay, accent }) => {
  const anim = useFrom({ delay, duration: 0.6, ease: power3Out, from: { y: 26, opacity: 0 } });
  const { num, suffix, whole } = splitNumeric(value);
  const counted = useNumberCount({
    delay: delay + 0.1,
    duration: 1.1,
    from: 0,
    to: num ?? 0,
    ease: power3Out,
  });
  const color = accent ? BRAND.yellow : BRAND.white;
  return (
    <div style={{ flex: '0 1 auto', transform: `translateY(${anim.y}px)`, opacity: anim.opacity }}>
      <div
        style={{
          fontFamily: FONT_HEAD_EN,
          fontWeight: 900,
          fontSize: num !== null ? 150 : 96,
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
          color,
          whiteSpace: 'nowrap',
        }}
      >
        {num !== null ? `${Math.round(counted).toLocaleString()}${suffix}` : whole}
      </div>
      <div
        style={{
          fontFamily: FONT_CN_SANS,
          fontSize: 32,
          letterSpacing: '0.1em',
          color: BRAND.textLight,
          marginTop: 14,
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const OpeningScene: React.FC<OpeningSceneProps> = ({
  title,
  subtitle,
  participationTitle,
  participationData,
  participationUnit,
  openingStats,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const chartTitleAnim = useFrom({ delay: 0.9, duration: 0.5, ease: power3Out, from: { y: -10, opacity: 0 } });

  // ---- chart geometry (in an SVG viewBox space) ----
  const W = 940;
  const H = 470;
  const padL = 20;
  const padR = 20;
  const padT = 30;
  const padB = 70; // room for year labels
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const values = participationData.map((d) => d.value);
  const maxV = Math.max(...values, 1);
  const n = participationData.length;

  const pts = participationData.map((d, i) => {
    const x = padL + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW);
    const y = padT + innerH - (d.value / maxV) * innerH;
    return { x, y, ...d };
  });

  // polyline path for the cobalt line
  const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  // area path (line + down to baseline)
  const baseY = padT + innerH;
  const areaPath = `${linePath} L${pts[pts.length - 1].x.toFixed(1)},${baseY} L${pts[0].x.toFixed(1)},${baseY} Z`;

  // draw progression: line grows left-to-right via stroke dashoffset
  const draw = computeChartDraw(frame, fps, { delay: 1.2, duration: 1.6, ease: power3Out });
  // rough total length estimate for dashoffset
  let totalLen = 0;
  for (let i = 1; i < pts.length; i++) {
    totalLen += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
  }
  const dashOffset = draw.dashOffset(totalLen);

  const lastIdx = n - 1;

  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <Background />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '150px 70px 290px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SceneHeader kicker={subtitle} title={title} />

        {/* centered content group: chart-title + chart + hero stats, evenly spaced */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 48,
          }}
        >
        {/* chart small-title */}
        <div
          style={{
            transform: `translateY(${chartTitleAnim.y}px)`,
            opacity: chartTitleAnim.opacity,
          }}
        >
          <div style={{ fontFamily: FONT_CN, fontSize: 44, fontWeight: 700, color: BRAND.white, lineHeight: 1.1 }}>
            {participationTitle}
          </div>
          <div style={{ fontFamily: FONT_CN_SANS, fontSize: 28, color: BRAND.textLight, marginTop: 8, letterSpacing: '0.06em' }}>
            单位：{participationUnit} · 数据来源 翰林有方
          </div>
        </div>

        {/* editorial line / area chart */}
        <div>
          <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', overflow: 'visible' }}>
            {/* cobalt area fill, fades in with the line */}
            <path d={areaPath} fill={BRAND.yellow} opacity={0.1 * draw.progress} />

            {/* 2px ink baseline */}
            <line x1={padL} y1={baseY} x2={W - padR} y2={baseY} stroke={BRAND.white} strokeWidth={2} />

            {/* cobalt line, drawn on */}
            <path
              d={linePath}
              fill="none"
              stroke={BRAND.yellow}
              strokeWidth={6}
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray={totalLen}
              strokeDashoffset={dashOffset}
            />

            {/* value + year marks, revealed as the line passes each point */}
            {pts.map((p, i) => {
              const reveal = draw.progress >= (n === 1 ? 0 : i / (n - 1)) - 0.001;
              const isLast = i === lastIdx;
              return (
                <g key={p.year} opacity={reveal ? 1 : 0}>
                  {/* dot */}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isLast ? 13 : 8}
                    fill={isLast ? BRAND.yellow : BRAND.black}
                    stroke={BRAND.yellow}
                    strokeWidth={isLast ? 0 : 5}
                  />
                  {/* value (serif) above the dot */}
                  <text
                    x={p.x}
                    y={p.y - 24}
                    textAnchor="middle"
                    fontFamily={FONT_HEAD_EN}
                    fontWeight={900}
                    fontSize={isLast ? 58 : 40}
                    fill={isLast ? BRAND.yellow : BRAND.white}
                    letterSpacing="-0.02em"
                  >
                    {p.value}
                  </text>
                  {/* year label under baseline */}
                  <text
                    x={p.x}
                    y={baseY + 42}
                    textAnchor="middle"
                    fontFamily={FONT_HEAD_EN}
                    fontWeight={isLast ? 900 : 400}
                    fontSize={30}
                    fill={isLast ? BRAND.white : BRAND.textLight}
                  >
                    {p.year}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* two giant serif hero stats */}
        <div
          style={{
            paddingTop: 44,
            borderTop: `2px solid ${BRAND.white}`,
            display: 'flex',
            gap: 40,
            alignItems: 'flex-end',
          }}
        >
          <HeroStat
            value={openingStats?.midValue ?? `${participationData.length}`}
            label={openingStats?.midLabel ?? '举办届数'}
            delay={2.8}
          />
          <HeroStat
            value={openingStats?.scaleValue ?? `${(participationData[lastIdx]?.value ?? 0).toLocaleString()}+`}
            label={openingStats?.scaleLabel ?? '参赛规模'}
            delay={3.1}
            accent
          />
        </div>
        </div>
      </div>

      {/* on-accent corner tag for editorial flourish */}
    </AbsoluteFill>
  );
};
