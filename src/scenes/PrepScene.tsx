import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { StepNode } from '../components/StepNode';

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface PrepSceneProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export const PrepScene: React.FC<PrepSceneProps> = ({ title, subtitle, steps }) => {
  return (
    <SceneShell title={title} subtitle={subtitle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12 }}>
        {steps.map((s, i) => (
          <StepNode
            key={s.num + i}
            num={s.num}
            title={s.title}
            desc={s.desc}
            index={i}
            delay={0.7}
          />
        ))}
      </div>
    </SceneShell>
  );
};
