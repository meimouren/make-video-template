import React from 'react';
import { SceneShell, MetaChip } from '../components/SceneShell';
import { BarRow } from '../components/BarRow';
import { BRAND, DATA } from '../theme/colors';

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
  const topDomain = domains.reduce((a, b) => (a.percentage > b.percentage ? a : b));

  const metaChips: MetaChip[] = [
    { label: 'DOMAINS', value: `${domains.length} 类`, accent: DATA.blue },
    { label: 'TOP', value: `${topDomain.name} ${topDomain.percentage}%`, accent: BRAND.yellow },
    { label: 'TOTAL', value: `${domains.reduce((s, d) => s + d.percentage, 0)}%`, accent: DATA.green },
  ];

  return (
    <SceneShell
      eyebrow="FORMAT · 题型分布"
      title={title}
      subtitle={subtitle}
      metaChips={metaChips}
      footer="HANLIN · 国际竞赛系列"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        {domains.map((d, i) => (
          <BarRow
            key={d.name}
            name={d.name}
            percentage={d.percentage}
            index={i}
            delay={1.0}
            maxPercentage={maxPct}
          />
        ))}
      </div>
    </SceneShell>
  );
};
