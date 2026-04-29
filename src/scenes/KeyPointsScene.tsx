import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { KeyValueRow } from '../components/KeyValueRow';

interface KeyPoint {
  label: string;
  value: string;
}

interface KeyPointsSceneProps {
  title: string;
  subtitle: string;
  keyPoints: KeyPoint[];
}

export const KeyPointsScene: React.FC<KeyPointsSceneProps> = ({ title, subtitle, keyPoints }) => {
  return (
    <SceneShell title={title} subtitle={subtitle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 12 }}>
        {keyPoints.map((kp, i) => (
          <KeyValueRow key={kp.label + i} label={kp.label} value={kp.value} index={i} delay={0.7} />
        ))}
      </div>
    </SceneShell>
  );
};
