import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { StepNode } from '../components/StepNode';

interface PathwayStep {
  stage: string;
  participants: string;
  desc: string;
}

interface ProgressionSceneProps {
  title: string;
  subtitle: string;
  pathway: PathwayStep[];
}

export const ProgressionScene: React.FC<ProgressionSceneProps> = ({
  title,
  subtitle,
  pathway,
}) => {
  return (
    <SceneShell title={title} subtitle={subtitle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12 }}>
        {pathway.map((step, i) => (
          <StepNode
            key={step.stage + i}
            num={String(i + 1).padStart(2, '0')}
            title={step.stage}
            desc={step.desc}
            metric={step.participants}
            index={i}
            delay={0.7}
            totalSteps={pathway.length}
          />
        ))}
      </div>
    </SceneShell>
  );
};
