import { describe, it, expect } from 'vitest';
import { computeFrom, computeStagger, computeYoyo, computeTextReveal } from './primitives';
import { linear } from './easings';

describe('computeFrom', () => {
  const FPS = 30;

  it('at frame=0 with delay=0, duration=0.5 -> returns from-state', () => {
    const r = computeFrom(0, FPS, { duration: 0.5, ease: linear, from: { x: -30, opacity: 0 } });
    expect(r.x).toBeCloseTo(-30);
    expect(r.opacity).toBeCloseTo(0);
  });

  it('at frame=duration*fps -> returns to-state (defaults: x=0, opacity=1)', () => {
    const r = computeFrom(15, FPS, { duration: 0.5, ease: linear, from: { x: -30, opacity: 0 } });
    expect(r.x).toBeCloseTo(0);
    expect(r.opacity).toBeCloseTo(1);
  });

  it('halfway through with linear easing -> halfway interpolated', () => {
    const r = computeFrom(7.5, FPS, { duration: 0.5, ease: linear, from: { x: -30, opacity: 0 } });
    expect(r.x).toBeCloseTo(-15);
    expect(r.opacity).toBeCloseTo(0.5);
  });

  it('respects delay -- before delay -> still at from-state', () => {
    const r = computeFrom(5, FPS, { delay: 0.5, duration: 0.5, ease: linear, from: { x: -30, opacity: 0 } });
    expect(r.x).toBeCloseTo(-30);
    expect(r.opacity).toBeCloseTo(0);
  });

  it('all transform fields default sensibly: scale to 1, rotate to 0', () => {
    const r = computeFrom(0, FPS, { duration: 0.5, ease: linear, from: {} });
    expect(r.x).toBeCloseTo(0);
    expect(r.y).toBeCloseTo(0);
    expect(r.opacity).toBeCloseTo(1);
    expect(r.scale).toBeCloseTo(1);
    expect(r.rotate).toBeCloseTo(0);
  });
});

describe('computeStagger', () => {
  const FPS = 30;

  it('index=0 -> starts at delay (no extra offset)', () => {
    const r = computeStagger(0, FPS, {
      stagger: 0.1, index: 0,
      delay: 0, duration: 0.5, ease: linear,
      from: { opacity: 0 },
    });
    expect(r.opacity).toBeCloseTo(0);
  });

  it('index=2 with stagger=0.1 -> start delayed by 0.2s extra', () => {
    // At frame=3 (=0.1s) with stagger=0.1*2=0.2s extra delay -> still at from-state
    const r = computeStagger(3, FPS, {
      stagger: 0.1, index: 2,
      delay: 0, duration: 0.5, ease: linear,
      from: { opacity: 0 },
    });
    expect(r.opacity).toBeCloseTo(0);
  });

  it('index=2 with stagger=0.1 reaches midpoint at frame=(0.2+0.25)*30 = 13.5', () => {
    const r = computeStagger(13.5, FPS, {
      stagger: 0.1, index: 2,
      delay: 0, duration: 0.5, ease: linear,
      from: { opacity: 0 },
    });
    expect(r.opacity).toBeCloseTo(0.5, 1);
  });
});

describe('computeYoyo', () => {
  const FPS = 30;

  it('at frame=0 (before delay) -> returns base', () => {
    expect(computeYoyo(0, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.0);
  });

  it('at midway of forward leg -> returns midpoint between base and to', () => {
    expect(computeYoyo(7.5, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.05, 2);
  });

  it('at end of forward leg -> returns to', () => {
    expect(computeYoyo(15, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.1);
  });

  it('at end of return leg -> returns base', () => {
    expect(computeYoyo(30, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.0);
  });

  it('after both legs -> stays at base', () => {
    expect(computeYoyo(60, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.0);
  });
});

describe('computeTextReveal', () => {
  const FPS = 30;
  const TEXT = '埃克塞特数学俱乐部挑战赛'; // 11 CN chars

  it('at frame=0 with delay=0 -> no chars visible', () => {
    const r = computeTextReveal(0, FPS, { text: TEXT, durationPerChar: 0.04, ease: linear });
    expect(r.visibleChars).toBe(0);
    expect(r.visibleText).toBe('');
  });

  it('after total reveal time -> all chars visible', () => {
    const totalSeconds = TEXT.length * 0.04;
    const r = computeTextReveal(totalSeconds * FPS + 1, FPS, { text: TEXT, durationPerChar: 0.04, ease: linear });
    expect(r.visibleChars).toBe(TEXT.length);
    expect(r.visibleText).toBe(TEXT);
  });

  it('halfway -> roughly half chars visible', () => {
    const totalSeconds = TEXT.length * 0.04;
    const r = computeTextReveal(totalSeconds * FPS / 2, FPS, { text: TEXT, durationPerChar: 0.04, ease: linear });
    expect(r.visibleChars).toBeGreaterThanOrEqual(Math.floor(TEXT.length / 2) - 1);
    expect(r.visibleChars).toBeLessThanOrEqual(Math.ceil(TEXT.length / 2) + 1);
  });

  it('respects delay', () => {
    const r = computeTextReveal(5, FPS, { text: TEXT, delay: 1.0, durationPerChar: 0.04, ease: linear });
    expect(r.visibleChars).toBe(0);
  });
});
