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
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

interface ChartSceneProps {
  title?: string;
  subtitle?: string;
  chartTitle: string;
  data: Array<{ year: string; value: number }>;
  unit: string;
}

export const ChartScene: React.FC<ChartSceneProps> = ({
  title,
  subtitle,
  chartTitle,
  data,
  unit,
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
  const panelAnim = useFrom({
    delay: 0.7,
    duration: 0.6,
    ease: power3Out,
    from: { y: 24, opacity: 0 },
  });

  const points = data.map((d) => ({ label: d.year, value: d.value }));

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
      {title && (
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
            {subtitle && (
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
            )}
          </div>
        </div>
      )}

      <div
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: `1px solid ${BRAND.cardBorder}`,
          borderRadius: 16,
          padding: '36px 28px 24px',
          marginTop: title ? 48 : 0,
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
          }}
        >
          {chartTitle}
        </div>
        <div
          style={{
            ...tokenToStyle(D0_CAPTION),
            fontFamily: FONT_CN,
            color: BRAND.textLight,
            marginBottom: 4,
          }}
        >
          单位：{unit}
        </div>
        <EditorialChart
          points={points}
          width={940}
          height={760}
          unit={unit}
          drawDelay={1.0}
          drawDuration={1.6}
          pointStaggerDelay={2.0}
        />
      </div>
    </AbsoluteFill>
  );
};
