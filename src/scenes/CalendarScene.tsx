import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { TimelineNode } from '../components/TimelineNode';

interface CalendarEvent {
  date: string;
  event: string;
}

interface CalendarSceneProps {
  title: string;
  subtitle: string;
  events: CalendarEvent[];
}

export const CalendarScene: React.FC<CalendarSceneProps> = ({ title, subtitle, events }) => {
  return (
    <SceneShell title={title} subtitle={subtitle}>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16 }}>
        {events.map((e, i) => (
          <TimelineNode
            key={e.date + i}
            date={e.date}
            event={e.event}
            index={i}
            delay={0.7}
            isLast={i === events.length - 1}
            // Highlight the upcoming event (typically the first item if data is sorted ascending)
            highlight={i === 0}
          />
        ))}
      </div>
    </SceneShell>
  );
};
