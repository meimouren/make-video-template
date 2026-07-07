import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { Watermark } from '../components/Watermark';
import { BRAND } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN, FONT_CN_SANS } from '../theme/typography';

interface Step {
  no: string;
  title: string;
  desc: string;
}

interface InfoListSceneProps {
  kicker?: string;
  title?: string;
  steps?: Step[];
}

const DEFAULT_STEPS: Step[] = [
  { no: '01', title: '教材打底', desc: '曼昆或克鲁格曼《经济学原理》通读一遍，建立框架' },
  { no: '02', title: '真题刷穿', desc: '把握选择题手感与开放题作答模板，限时训练' },
  { no: '03', title: '金融基础', desc: '个人理财、投资决策、风险管理三块补齐' },
  { no: '04', title: '组队练习', desc: '3-5 人提前演练商业案例分析与路演答辩' },
  { no: '05', title: '英文输出', desc: '保持英文读写，对接全球站全英赛制' },
];

/** Text-heavy numbered list (editorial): big serif numerals, hairline rows. */
export const InfoListScene: React.FC<InfoListSceneProps> = ({
  kicker = '教材打底 · 真题刷穿 · 团队磨合',
  title = '备考策略',
  steps = DEFAULT_STEPS,
}) => {
  return (
    <AbsoluteFill style={{ background: BRAND.black }}>
      <Background />
      <Watermark char="&" color={BRAND.white} size={1000} right={-120} bottom={-200} opacity={0.04} />

      <div style={{ position: 'absolute', inset: 0, padding: '140px 70px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: 22, marginBottom: 50 }}>
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

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderTop: `2px solid ${BRAND.white}` }}>
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 34,
                borderBottom: `1px solid ${BRAND.divider}`,
                padding: '4px 6px',
              }}
            >
              <div style={{ fontFamily: FONT_HEAD_EN, fontSize: 92, fontWeight: 900, color: BRAND.yellow, width: 150, lineHeight: 1 }}>
                {s.no}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT_CN, fontSize: 50, fontWeight: 700, color: BRAND.white, marginBottom: 8 }}>
                  {s.title}
                </div>
                <div style={{ fontFamily: FONT_CN, fontSize: 34, color: BRAND.textLight, lineHeight: 1.4 }}>
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
