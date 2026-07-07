import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { Icon, IconName } from '../components/icons';
import { useStagger } from '../animations/primitives';
import { back } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { FONT_CN } from '../theme/typography';

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface WhyAMCSceneProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

const ICON_CYCLE: IconName[] = ['medal', 'seal-check', 'graduation-cap', 'map-pin'];
const AVAILABLE_ICONS: IconName[] = ['medal', 'seal-check', 'graduation-cap', 'map-pin', 'scales', 'book-open'];

const resolveIcon = (icon: string, index: number): IconName =>
  (AVAILABLE_ICONS as string[]).includes(icon)
    ? (icon as IconName)
    : ICON_CYCLE[index % ICON_CYCLE.length];

/** Bold Editorial 2x2 hairline grid: cobalt icon + serif title + muted desc. */
export const WhyAMCScene: React.FC<WhyAMCSceneProps> = ({ title, subtitle, benefits }) => {
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

        {/* 2x2 hairline grid */}
        <div
          style={{
            flex: 1,
            marginTop: 56,
            alignSelf: 'stretch',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            borderTop: `2px solid ${BRAND.white}`,
            borderLeft: `1.5px solid ${BRAND.divider}`,
          }}
        >
          {benefits.map((b, i) => (
            <BenefitCell key={b.title + i} benefit={b} index={i} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const BenefitCell: React.FC<{ benefit: Benefit; index: number }> = ({ benefit, index }) => {
  const cell = useStagger({
    stagger: 0.13,
    index,
    delay: 0.6,
    duration: 0.6,
    ease: back(1.4).out,
    from: { y: 26, opacity: 0, scale: 0.94 },
  });
  return (
    <div
      style={{
        borderRight: `1.5px solid ${BRAND.divider}`,
        borderBottom: `1.5px solid ${BRAND.divider}`,
        padding: '44px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 22,
        transform: `translateY(${cell.y}px) scale(${cell.scale})`,
        opacity: cell.opacity,
      }}
    >
      <Icon name={resolveIcon(benefit.icon, index)} size={96} color={BRAND.yellow} />
      <div style={{ fontFamily: FONT_CN, fontSize: 52, fontWeight: 700, color: BRAND.white }}>{benefit.title}</div>
      <div style={{ fontFamily: FONT_CN, fontSize: 34, color: BRAND.textLight, lineHeight: 1.4 }}>{benefit.desc}</div>
    </div>
  );
};
