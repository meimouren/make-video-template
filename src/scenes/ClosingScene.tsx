import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { useFrom, useTextReveal } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import {
  D2_SUBTITLE,
  D4_HEADLINE,
  FONT_BODY_EN,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

interface ClosingSceneProps {
  title: string;
  text: string;
}

export const ClosingScene: React.FC<ClosingSceneProps> = ({ title, text }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleReveal = useTextReveal({
    text: title,
    delay: 0.3,
    durationPerChar: 0.06,
  });

  const accentAnim = useFrom({
    delay: 0.2,
    duration: 0.55,
    ease: power3Out,
    from: { scale: 0 },
  });

  const textAnim = useFrom({
    delay: 0.3 + title.length * 0.06 + 0.2,
    duration: 0.7,
    ease: power3Out,
    from: { y: 20, opacity: 0 },
  });

  const chipAnim = useFrom({
    delay: 0.3 + title.length * 0.06 + 0.6,
    duration: 0.55,
    ease: power3Out,
    from: { y: 14, opacity: 0 },
  });

  // Yellow wipe right-to-left during the last 0.8 seconds
  const wipeStartFrame = durationInFrames - Math.round(0.8 * fps);
  const wipeProgress = interpolate(
    frame,
    [wipeStartFrame, durationInFrames],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  const wipeEase = power3Out(wipeProgress);

  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          padding: '180px 80px 220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 32,
          textAlign: 'center',
        }}
      >
        {/* Yellow accent bar (horizontal, centered) */}
        <div
          style={{
            width: 140,
            height: 6,
            background: BRAND.yellow,
            borderRadius: 3,
            transform: `scaleX(${accentAnim.scale})`,
          }}
        />

        {/* Title with reveal */}
        <div
          style={{
            ...tokenToStyle(D4_HEADLINE),
            fontFamily: FONT_CN,
            fontWeight: 800,
            color: BRAND.yellow,
            minHeight: D4_HEADLINE.fontSize * D4_HEADLINE.lineHeight,
          }}
        >
          {titleReveal.visibleText || ' '}
        </div>

        {/* Body text */}
        <div
          style={{
            ...tokenToStyle(D2_SUBTITLE),
            fontFamily: FONT_CN,
            color: BRAND.white,
            fontWeight: 400,
            opacity: textAnim.opacity,
            transform: `translateY(${textAnim.y}px)`,
            maxWidth: 880,
            marginTop: 12,
            lineHeight: 1.6,
          }}
        >
          {text}
        </div>

        {/* Brand chip */}
        <div
          style={{
            marginTop: 36,
            padding: '14px 32px',
            background: BRAND.cardBg,
            border: `1px solid ${BRAND.cardBorder}`,
            borderRadius: 999,
            fontFamily: FONT_CN,
            fontSize: 28,
            color: BRAND.textLight,
            letterSpacing: '0.18em',
            fontWeight: 500,
            opacity: chipAnim.opacity,
            transform: `translateY(${chipAnim.y}px)`,
          }}
        >
          翰林有方 · 国际竞赛系列
        </div>
      </div>

      {/* Yellow exit wipe */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: BRAND.yellow,
          transform: `translateX(${(1 - wipeEase) * 110}%)`,
        }}
      />
    </AbsoluteFill>
  );
};
