import React from 'react';
import { AbsoluteFill } from 'remotion';
import { BarRow } from '../components/BarRow';
import { useFrom } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import {
  D0_CAPTION,
  D2_SUBTITLE,
  D4_HEADLINE,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

interface Domain {
  name: string;
  percentage: number;
  topics: string;
}

interface TopicsSceneProps {
  title: string;
  subtitle: string;
  domains: Domain[];
}

export const TopicsScene: React.FC<TopicsSceneProps> = ({ title, subtitle, domains }) => {
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
  const panelAnim = useFrom({
    delay: 0.7,
    duration: 0.6,
    ease: power3Out,
    from: { y: 24, opacity: 0 },
  });

  const maxPercentage = Math.max(...domains.map((d) => d.percentage));

  return (
    <AbsoluteFill
      style={{
        background: BRAND.black,
        padding: '180px 70px 220px',
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

      {/* Bars panel */}
      <div
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: `1px solid ${BRAND.cardBorder}`,
          borderRadius: 16,
          padding: '40px 36px',
          marginTop: 50,
          transform: `translateY(${panelAnim.y}px)`,
          opacity: panelAnim.opacity,
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        {domains.map((d, i) => (
          <BarRow
            key={d.name}
            name={d.name}
            percentage={d.percentage}
            topics={d.topics}
            index={i}
            delay={0.8}
            maxPercentage={maxPercentage}
          />
        ))}
      </div>

      <div
        style={{
          ...tokenToStyle(D0_CAPTION),
          fontFamily: FONT_CN,
          color: BRAND.textLight,
          marginTop: 18,
          alignSelf: 'flex-end',
          opacity: panelAnim.opacity,
        }}
      >
        ※ 数据来源 翰林有方 · 国际竞赛系列
      </div>
    </AbsoluteFill>
  );
};
