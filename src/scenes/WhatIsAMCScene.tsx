import React from 'react';
import { AbsoluteFill } from 'remotion';
import { LevelCard } from '../components/LevelCard';
import { useFrom } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { D2_SUBTITLE, D4_HEADLINE, FONT_CN, tokenToStyle } from '../theme/typography';

interface Level {
  name: string;
  target?: string;
  questions?: number;
  time?: string;
  scoring?: string;
  detail?: string;
  badge?: string;
  color?: string;
}

interface WhatIsAMCSceneProps {
  title: string;
  subtitle: string;
  levels: Level[];
}

export const WhatIsAMCScene: React.FC<WhatIsAMCSceneProps> = ({ title, subtitle, levels }) => {
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

  // Layout: 1 col for >=4 cards or full schema, 2 cols otherwise
  const useFullSchema = levels.some((l) => l.target || l.questions || l.time || l.scoring);
  const cols = useFullSchema || levels.length >= 4 ? 1 : 2;

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
      {/* Title block */}
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

      {/* Level cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: cols === 1 ? '1fr' : '1fr 1fr',
          gap: 18,
          marginTop: 50,
        }}
      >
        {levels.map((lv, i) => (
          <LevelCard
            key={lv.name + i}
            index={i}
            delay={0.7}
            name={lv.name}
            target={lv.target}
            questions={lv.questions}
            time={lv.time}
            scoring={lv.scoring}
            detail={lv.detail}
            badge={lv.badge}
            badgeColor={lv.color}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
