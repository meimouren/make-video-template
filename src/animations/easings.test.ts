import { describe, it, expect } from 'vitest';
import {
  linear,
  power1In, power1Out, power1InOut,
  power2In, power2Out, power2InOut,
  power3In, power3Out, power3InOut,
  power4In, power4Out, power4InOut,
  expoIn, expoOut, expoInOut,
  sineIn, sineOut, sineInOut,
  back,
  elastic,
} from './easings';

const NEAR = 1e-9;

describe('easings — boundary values', () => {
  // Every curve must satisfy fn(0) ~ 0 and fn(1) ~ 1
  const curves = {
    linear,
    power1In, power1Out, power1InOut,
    power2In, power2Out, power2InOut,
    power3In, power3Out, power3InOut,
    power4In, power4Out, power4InOut,
    expoIn, expoOut, expoInOut,
    sineIn, sineOut, sineInOut,
  };
  for (const [name, fn] of Object.entries(curves)) {
    it(`${name}(0) ~ 0 and ${name}(1) ~ 1`, () => {
      expect(Math.abs(fn(0))).toBeLessThan(NEAR);
      expect(Math.abs(fn(1) - 1)).toBeLessThan(NEAR);
    });
  }
});

describe('easings — back', () => {
  it('back.out(0) ~ 0 and back.out(1) ~ 1', () => {
    const b = back();
    expect(Math.abs(b.out(0))).toBeLessThan(NEAR);
    expect(Math.abs(b.out(1) - 1)).toBeLessThan(NEAR);
  });
  it('back.out overshoots above 1 in mid-range', () => {
    const b = back(1.7);
    // back.out peaks above 1 around t~0.65 (overshoot signature)
    const peakRegion = [0.55, 0.6, 0.65, 0.7].map(b.out);
    expect(peakRegion.some((v) => v > 1)).toBe(true);
  });
});

describe('easings — elastic', () => {
  it('elastic.out(0) ~ 0 and elastic.out(1) ~ 1', () => {
    const e = elastic();
    expect(Math.abs(e.out(0))).toBeLessThan(NEAR);
    expect(Math.abs(e.out(1) - 1)).toBeLessThan(NEAR);
  });
});

describe('easings — monotonicity (Out variants)', () => {
  // Out variants without overshoot should be monotonically increasing
  const monotonic = { power1Out, power2Out, power3Out, power4Out, expoOut, sineOut };
  for (const [name, fn] of Object.entries(monotonic)) {
    it(`${name} is monotonically increasing on [0, 1]`, () => {
      let prev = -Infinity;
      for (let t = 0; t <= 1; t += 0.05) {
        const v = fn(t);
        expect(v).toBeGreaterThanOrEqual(prev - NEAR);
        prev = v;
      }
    });
  }
});

describe('easings — power3Out specific reference values', () => {
  // Sanity: power3Out(0.5) = 1 - (0.5)^4 = 0.9375
  it('power3Out(0.5) = 0.9375', () => {
    expect(power3Out(0.5)).toBeCloseTo(0.9375, 6);
  });
});
