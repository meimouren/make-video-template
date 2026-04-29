import { useCurrentFrame, useVideoConfig } from 'remotion';
import { EasingFn, power3Out } from './easings';

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ---------- ChartDraw ----------
export interface ChartDrawConfig {
  delay?: number;
  duration: number;
  ease?: EasingFn;
}
export interface ChartDrawResult {
  progress: number;
  dashOffset: (totalLen: number) => number;
}

export function computeChartDraw(frame: number, fps: number, config: ChartDrawConfig): ChartDrawResult {
  const delay = config.delay ?? 0;
  const ease = config.ease ?? power3Out;
  const elapsed = frame / fps - delay;
  const t = clamp01(elapsed / config.duration);
  const progress = ease(t);
  return {
    progress,
    dashOffset: (totalLen: number) => totalLen * (1 - progress),
  };
}

export function useChartDraw(config: ChartDrawConfig): ChartDrawResult {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return computeChartDraw(frame, fps, config);
}

// ---------- NumberCount ----------
export interface NumberCountConfig {
  delay?: number;
  duration: number;
  from: number;
  to: number;
  ease?: EasingFn;
  decimals?: number;
}

export function computeNumberCount(frame: number, fps: number, config: NumberCountConfig): number {
  const delay = config.delay ?? 0;
  const ease = config.ease ?? power3Out;
  const decimals = config.decimals ?? 0;
  const elapsed = frame / fps - delay;
  const t = clamp01(elapsed / config.duration);
  const v = lerp(config.from, config.to, ease(t));
  const factor = Math.pow(10, decimals);
  return Math.round(v * factor) / factor;
}

export function useNumberCount(config: NumberCountConfig): number {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return computeNumberCount(frame, fps, config);
}

// ---------- BarGrow ----------
export interface BarGrowConfig {
  delay?: number;
  duration: number;
  index: number;
  stagger?: number;        // default 0.1
  ease?: EasingFn;         // default power3Out
}

export function computeBarGrow(frame: number, fps: number, config: BarGrowConfig): number {
  const baseDelay = config.delay ?? 0;
  const stagger = config.stagger ?? 0.1;
  const ease = config.ease ?? power3Out;
  const totalDelay = baseDelay + stagger * config.index;
  const elapsed = frame / fps - totalDelay;
  const t = clamp01(elapsed / config.duration);
  return ease(t);
}

export function useBarGrow(config: BarGrowConfig): number {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return computeBarGrow(frame, fps, config);
}
