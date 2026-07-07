import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useFrom, useStagger } from '../animations/primitives';
import { back, power3Out } from '../animations/easings';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface ComparisonItem {
  aspect: string;
  left: string;
  right: string;
}

interface ComparisonSceneProps {
  title: string;
  subtitle: string;
  comparison: ComparisonItem[];
  leftLabel: string;
  rightLabel: string;
}

const GUTTER = 200;

/**
 * Bold Editorial two-column comparison (CompareTableScene design).
 * The leftLabel column is a solid cobalt panel (the hero); the rightLabel
 * column stays muted paper. A black takeaway bar at the bottom nails the
 * one thing to remember, highlighting leftLabel in cobalt.
 */
export const ComparisonScene: React.FC<ComparisonSceneProps> = ({
  title,
  subtitle,
  comparison,
  leftLabel,
  rightLabel,
}) => {
  const headerAnim = useFrom({ delay: 0.55, duration: 0.55, ease: back(1.4).out, from: { y: 16, opacity: 0 } });
  const takeawayAnim = useFrom({
    delay: 0.7 + comparison.length * 0.1,
    duration: 0.6,
    ease: power3Out,
    from: { y: 22, opacity: 0 },
  });

  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <Background />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '150px 70px 290px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SceneHeader kicker={subtitle} title={title} />

        {/* table — leftLabel column is a solid cobalt panel (the focal point) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginTop: 60 }}>
          {/* column headers */}
          <div
            style={{
              display: 'flex',
              transform: `translateY(${headerAnim.y}px)`,
              opacity: headerAnim.opacity,
            }}
          >
            <div style={{ width: GUTTER }} />
            <div
              style={{
                flex: 1,
                background: BRAND.yellow,
                color: ON_ACCENT,
                fontFamily: FONT_CN,
                fontSize: 58,
                fontWeight: 700,
                padding: '20px 30px',
              }}
            >
              {leftLabel}
            </div>
            <div
              style={{
                flex: 1,
                color: BRAND.textLight,
                fontFamily: FONT_CN,
                fontSize: 58,
                fontWeight: 700,
                padding: '20px 30px',
              }}
            >
              {rightLabel}
            </div>
          </div>

          {/* rows */}
          {comparison.map((r, i) => (
            <ComparisonRow key={r.aspect + i} item={r} index={i} />
          ))}
        </div>

        {/* takeaway bar — the one line to remember */}
        <div
          style={{
            marginTop: 48,
            background: BRAND.white,
            padding: '36px 40px',
            transform: `translateY(${takeawayAnim.y}px)`,
            opacity: takeawayAnim.opacity,
          }}
        >
          <div style={{ fontFamily: FONT_CN, fontSize: 48, fontWeight: 700, color: BRAND.black }}>
            {'诺奖背书 · '}
            <span style={{ background: BRAND.yellow, color: ON_ACCENT, padding: '2px 16px' }}>{leftLabel}</span>
            {' · 更具国际权威'}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const ComparisonRow: React.FC<{ item: ComparisonItem; index: number }> = ({ item, index }) => {
  const row = useStagger({
    stagger: 0.1,
    index,
    delay: 0.7,
    duration: 0.55,
    ease: power3Out,
    from: { y: 14, opacity: 0 },
  });
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        transform: `translateY(${row.y}px)`,
        opacity: row.opacity,
      }}
    >
      <div
        style={{
          width: GUTTER,
          display: 'flex',
          alignItems: 'center',
          fontFamily: FONT_CN_SANS,
          fontSize: 34,
          color: BRAND.textLight,
          letterSpacing: '0.06em',
          borderBottom: `1px solid ${BRAND.divider}`,
        }}
      >
        {item.aspect}
      </div>
      <div
        style={{
          flex: 1,
          background: BRAND.yellow,
          color: ON_ACCENT,
          display: 'flex',
          alignItems: 'center',
          padding: '0 30px',
          fontFamily: FONT_CN,
          fontSize: 44,
          fontWeight: 700,
          borderBottom: `1px solid ${ON_ACCENT}33`,
        }}
      >
        {item.left}
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '0 30px',
          fontFamily: FONT_CN,
          fontSize: 44,
          color: BRAND.textLight,
          borderBottom: `1px solid ${BRAND.divider}`,
        }}
      >
        {item.right}
      </div>
    </div>
  );
};
