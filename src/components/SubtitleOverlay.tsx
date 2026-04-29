import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { FONT_CN } from '../fonts';
import { BRAND } from '../theme/colors';
import subtitlesData from '../subtitles.json';

interface SubtitleLine {
  id: number;
  startFrame: number;
  endFrame: number;
  text: string;
}

const subtitles: SubtitleLine[] = subtitlesData;

/**
 * Academic Editorial subtitle layer.
 * Ink-on-parchment with a soft cream gradient backdrop for legibility.
 */
export const SubtitleOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const current = subtitles.find(
    (s) => frame >= s.startFrame && frame < s.endFrame,
  );

  if (!current) return null;

  const localFrame = frame - current.startFrame;

  const progress = spring({
    frame: localFrame,
    fps,
    config: { damping: 18, stiffness: 150, mass: 0.4 },
  });

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          bottom: 110,
          left: 40,
          right: 40,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontFamily: FONT_CN,
            fontSize: 42,
            fontWeight: 700,
            color: BRAND.white, // deep ink
            textAlign: 'center',
            // Subtle parchment-tinted shadow for legibility against any panel underneath
            textShadow: `0 2px 8px ${BRAND.black}cc, 0 1px 2px ${BRAND.black}99`,
            maxWidth: 960,
            lineHeight: 1.4,
            letterSpacing: '0.02em',
            opacity: progress,
            transform: `translateY(${(1 - progress) * 8}px)`,
          }}
        >
          {current.text}
        </div>
      </div>
    </AbsoluteFill>
  );
};
