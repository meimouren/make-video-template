import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Background } from '../components/Background';
import { SceneHeader } from '../components/SceneHeader';
import { useStagger, useFrom } from '../animations/primitives';
import { back, power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { FONT_HEAD_EN, FONT_CN } from '../theme/typography';

interface CalendarEvent {
  date: string;
  event: string;
}

interface CalendarSceneProps {
  title: string;
  subtitle: string;
  events: CalendarEvent[];
}

const DATE_COL = 260;
const CONNECTOR_COL = 40;
const ROW_GAP = 34;
const ROW_PAD_Y = 40;

const TimelineRow: React.FC<{
  event: CalendarEvent;
  index: number;
  delay: number;
  isLast: boolean;
}> = ({ event, index, delay, isLast }) => {
  const dot = useStagger({
    stagger: 0.16,
    index,
    delay,
    duration: 0.5,
    ease: back(1.5).out,
    from: { scale: 0 },
  });
  const text = useStagger({
    stagger: 0.16,
    index,
    delay: delay + 0.08,
    duration: 0.55,
    ease: power3Out,
    from: { x: 22, opacity: 0 },
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: ROW_GAP,
        borderBottom: isLast ? 'none' : `1.5px solid ${BRAND.divider}`,
        padding: `${ROW_PAD_Y}px 6px`,
      }}
    >
      {/* Date column — fixed width, single line */}
      <div
        style={{
          width: DATE_COL,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          transform: `translateX(${text.x}px)`,
          opacity: text.opacity,
        }}
      >
        <div
          style={{
            fontFamily: FONT_HEAD_EN,
            fontSize: 42,
            fontWeight: 900,
            color: BRAND.yellow,
            letterSpacing: '0.01em',
            lineHeight: 1.05,
            whiteSpace: 'nowrap',
          }}
        >
          {event.date}
        </div>
      </div>

      {/* Connector: dot (line drawn as continuous overlay by parent) */}
      <div
        style={{
          width: CONNECTOR_COL,
          flexShrink: 0,
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            background: BRAND.yellow,
            transform: `scale(${dot.scale})`,
          }}
        />
      </div>

      {/* Event text */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          transform: `translateX(${text.x}px)`,
          opacity: text.opacity,
        }}
      >
        <div style={{ fontFamily: FONT_CN, fontSize: 42, fontWeight: 600, color: BRAND.white, lineHeight: 1.35 }}>
          {event.event}
        </div>
      </div>
    </div>
  );
};

export const CalendarScene: React.FC<CalendarSceneProps> = ({ title, subtitle, events }) => {
  const line = useFrom({ delay: 0.9, duration: 0.6, ease: power3Out, from: { scale: 0 } });
  // Horizontal center of the connector column, measured from the rows' left edge.
  const lineLeft = DATE_COL + ROW_GAP + CONNECTOR_COL / 2;

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

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ position: 'relative' }}>
            {/* Continuous vertical line running through every dot */}
            <div
              style={{
                position: 'absolute',
                top: ROW_PAD_Y,
                bottom: ROW_PAD_Y,
                left: lineLeft - 1,
                width: 2,
                background: BRAND.yellow,
                transform: `scaleY(${line.scale})`,
                transformOrigin: 'top',
              }}
            />
            {events.map((e, i) => (
              <TimelineRow
                key={e.date + i}
                event={e}
                index={i}
                delay={0.8}
                isLast={i === events.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
