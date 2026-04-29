import { useCurrentFrame, useVideoConfig } from 'remotion';
import { EasingFn, power3Out, linear } from './easings';

// Default "to" state (animations interpolate FROM caller's `from` TO these defaults)
const DEFAULT_TO = { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// ---------- useFrom ----------
export interface FromState {
  x?: number;
  y?: number;
  opacity?: number;
  scale?: number;
  rotate?: number;
}

export interface FromConfig {
  delay?: number;       // seconds
  duration?: number;    // seconds, default 0.6
  ease?: EasingFn;      // default power3Out
  from: FromState;
}

export interface FromResult {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  rotate: number;
}

export function computeFrom(frame: number, fps: number, config: FromConfig): FromResult {
  const delay = config.delay ?? 0;
  const duration = config.duration ?? 0.6;
  const ease = config.ease ?? power3Out;

  const elapsed = frame / fps - delay;
  const t = clamp01(elapsed / duration);
  const e = ease(t);

  const from = config.from;
  return {
    x:       lerp(from.x       ?? DEFAULT_TO.x,       DEFAULT_TO.x,       e),
    y:       lerp(from.y       ?? DEFAULT_TO.y,       DEFAULT_TO.y,       e),
    opacity: lerp(from.opacity ?? DEFAULT_TO.opacity, DEFAULT_TO.opacity, e),
    scale:   lerp(from.scale   ?? DEFAULT_TO.scale,   DEFAULT_TO.scale,   e),
    rotate:  lerp(from.rotate  ?? DEFAULT_TO.rotate,  DEFAULT_TO.rotate,  e),
  };
}

export function useFrom(config: FromConfig): FromResult {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return computeFrom(frame, fps, config);
}

// ---------- useStagger ----------
export interface StaggerConfig extends Omit<FromConfig, 'delay'> {
  delay?: number;       // base delay (seconds), added to index*stagger
  stagger: number;      // seconds between siblings
  index: number;        // 0-based
}

export function computeStagger(frame: number, fps: number, config: StaggerConfig): FromResult {
  const baseDelay = config.delay ?? 0;
  const totalDelay = baseDelay + config.stagger * config.index;
  return computeFrom(frame, fps, {
    delay: totalDelay,
    duration: config.duration,
    ease: config.ease,
    from: config.from,
  });
}

export function useStagger(config: StaggerConfig): FromResult {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return computeStagger(frame, fps, config);
}

// ---------- useYoyo ----------
export interface YoyoConfig {
  delay?: number;
  duration: number;     // single one-way duration
  to: number;
  base?: number;        // default 1
  ease?: EasingFn;
}

export function computeYoyo(frame: number, fps: number, config: YoyoConfig): number {
  const delay = config.delay ?? 0;
  const base = config.base ?? 1;
  const ease = config.ease ?? power3Out;
  const elapsed = frame / fps - delay;

  if (elapsed <= 0) return base;
  if (elapsed >= 2 * config.duration) return base;

  // Forward leg
  if (elapsed < config.duration) {
    const t = elapsed / config.duration;
    return lerp(base, config.to, ease(t));
  }
  // Return leg
  const t = (elapsed - config.duration) / config.duration;
  return lerp(config.to, base, ease(t));
}

export function useYoyo(config: YoyoConfig): number {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return computeYoyo(frame, fps, config);
}

// ---------- useTextReveal ----------
export interface TextRevealConfig {
  text: string;
  delay?: number;
  durationPerChar?: number;  // seconds, default 0.04
  ease?: EasingFn;           // default linear
}

export interface TextRevealResult {
  visibleChars: number;
  visibleText: string;
}

export function computeTextReveal(frame: number, fps: number, config: TextRevealConfig): TextRevealResult {
  const delay = config.delay ?? 0;
  const durPerChar = config.durationPerChar ?? 0.04;
  const ease = config.ease ?? linear;
  const totalDuration = config.text.length * durPerChar;

  const elapsed = frame / fps - delay;
  if (elapsed <= 0) return { visibleChars: 0, visibleText: '' };
  if (elapsed >= totalDuration) return { visibleChars: config.text.length, visibleText: config.text };

  const t = clamp01(elapsed / totalDuration);
  const visibleChars = Math.min(config.text.length, Math.floor(ease(t) * config.text.length));
  return { visibleChars, visibleText: config.text.slice(0, visibleChars) };
}

export function useTextReveal(config: TextRevealConfig): TextRevealResult {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return computeTextReveal(frame, fps, config);
}
