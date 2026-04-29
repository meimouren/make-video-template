import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { D2_SUBTITLE, FONT_CN, tokenToStyle } from '../theme/typography';

interface TitleCardSceneProps {
  title: string;
  subtitle: string;
  highlights: string[];
}

const Tag: React.FC<{ text: string; index: number; delay: number }> = ({ text, index, delay }) => {
  const tag = useStagger({
    stagger: 0.1,
    index,
    delay,
    duration: 0.55,
    ease: back(1.5).out,
    from: { y: 18, opacity: 0, scale: 0.85 },
  });
  return (
    <div
      style={{
        ...tokenToStyle(D2_SUBTITLE),
        fontFamily: FONT_CN,
        color: BRAND.yellow,
        fontWeight: 800,
        background: BRAND.cardBg,
        border: `2px solid ${BRAND.yellow}`,
        borderRadius: 999,
        padding: '16px 32px',
        transform: `translateY(${tag.y}px) scale(${tag.scale})`,
        opacity: tag.opacity,
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </div>
  );
};

export const TitleCardScene: React.FC<TitleCardSceneProps> = ({ title, subtitle, highlights }) => {
  return (
    <SceneShell title={title} subtitle={subtitle}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 18,
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        {highlights.map((h, i) => (
          <Tag key={h} text={h} index={i} delay={0.7} />
        ))}
      </div>
    </SceneShell>
  );
};
