import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { BRAND, ON_ACCENT } from '../theme/colors';
import { FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface Row {
  aspect: string;
  left: string;
  right: string;
}

interface CompareTableSceneProps {
  kicker?: string;
  title?: string;
  leftLabel?: string;
  rightLabel?: string;
  rows?: Row[];
  takeawayPre?: string;
  takeawayHighlight?: string;
  takeawayPost?: string;
}

const DEFAULT_ROWS: Row[] = [
  { aspect: '性质', left: '国际科学奥赛', right: '美国国家赛' },
  { aspect: '覆盖', left: '60+ 国家', right: '美国为主' },
  { aspect: '考察', left: '三轨综合', right: '经济 + 案例' },
  { aspect: '权威性', left: '诺奖背书', right: 'CEE 主办' },
  { aspect: '团队赛', left: 'Business Case', right: 'Critical Thinking' },
];

const GUTTER = 170;

/**
 * Two-column comparison with a clear memory point:
 * the IEO column is a solid cobalt panel (the hero), NEC stays muted paper,
 * and a black "takeaway" bar at the bottom nails the one thing to remember.
 */
export const CompareTableScene: React.FC<CompareTableSceneProps> = ({
  kicker = '国际奥赛 vs 全美经济挑战',
  title = 'IEO vs NEC',
  leftLabel = 'IEO',
  rightLabel = 'NEC',
  rows = DEFAULT_ROWS,
  takeawayPre = '诺奖背书 · ',
  takeawayHighlight = '国际唯一',
  takeawayPost = ' 经济学奥赛',
}) => {
  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <Background />
      <div style={{ position: 'absolute', inset: 0, padding: '140px 70px', display: 'flex', flexDirection: 'column' }}>
        {/* header */}
        <div style={{ display: 'flex', gap: 22, marginBottom: 40 }}>
          <div style={{ width: 10, background: BRAND.yellow }} />
          <div>
            <div style={{ fontFamily: FONT_CN_SANS, fontSize: 30, letterSpacing: '0.1em', color: BRAND.textLight, marginBottom: 10 }}>
              {kicker}
            </div>
            <div style={{ fontFamily: FONT_CN, fontSize: 84, fontWeight: 700, color: BRAND.white, lineHeight: 1.0 }}>
              {title}
            </div>
          </div>
        </div>

        {/* table — IEO column is a solid cobalt panel (the focal point) */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* column headers */}
          <div style={{ display: 'flex' }}>
            <div style={{ width: GUTTER }} />
            <div style={{ flex: 1, background: BRAND.yellow, color: ON_ACCENT, fontFamily: FONT_CN, fontSize: 54, fontWeight: 700, padding: '18px 28px' }}>
              {leftLabel}
            </div>
            <div style={{ flex: 1, color: BRAND.textLight, fontFamily: FONT_CN, fontSize: 54, fontWeight: 700, padding: '18px 28px' }}>
              {rightLabel}
            </div>
          </div>

          {/* rows */}
          {rows.map((r, i) => {
            const key = r.aspect === '权威性';
            return (
              <div key={i} style={{ flex: 1, display: 'flex' }}>
                <div
                  style={{
                    width: GUTTER,
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: FONT_CN_SANS,
                    fontSize: 32,
                    color: key ? BRAND.white : BRAND.textLight,
                    fontWeight: key ? 700 : 400,
                    letterSpacing: '0.06em',
                    borderBottom: `1px solid ${BRAND.divider}`,
                  }}
                >
                  {r.aspect}
                </div>
                <div
                  style={{
                    flex: 1,
                    background: BRAND.yellow,
                    color: ON_ACCENT,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 28px',
                    fontFamily: FONT_CN,
                    fontSize: 42,
                    fontWeight: 700,
                    borderBottom: `1px solid ${ON_ACCENT}33`,
                  }}
                >
                  {r.left}
                </div>
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 28px',
                    fontFamily: FONT_CN,
                    fontSize: 42,
                    color: BRAND.textLight,
                    borderBottom: `1px solid ${BRAND.divider}`,
                  }}
                >
                  {r.right}
                </div>
              </div>
            );
          })}
        </div>

        {/* takeaway bar — the one line to remember */}
        <div style={{ marginTop: 44, background: BRAND.white, padding: '34px 36px' }}>
          <div style={{ fontFamily: FONT_CN, fontSize: 48, fontWeight: 700, color: BRAND.black }}>
            {takeawayPre}
            <span style={{ background: BRAND.yellow, color: ON_ACCENT, padding: '2px 14px' }}>{takeawayHighlight}</span>
            {takeawayPost}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
