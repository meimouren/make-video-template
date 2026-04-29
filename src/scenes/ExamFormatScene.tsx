import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { BarRow } from '../components/BarRow';
import { BRAND } from '../theme/colors';

interface Domain {
  name: string;
  percentage: number;
}

interface ExamFormatSceneProps {
  title: string;
  subtitle: string;
  domains: Domain[];
}

export const ExamFormatScene: React.FC<ExamFormatSceneProps> = ({ title, subtitle, domains }) => {
  const maxPct = Math.max(...domains.map((d) => d.percentage));

  return (
    <SceneShell title={title} subtitle={subtitle}>
      <div
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: `1px solid ${BRAND.cardBorder}`,
          borderRadius: 16,
          padding: '36px 32px',
          marginTop: 18,
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}
      >
        {domains.map((d, i) => (
          <BarRow
            key={d.name}
            name={d.name}
            percentage={d.percentage}
            index={i}
            delay={0.7}
            maxPercentage={maxPct}
          />
        ))}
      </div>
    </SceneShell>
  );
};
