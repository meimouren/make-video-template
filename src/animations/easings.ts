// GSAP-equivalent easing functions.
// All signatures: (t: number) => number, where t in [0, 1].
// Formulas ported from https://github.com/greensock/GSAP EasePack.js for numeric parity.

export type EasingFn = (t: number) => number;

export const linear: EasingFn = (t) => t;

// power1 = quadratic (t^2)
export const power1In: EasingFn    = (t) => t * t;
export const power1Out: EasingFn   = (t) => 1 - (1 - t) * (1 - t);
export const power1InOut: EasingFn = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// power2 = cubic (t^3)
export const power2In: EasingFn    = (t) => t * t * t;
export const power2Out: EasingFn   = (t) => 1 - Math.pow(1 - t, 3);
export const power2InOut: EasingFn = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// power3 = quartic (t^4) - DEFAULT for entrance animations
export const power3In: EasingFn    = (t) => t * t * t * t;
export const power3Out: EasingFn   = (t) => 1 - Math.pow(1 - t, 4);
export const power3InOut: EasingFn = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2);

// power4 = quintic (t^5)
export const power4In: EasingFn    = (t) => t ** 5;
export const power4Out: EasingFn   = (t) => 1 - Math.pow(1 - t, 5);
export const power4InOut: EasingFn = (t) => (t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2);

// expo
export const expoIn: EasingFn  = (t) => (t === 0 ? 0 : Math.pow(2, 10 * t - 10));
export const expoOut: EasingFn = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
export const expoInOut: EasingFn = (t) =>
  t === 0 ? 0
  : t === 1 ? 1
  : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2
  : (2 - Math.pow(2, -20 * t + 10)) / 2;

// sine
export const sineIn: EasingFn    = (t) => 1 - Math.cos((t * Math.PI) / 2);
export const sineOut: EasingFn   = (t) => Math.sin((t * Math.PI) / 2);
export const sineInOut: EasingFn = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

// back - overshoot. Default 1.7 matches GSAP's back.out().
export const back = (overshoot: number = 1.7) => {
  const c1 = overshoot;
  const c3 = c1 + 1;
  const c2 = c1 * 1.525;
  return {
    in:  ((t: number) => c3 * t * t * t - c1 * t * t) as EasingFn,
    out: ((t: number) => 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)) as EasingFn,
    inOut: ((t: number) =>
      t < 0.5
        ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
        : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2) as EasingFn,
  };
};

// elastic
export const elastic = (amplitude: number = 1, period: number = 0.3) => {
  const p = period;
  const a = amplitude;
  const s = (p / (2 * Math.PI)) * Math.asin(1 / a);
  return {
    in: ((t: number) =>
      t === 0
        ? 0
        : t === 1
        ? 1
        : -(a * Math.pow(2, 10 * (t - 1)) * Math.sin(((t - 1 - s) * (2 * Math.PI)) / p))) as EasingFn,
    out: ((t: number) =>
      t === 0
        ? 0
        : t === 1
        ? 1
        : a * Math.pow(2, -10 * t) * Math.sin(((t - s) * (2 * Math.PI)) / p) + 1) as EasingFn,
    inOut: ((t: number) => {
      if (t === 0) return 0;
      if (t === 1) return 1;
      const tt = t * 2;
      if (tt < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (tt - 1)) * Math.sin(((tt - 1 - s) * (2 * Math.PI)) / p));
      }
      return a * Math.pow(2, -10 * (tt - 1)) * Math.sin(((tt - 1 - s) * (2 * Math.PI)) / p) * 0.5 + 1;
    }) as EasingFn,
  };
};
