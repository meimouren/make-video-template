import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useFrom, useStagger } from '../animations/primitives';
import { power3Out, back } from '../animations/easings';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface TitleCardSceneProps {
  title: string;
  subtitle: string;
  highlights: string[];
}

/**
 * Inverted cobalt accent / rhythm page. Full-bleed cobalt background, white
 * dot halftone + giant ghost watermark for depth, reversed-out serif title as
 * the core statement, and a row of white outline "pill" chips for highlights.
 */
const HighlightPill: React.FC<{ text: string; index: number; delay: number }> = ({
  text,
  index,
  delay,
}) => {
  const pill = useStagger({
    stagger: 0.1,
    index,
    delay,
    duration: 0.6,
    ease: back(1.4).out,
    from: { y: 16, opacity: 0, scale: 0.9 },
  });

  return (
    <div
      style={{
        padding: '16px 28px',
        border: `1px solid ${ON_ACCENT}66`,
        borderRadius: 8,
        fontFamily: FONT_CN_SANS,
        fontSize: 36,
        fontWeight: 600,
        color: ON_ACCENT,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        transform: `translateY(${pill.y}px) scale(${pill.scale})`,
        opacity: pill.opacity,
      }}
    >
      {text}
    </div>
  );
};

export const TitleCardScene: React.FC<TitleCardSceneProps> = ({ title, subtitle, highlights }) => {
  const kickerAnim = useFrom({
    delay: 0.2,
    duration: 0.6,
    ease: power3Out,
    from: { y: 14, opacity: 0 },
  });

  const titleAnim = useFrom({
    delay: 0.4,
    duration: 0.8,
    ease: power3Out,
    from: { y: 40, opacity: 0 },
  });

  return (
    <AbsoluteFill style={{ background: BRAND.yellow, overflow: 'hidden' }}>
      {/* white dot halftone */}
      <AbsoluteFill
        style={{
          backgroundImage: `radial-gradient(${ON_ACCENT}22 1.6px, transparent 1.7px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* giant ghost watermark symbol */}
      <div
        style={{
          position: 'absolute',
          left: -40,
          bottom: -260,
          fontFamily: FONT_HEAD_EN,
          fontSize: 820,
          fontWeight: 900,
          lineHeight: 1,
          color: `${ON_ACCENT}1F`,
          pointerEvents: 'none',
        }}
      >
        &amp;
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '170px 70px 290px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: ON_ACCENT,
        }}
      >
        {/* kicker */}
        <div
          style={{
            fontFamily: FONT_CN_SANS,
            fontSize: 30,
            letterSpacing: '0.4em',
            marginBottom: 40,
            transform: `translateY(${kickerAnim.y}px)`,
            opacity: kickerAnim.opacity * 0.85,
          }}
        >
          {subtitle || 'OVERVIEW'}
        </div>

        {/* giant serif title — the core statement */}
        <div
          style={{
            fontFamily: FONT_CN,
            fontSize: 118,
            fontWeight: 700,
            lineHeight: 1.14,
            transform: `translateY(${titleAnim.y}px)`,
            opacity: titleAnim.opacity,
          }}
        >
          {title}
        </div>

        {/* highlight pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 18,
            marginTop: 64,
          }}
        >
          {highlights.map((h, i) => (
            <HighlightPill key={h + i} text={h} index={i} delay={0.9} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
