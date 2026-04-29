import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useFrom, useStagger } from '../animations/primitives';
import { back, power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import {
  D2_SUBTITLE,
  D4_HEADLINE,
  FONT_BODY_EN,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

export interface MetaChip {
  /** Small uppercase ENG label, e.g. "ROUND" */
  label: string;
  /** Big value, e.g. "4 / 4" */
  value: string;
  /** Optional accent color for the value (default: BRAND.yellow) */
  accent?: string;
}

export interface SceneShellProps {
  title?: string;
  subtitle?: string;
  /** Optional meta chips strip rendered below the title block. */
  metaChips?: MetaChip[];
  /** Optional small uppercase eyebrow rendered above the title (e.g. "CALENDAR" / "PATHWAY"). */
  eyebrow?: string;
  /** Optional small footer caption below body (e.g. data source). */
  footer?: string;
  /** When true, wraps children in a subtle dark panel with border + padding. Default: true. */
  bodyPanel?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
  children?: React.ReactNode;
}

const Chip: React.FC<{ chip: MetaChip; index: number }> = ({ chip, index }) => {
  const anim = useStagger({
    stagger: 0.1,
    index,
    delay: 0.5,
    duration: 0.55,
    ease: back(1.4).out,
    from: { y: 16, opacity: 0, scale: 0.9 },
  });
  const accent = chip.accent ?? BRAND.yellow;
  return (
    <div
      style={{
        flex: 1,
        padding: '14px 18px',
        background: BRAND.cardBg,
        border: `1px solid ${BRAND.cardBorder}`,
        borderTop: `3px solid ${accent}`,
        borderRadius: 8,
        transform: `translateY(${anim.y}px) scale(${anim.scale})`,
        opacity: anim.opacity,
      }}
    >
      <div
        style={{
          fontFamily: FONT_BODY_EN,
          fontSize: 18,
          letterSpacing: '0.18em',
          color: BRAND.textLight,
          fontWeight: 700,
          marginBottom: 4,
          textTransform: 'uppercase',
        }}
      >
        {chip.label}
      </div>
      <div
        style={{
          fontFamily: FONT_CN,
          fontSize: 32,
          fontWeight: 800,
          color: accent,
          lineHeight: 1.1,
        }}
      >
        {chip.value}
      </div>
    </div>
  );
};

export const SceneShell: React.FC<SceneShellProps> = ({
  title,
  subtitle,
  metaChips,
  eyebrow,
  footer,
  bodyPanel = true,
  paddingTop = 170,
  paddingBottom = 200,
  children,
}) => {
  const eyebrowAnim = useFrom({
    delay: 0,
    duration: 0.5,
    ease: power3Out,
    from: { y: -8, opacity: 0 },
  });
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
    delay: 0.6,
    duration: 0.6,
    ease: power3Out,
    from: { y: 18, opacity: 0 },
  });
  const footerAnim = useFrom({
    delay: 1.6,
    duration: 0.5,
    ease: power3Out,
    from: { opacity: 0 },
  });

  return (
    <AbsoluteFill
      style={{
        background: BRAND.black,
        padding: `${paddingTop}px 70px ${paddingBottom}px`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Eyebrow (small uppercase ENG) */}
      {eyebrow && (
        <div
          style={{
            fontFamily: FONT_BODY_EN,
            fontSize: 22,
            letterSpacing: '0.32em',
            color: BRAND.yellow,
            fontWeight: 700,
            marginBottom: 14,
            transform: `translateY(${eyebrowAnim.y}px)`,
            opacity: eyebrowAnim.opacity,
          }}
        >
          {eyebrow}
        </div>
      )}

      {/* Title block */}
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

      {/* Meta chips strip */}
      {metaChips && metaChips.length > 0 && (
        <div style={{ display: 'flex', gap: 12, marginTop: 32, marginBottom: 6 }}>
          {metaChips.map((chip, i) => (
            <Chip key={chip.label + i} chip={chip} index={i} />
          ))}
        </div>
      )}

      {/* Body panel */}
      <div
        style={{
          flex: 1,
          marginTop: 28,
          ...(bodyPanel
            ? {
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${BRAND.cardBorder}`,
                borderRadius: 16,
                padding: '32px 28px',
              }
            : {}),
          transform: `translateY(${panelAnim.y}px)`,
          opacity: panelAnim.opacity,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
        }}
      >
        {children}
      </div>

      {/* Footer caption */}
      {footer && (
        <div
          style={{
            fontFamily: FONT_BODY_EN,
            fontSize: 22,
            color: BRAND.textLight,
            marginTop: 16,
            opacity: footerAnim.opacity,
            alignSelf: 'flex-end',
            fontStyle: 'italic',
          }}
        >
          {footer}
        </div>
      )}
    </AbsoluteFill>
  );
};
