import React from 'react';
import { SceneShell, MetaChip } from '../components/SceneShell';
import { useStagger } from '../animations/primitives';
import { back, power3Out } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import {
  D0_CAPTION,
  D1_BODY,
  D2_SUBTITLE,
  D3_TITLE,
  FONT_BODY_EN,
  FONT_CN,
  tokenToStyle,
} from '../theme/typography';

interface CalendarEvent {
  date: string;
  event: string;
}

interface CalendarSceneProps {
  title: string;
  subtitle: string;
  events: CalendarEvent[];
}

const TimelineRow: React.FC<{
  event: CalendarEvent;
  index: number;
  delay: number;
  isLast: boolean;
  highlight: boolean;
}> = ({ event, index, delay, isLast, highlight }) => {
  const dot = useStagger({
    stagger: 0.18,
    index,
    delay,
    duration: 0.55,
    ease: back(1.5).out,
    from: { scale: 0 },
  });
  const card = useStagger({
    stagger: 0.18,
    index,
    delay: delay + 0.1,
    duration: 0.55,
    ease: power3Out,
    from: { x: 18, opacity: 0 },
  });
  const line = useStagger({
    stagger: 0.18,
    index,
    delay: delay + 0.2,
    duration: 0.45,
    ease: power3Out,
    from: { scale: 0 },
  });

  return (
    <div style={{ display: 'flex', gap: 26, position: 'relative', flex: 1, minHeight: 0 }}>
      {/* Dot + connector */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 36 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 999,
            background: highlight ? BRAND.yellow : BRAND.white,
            border: highlight ? `4px solid ${BRAND.yellow}` : `4px solid ${BRAND.divider}`,
            transform: `scale(${dot.scale})`,
            boxShadow: highlight ? `0 0 24px ${BRAND.yellow}aa` : 'none',
            marginTop: 6,
          }}
        />
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: 4,
              background: highlight ? BRAND.yellow : BRAND.divider,
              opacity: highlight ? 0.6 : 1,
              marginTop: 8,
              transform: `scaleY(${line.scale})`,
              transformOrigin: 'top',
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        style={{
          flex: 1,
          padding: '20px 24px',
          marginBottom: isLast ? 0 : 18,
          background: highlight ? `${BRAND.yellow}14` : BRAND.cardBg,
          border: highlight ? `2px solid ${BRAND.yellow}` : `1px solid ${BRAND.cardBorder}`,
          borderRadius: 12,
          transform: `translateX(${card.x}px)`,
          opacity: card.opacity,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 6 }}>
          <div
            style={{
              fontFamily: FONT_BODY_EN,
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: '0.1em',
              color: highlight ? BRAND.yellow : BRAND.textLight,
            }}
          >
            {event.date}
          </div>
          {highlight && (
            <div
              style={{
                fontFamily: FONT_CN,
                fontSize: 18,
                color: BRAND.black,
                background: BRAND.yellow,
                fontWeight: 800,
                padding: '2px 10px',
                borderRadius: 4,
                letterSpacing: '0.1em',
              }}
            >
              重点关注
            </div>
          )}
        </div>
        <div
          style={{
            ...tokenToStyle(D1_BODY),
            fontFamily: FONT_CN,
            color: BRAND.white,
            fontWeight: highlight ? 700 : 500,
          }}
        >
          {event.event}
        </div>
      </div>
    </div>
  );
};

export const CalendarScene: React.FC<CalendarSceneProps> = ({ title, subtitle, events }) => {
  const total = events.length;
  const upcoming = events[0]?.event ?? '';
  const last = events[events.length - 1]?.date ?? '';

  const metaChips: MetaChip[] = [
    { label: 'EVENTS', value: `${total}`, accent: DATA.blue },
    { label: 'UPCOMING', value: upcoming.length > 8 ? upcoming.slice(0, 8) + '…' : upcoming, accent: BRAND.yellow },
    { label: 'PERIOD', value: last, accent: DATA.green },
  ];

  return (
    <SceneShell
      eyebrow="CALENDAR · 赛事日历"
      title={title}
      subtitle={subtitle}
      metaChips={metaChips}
      footer="数据来源 · 翰林有方"
    >
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        {events.map((e, i) => (
          <TimelineRow
            key={e.date + i}
            event={e}
            index={i}
            delay={1.0}
            isLast={i === events.length - 1}
            highlight={i === 0}
          />
        ))}
      </div>
    </SceneShell>
  );
};
