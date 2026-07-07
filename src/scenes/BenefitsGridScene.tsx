import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { Icon, IconName } from '../components/icons';
import { BRAND } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface Cell {
  icon: IconName;
  title: string;
  desc: string;
}

interface BenefitsGridSceneProps {
  kicker?: string;
  title?: string;
  cells?: Cell[];
}

const DEFAULT_CELLS: Cell[] = [
  { icon: 'medal', title: '国际奥赛', desc: '科学奥赛家族 13 项之一' },
  { icon: 'seal-check', title: '诺奖背书', desc: 'Eric Maskin 发起' },
  { icon: 'graduation-cap', title: '藤校通道', desc: '金奖去向哈佛 · 斯坦福' },
  { icon: 'map-pin', title: '本土赛季', desc: '2026 全球站深圳主办' },
];

/** Icon-heavy 2x2 grid (editorial): hairline-divided cells, cobalt icons. */
export const BenefitsGridScene: React.FC<BenefitsGridSceneProps> = ({
  kicker = '诺奖发起 · 经济顶赛 · 名校认可',
  title = 'IEO 的申请价值',
  cells = DEFAULT_CELLS,
}) => {
  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <Background />
      <div style={{ position: 'absolute', inset: 0, padding: '150px 70px', display: 'flex', flexDirection: 'column' }}>
        {/* header */}
        <div style={{ display: 'flex', gap: 22, marginBottom: 70 }}>
          <div style={{ width: 10, background: BRAND.yellow }} />
          <div>
            <div style={{ fontFamily: FONT_CN_SANS, fontSize: 30, letterSpacing: '0.1em', color: BRAND.textLight, marginBottom: 10 }}>
              {kicker}
            </div>
            <div style={{ fontFamily: FONT_CN, fontSize: 76, fontWeight: 700, color: BRAND.white, lineHeight: 1.05 }}>
              {title}
            </div>
          </div>
        </div>

        {/* 2x2 hairline grid */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            borderTop: `2px solid ${BRAND.white}`,
            borderLeft: `1px solid ${BRAND.divider}`,
          }}
        >
          {cells.map((c, i) => (
            <div
              key={i}
              style={{
                borderRight: `1px solid ${BRAND.divider}`,
                borderBottom: `1px solid ${BRAND.divider}`,
                padding: '46px 44px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 22,
              }}
            >
              <Icon name={c.icon} size={96} color={BRAND.yellow} />
              <div style={{ fontFamily: FONT_CN, fontSize: 52, fontWeight: 700, color: BRAND.white }}>{c.title}</div>
              <div style={{ fontFamily: FONT_CN, fontSize: 32, color: BRAND.textLight, lineHeight: 1.4 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
