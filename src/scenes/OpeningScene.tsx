import React from 'react';
import { AbsoluteFill } from 'remotion';
import { EditorialChart } from '../components/EditorialChart';
import { useFrom } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import {
  D0_CAPTION,
  D2_SUBTITLE,
  D4_HEADLINE,
  FONT_HEAD_EN,
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
    from: { y: -24, opacity: 0 },
  });
  const subtitleAnim = useFrom({
    delay: 0.3,
    duration: 0.6,
    ease: power3Out,
    from: { y: -12, opacity: 0 },
  });
  const captionAnim = useFrom({
    delay: 2.4,
    duration: 0.5,
    ease: power3Out,
    from: { opacity: 0 },
  });

  const points = participationData.map((d) => ({ label: d.year, value: d.value }));

  return (
    <AbsoluteFill style={{ background: BRAND.black, padding: '160px 80px' }}>
      {/* Headline */}
      <div
        style={{
          ...tokenToStyle(D4_HEADLINE),
          fontFamily: FONT_CN,
          color: BRAND.yellow,
          fontWeight: 700,
          transform: `translateY(${titleAnim.y}px)`,
          opacity: titleAnim.opacity,
          marginBottom: 16,
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 400,
          transform: `translateY(${subtitleAnim.y}px)`,
          opacity: subtitleAnim.opacity,
          marginBottom: 80,
        }}
      >
        {subtitle}
      </div>

      {/* Chart title */}
      <div
        style={{
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 600,
          marginBottom: 24,
          opacity: subtitleAnim.opacity,
        }}
      >
        {participationTitle}
      </div>

      {/* Editorial chart */}
      <div style={{ width: 920, height: 720 }}>
        <EditorialChart
          points={points}
          width={920}
          height={720}
          unit={participationUnit}
        />
      </div>

      {/* Source caption */}
      <div
        style={{
          ...tokenToStyle(D0_CAPTION),
          fontFamily: FONT_HEAD_EN,
          fontStyle: 'italic',
          color: BRAND.textLight,
          marginTop: 24,
          opacity: captionAnim.opacity,
        }}
      >
        Source: 翰林有方 · 国际竞赛系列
      </div>
    </AbsoluteFill>
  );
};
