import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useFrom } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import {
  D2_SUBTITLE,
  D4_HEADLINE,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

export interface SceneShellProps {
  title?: string;
  subtitle?: string;
  /** Override default top padding (default 180) */
  paddingTop?: number;
  /** Override default bottom padding (default 220) — leave room for subtitle bar */
  paddingBottom?: number;
  children?: React.ReactNode;
}

/**
 * Shared scene shell used by every v2 scene.
 *
 * Provides:
 * - AbsoluteFill with brand-black background
 * - 180px top / 220px bottom safe-zone padding (avoids brand bar / subtitle bar)
 * - Vertical centering of content
 * - Standard title block: yellow vertical accent bar + headline + subtitle
 *   with built-in slide-in animation
 *
 * Children render below the title block at default 60px gap.
 */
export const SceneShell: React.FC<SceneShellProps> = ({
  title,
  subtitle,
  paddingTop = 180,
  paddingBottom = 220,
  children,
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

  return (
    <AbsoluteFill
      style={{
        background: BRAND.black,
        padding: `${paddingTop}px 70px ${paddingBottom}px`,
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

      <div style={{ marginTop: title ? 50 : 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {children}
      </div>
    </AbsoluteFill>
  );
};
