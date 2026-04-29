import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useFrom, useStagger } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { D1_BODY, D2_SUBTITLE, D4_HEADLINE, FONT_CN, tokenToStyle } from '../theme/typography';

interface ContentSceneProps {
  title: string;
  subtitle: string;
  text: string;
  sceneIndex: number;
  totalScenes: number;
}

const Paragraph: React.FC<{ text: string; index: number; delay: number }> = ({
  text,
  index,
  delay,
}) => {
  const para = useStagger({
    stagger: 0.18,
    index,
    delay,
    duration: 0.55,
    ease: power3Out,
    from: { y: 16, opacity: 0 },
  });
  return (
    <div
      style={{
        ...tokenToStyle(D1_BODY),
        fontFamily: FONT_CN,
        color: BRAND.white,
        fontWeight: 400,
        transform: `translateY(${para.y}px)`,
        opacity: para.opacity,
      }}
    >
      {text}
    </div>
  );
};

export const ContentScene: React.FC<ContentSceneProps> = ({
  title,
  subtitle,
  text,
  sceneIndex,
  totalScenes,
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
  const indicatorAnim = useFrom({
    delay: 1.2,
    duration: 0.5,
    ease: power3Out,
    from: { opacity: 0 },
  });

  // Split body by line breaks; render each as a staggered paragraph
  const paragraphs = text.split(/\n+/).filter((p) => p.trim().length > 0);

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

      {/* Body paragraphs */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          marginTop: 60,
          padding: '0 8px',
        }}
      >
        {paragraphs.map((p, i) => (
          <Paragraph key={i} text={p} index={i} delay={0.6} />
        ))}
      </div>

      {/* Bottom-right scene indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 224,
          right: 70,
          opacity: indicatorAnim.opacity,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div
          style={{
            width: 60,
            height: 3,
            background: BRAND.yellow,
            borderRadius: 2,
          }}
        />
        <div
          style={{
            fontFamily: FONT_CN,
            fontSize: 22,
            color: BRAND.textLight,
            letterSpacing: '0.12em',
            fontWeight: 600,
          }}
        >
          {String(sceneIndex).padStart(2, '0')} / {String(totalScenes).padStart(2, '0')}
        </div>
      </div>
    </AbsoluteFill>
  );
};
