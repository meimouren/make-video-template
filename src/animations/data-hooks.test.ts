import { describe, it, expect } from 'vitest';
import { computeChartDraw, computeNumberCount, computeBarGrow } from './data-hooks';
import { linear } from './easings';

describe('computeChartDraw', () => {
  const FPS = 30;

  it('before delay -> progress=0, dashOffset = totalLen', () => {
    const r = computeChartDraw(0, FPS, { delay: 0.5, duration: 1.4, ease: linear });
    expect(r.progress).toBeCloseTo(0);
    expect(r.dashOffset(100)).toBeCloseTo(100);
  });

  it('at end -> progress=1, dashOffset=0', () => {
    const r = computeChartDraw((0.5 + 1.4) * FPS, FPS, { delay: 0.5, duration: 1.4, ease: linear });
    expect(r.progress).toBeCloseTo(1);
    expect(r.dashOffset(100)).toBeCloseTo(0);
  });

  it('halfway -> progress=0.5, dashOffset = totalLen * 0.5', () => {
    const r = computeChartDraw((0.5 + 0.7) * FPS, FPS, { delay: 0.5, duration: 1.4, ease: linear });
    expect(r.progress).toBeCloseTo(0.5, 2);
    expect(r.dashOffset(100)).toBeCloseTo(50, 1);
  });
});

describe('computeNumberCount', () => {
  const FPS = 30;

  it('before delay -> returns from value', () => {
    expect(computeNumberCount(0, FPS, { delay: 0.5, duration: 1.0, from: 0, to: 100, ease: linear })).toBeCloseTo(0);
  });

  it('at end -> returns to value exactly', () => {
    expect(computeNumberCount((0.5 + 1.0) * FPS, FPS, { delay: 0.5, duration: 1.0, from: 0, to: 100, ease: linear })).toBeCloseTo(100);
  });

  it('halfway with linear -> midpoint', () => {
    expect(computeNumberCount((0.5 + 0.5) * FPS, FPS, { delay: 0.5, duration: 1.0, from: 0, to: 100, ease: linear })).toBeCloseTo(50, 1);
  });

  it('decimals=0 -> integer rounded', () => {
    const v = computeNumberCount(15, FPS, { duration: 1.0, from: 0, to: 100, ease: linear, decimals: 0 });
    expect(Number.isInteger(v)).toBe(true);
  });

  it('decimals=2 -> preserves at most 2 decimal places', () => {
    const v = computeNumberCount(15, FPS, { duration: 1.0, from: 0, to: 100, ease: linear, decimals: 2 });
    expect(v.toString().split('.')[1]?.length ?? 0).toBeLessThanOrEqual(2);
  });
});

describe('computeBarGrow', () => {
  const FPS = 30;

  it('index=0 starts at frame=delay*fps', () => {
    expect(computeBarGrow(0, FPS, { delay: 0, duration: 0.5, index: 0, stagger: 0.1, ease: linear })).toBeCloseTo(0);
  });

  it('index=2 with stagger=0.1 -> effective delay 0.2s; at frame=0 still 0', () => {
    expect(computeBarGrow(0, FPS, { delay: 0, duration: 0.5, index: 2, stagger: 0.1, ease: linear })).toBeCloseTo(0);
  });

  it('index=0 at end -> 1', () => {
    expect(computeBarGrow(15, FPS, { delay: 0, duration: 0.5, index: 0, stagger: 0.1, ease: linear })).toBeCloseTo(1);
  });

  it('index=2 reaches end at frame = (0.2 + 0.5) * 30 = 21', () => {
    expect(computeBarGrow(21, FPS, { delay: 0, duration: 0.5, index: 2, stagger: 0.1, ease: linear })).toBeCloseTo(1);
  });
});
