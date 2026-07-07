import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { FONT_CN } from '../theme/typography';
import { BRAND, ON_ACCENT } from '../theme/colors';
import subtitlesData from '../subtitles.json';

interface SubtitleLine {
  id: number;
  startFrame: number;
  endFrame: number;
  text: string;
}

const subtitles: SubtitleLine[] = subtitlesData;

/**
 * Bold Editorial subtitle layer — a solid ink bar with paper-white text.
 * Legible on both the paper scenes and the inverted cobalt accent scenes.
 */
export const SubtitleOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const current = subtitles.find((s) => frame >= s.startFrame && frame < s.endFrame);
  if (!current) return null;

  const localFrame = frame - current.startFrame;
  const progress = spring({ frame: localFrame, fps, config: { damping: 18, stiffness: 150, mass: 0.4 } });

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', bottom: 64, left: 60, right: 60, display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: FONT_CN,
            fontSize: 38,
            fontWeight: 700,
            color: ON_ACCENT,
            background: BRAND.white,
            padding: '14px 28px',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.35,
            letterSpacing: '0.02em',
            opacity: progress,
            transform: `translateY(${(1 - progress) * 10}px)`,
          }}
        >
          {current.text}
        </div>
      </div>
    </AbsoluteFill>
  );
};
