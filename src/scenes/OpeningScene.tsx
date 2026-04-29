import React from 'react';
import { AbsoluteFill } from 'remotion';
import { EditorialChart } from '../components/EditorialChart';
import { useFrom, useStagger } from '../animations/primitives';
import { useNumberCount } from '../animations/data-hooks';
import { power3Out, back } from '../animations/easings';
import { BRAND } from '../theme/colors';
import {
  D0_CAPTION,
  D1_BODY,
  D2_SUBTITLE,
  D3_TITLE,
  D4_HEADLINE,
  FONT_HEAD_EN,
  FONT_BODY_EN,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

interface OpeningSceneProps {
  title: string;
  subtitle: string;
  participationTitle: string;
  participationData: Array<{ year: string; value: number }>;
  participationUnit: string;
}

interface StatCardProps {
  label: string;
  value: string;
  index: number;
  delay: number;
  emphasis?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, index, delay, emphasis }) => {
  const card = useStagger({
    stagger: 0.12,
    index,
    delay,
    duration: 0.55,
    ease: back(1.4).out,
    from: { y: 24, opacity: 0, scale: 0.85 },
  });
  return (
    <div
      style={{
        flex: 1,
        padding: '24px 24px',
        background: emphasis ? BRAND.yellow : BRAND.cardBg,
        border: emphasis ? 'none' : `1px solid ${BRAND.cardBorder}`,
        borderRadius: 12,
        transform: `translateY(${card.y}px) scale(${card.scale})`,
        opacity: card.opacity,
        transformOrigin: 'center bottom',
      }}
    >
      <div
        style={{
          ...tokenToStyle(D3_TITLE),
          fontFamily: FONT_BODY_EN,
          fontWeight: 800,
          color: emphasis ? BRAND.black : BRAND.yellow,
          marginBottom: 4,
        }}
      >
        {value}
      </div>
      <div
        style={{
          ...tokenToStyle(D0_CAPTION),
          fontFamily: FONT_CN,
          fontWeight: 500,
          color: emphasis ? BRAND.black : BRAND.textLight,
          opacity: emphasis ? 0.85 : 1,
        }}
      >
        {label}
      </div>
    </div>
  );
};

const AnimatedGrowthValue: React.FC = () => {
  // 500 -> 1500 = 200% growth, count up
  const growth = useNumberCount({
    delay: 0.6,
    duration: 1.2,
    from: 0,
    to: 200,
    ease: power3Out,
  });
  return <>+{Math.round(growth)}%</>;
};

export const OpeningScene: React.FC<OpeningSceneProps> = ({
  title,
  subtitle,
  participationTitle,
  participationData,
  participationUnit,
}) => {
  const titleAnim = useFrom({
    delay: 0.1,
    duration: 0.7,
    ease: power3Out,
    from: { x: -20, opacity: 0 },
  });
  const subtitleAnim = useFrom({
    delay: 0.3,
    duration: 0.6,
    ease: power3Out,
    from: { y: -12, opacity: 0 },
  });
  const chartTitleAnim = useFrom({
    delay: 1.0,
    duration: 0.5,
    ease: power3Out,
    from: { y: -10, opacity: 0 },
  });
  const panelAnim = useFrom({
    delay: 1.0,
    duration: 0.6,
    ease: power3Out,
    from: { y: 24, opacity: 0 },
  });
  const captionAnim = useFrom({
    delay: 2.6,
    duration: 0.5,
    ease: power3Out,
    from: { opacity: 0 },
  });

  const points = participationData.map((d) => ({ label: d.year, value: d.value }));

  // Pull aggregate stats from data
  const firstYear = participationData[0]?.year ?? '';
  const lastYear = participationData[participationData.length - 1]?.year ?? '';
  const lastValue = participationData[participationData.length - 1]?.value ?? 0;

  return (
    <AbsoluteFill
      style={{
        background: BRAND.black,
        padding: '170px 70px 200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Title block with yellow accent bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 24,
          transform: `translateX(${titleAnim.x}px)`,
          opacity: titleAnim.opacity,
          marginBottom: 18,
        }}
      >
        <div
          style={{
            width: 8,
            alignSelf: 'stretch',
            background: BRAND.yellow,
            borderRadius: 4,
            marginTop: 8,
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              ...tokenToStyle(D4_HEADLINE),
              fontFamily: FONT_CN,
              color: BRAND.yellow,
              fontWeight: 800,
            }}
          >
            {title}
          </div>
          <div
            style={{
              ...tokenToStyle(D2_SUBTITLE),
              fontFamily: FONT_CN,
              color: BRAND.white,
              fontWeight: 400,
              marginTop: 12,
              transform: `translateY(${subtitleAnim.y}px)`,
              opacity: subtitleAnim.opacity,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      {/* Stat cards row */}
      <div
        style={{
          display: 'flex',
          gap: 18,
          marginTop: 36,
          marginBottom: 40,
        }}
      >
        <StatCard
          index={0}
          delay={0.5}
          label="历年参赛人数增长"
          value={(<AnimatedGrowthValue />) as unknown as string}
        />
        <StatCard
          index={1}
          delay={0.5}
          label={`${firstYear} - ${lastYear}`}
          value={`${participationData.length} 届`}
        />
        <StatCard
          index={2}
          delay={0.5}
          label="二零二六参赛规模"
          value={`${lastValue.toLocaleString()}+`}
          emphasis
        />
      </div>

      {/* Chart panel with subtle background */}
      <div
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: `1px solid ${BRAND.cardBorder}`,
          borderRadius: 16,
          padding: '36px 28px 24px',
          transform: `translateY(${panelAnim.y}px)`,
          opacity: panelAnim.opacity,
        }}
      >
        <div
          style={{
            ...tokenToStyle(D2_SUBTITLE),
            fontFamily: FONT_CN,
            color: BRAND.white,
            fontWeight: 700,
            marginBottom: 8,
            transform: `translateY(${chartTitleAnim.y}px)`,
            opacity: chartTitleAnim.opacity,
          }}
        >
          {participationTitle}
        </div>
        <div
          style={{
            ...tokenToStyle(D0_CAPTION),
            fontFamily: FONT_CN,
            color: BRAND.textLight,
            marginBottom: 4,
            transform: `translateY(${chartTitleAnim.y}px)`,
            opacity: chartTitleAnim.opacity,
          }}
        >
          单位：{participationUnit} · 数据来源 翰林有方
        </div>
        <EditorialChart
          points={points}
          width={940}
          height={620}
          unit={participationUnit}
          drawDelay={1.2}
          drawDuration={1.6}
          pointStaggerDelay={2.2}
        />
      </div>

      {/* Source caption (italic, fades in last) */}
      <div
        style={{
          ...tokenToStyle(D0_CAPTION),
          fontFamily: FONT_HEAD_EN,
          fontStyle: 'italic',
          color: BRAND.textLight,
          marginTop: 18,
          opacity: captionAnim.opacity,
          alignSelf: 'flex-end',
        }}
      >
        — 翰林有方 · 国际竞赛系列 EP.{lastYear.slice(-2)}
      </div>
    </AbsoluteFill>
  );
};
