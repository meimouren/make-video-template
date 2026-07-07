import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useFrom } from '../animations/primitives';
import { power3Out, back } from '../animations/easings';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface ClosingSceneProps {
  title: string;
  text?: string;
}

/**
 * Inverted cobalt closing accent page. Full-bleed cobalt background, white dot
 * halftone + giant ghost quote for depth, reversed-out serif closing statement,
 * an optional narrower body line, and a bold white CTA block.
 */
export const ClosingScene: React.FC<ClosingSceneProps> = ({ title, text }) => {
  const titleAnim = useFrom({
    delay: 0.3,
    duration: 0.8,
    ease: power3Out,
    from: { y: 40, opacity: 0 },
  });

  const textAnim = useFrom({
    delay: 0.9,
    duration: 0.7,
    ease: power3Out,
    from: { y: 24, opacity: 0 },
  });

  const ctaAnim = useFrom({
    delay: 1.4,
    duration: 0.6,
    ease: back(1.6).out,
    from: { y: 18, opacity: 0, scale: 0.85 },
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
      {/* giant ghost quote mark for depth */}
      <div
        style={{
          position: 'absolute',
          right: 20,
          top: -140,
          fontFamily: FONT_HEAD_EN,
          fontSize: 900,
          fontWeight: 900,
          lineHeight: 1,
          color: `${ON_ACCENT}1F`,
          pointerEvents: 'none',
        }}
      >
        ”
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
        {/* giant serif closing statement */}
        <div
          style={{
            fontFamily: FONT_CN,
            fontSize: 122,
            fontWeight: 700,
            lineHeight: 1.14,
            transform: `translateY(${titleAnim.y}px)`,
            opacity: titleAnim.opacity,
          }}
        >
          {title}
        </div>

        {/* optional body line — narrower, wide leading */}
        {text ? (
          <div
            style={{
              fontFamily: FONT_CN,
              fontSize: 42,
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: 760,
              marginTop: 40,
              opacity: textAnim.opacity * 0.94,
              transform: `translateY(${textAnim.y}px)`,
            }}
          >
            {text}
          </div>
        ) : null}

        {/* CTA block — white solid, cobalt ink */}
        <div
          style={{
            marginTop: 72,
            transform: `translateY(${ctaAnim.y}px) scale(${ctaAnim.scale})`,
            opacity: ctaAnim.opacity,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '22px 48px',
              background: ON_ACCENT,
              color: BRAND.yellow,
              fontFamily: FONT_CN_SANS,
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: '0.06em',
              borderRadius: 8,
            }}
          >
            关注翰林有方
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
