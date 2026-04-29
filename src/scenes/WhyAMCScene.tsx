import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { BenefitCard } from '../components/BenefitCard';

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

export const WhyAMCScene: React.FC<WhyAMCSceneProps> = ({ title, subtitle, benefits }) => {
  // Use 1-col for >=5 benefits, 2-col otherwise
  const cols = benefits.length >= 5 ? 1 : 2;

  return (
    <SceneShell title={title} subtitle={subtitle}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: cols === 1 ? '1fr' : '1fr 1fr',
          gap: 18,
          marginTop: 18,
        }}
      >
        {benefits.map((b, i) => (
          <BenefitCard
            key={b.title + i}
            icon={b.icon}
            title={b.title}
            desc={b.desc}
            index={i}
            delay={0.7}
          />
        ))}
      </div>
    </SceneShell>
  );
};
