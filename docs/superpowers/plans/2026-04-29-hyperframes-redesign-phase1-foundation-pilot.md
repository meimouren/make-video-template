# HyperFrames-Style Redesign — Phase 1 (Foundation + Pilot) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the theme + animation helper layer (`src/theme/`, `src/animations/`) and ship a pilot `OpeningScene` rewrite that validates HyperFrames-style direction before committing to the full 19-scene rollout (Phase 2).

**Architecture:** Pure helper layers on top of Remotion — `theme/` exports design tokens, `animations/` exports GSAP-equivalent easings + frame-pure compute functions wrapped in thin React hooks. Legacy components/scenes archive to `_legacy/` so old videos can still be re-rendered. Pilot rewrites only `OpeningScene.tsx` and renders a 5-second sample mp4 for user validation.

**Tech Stack:** Remotion 4.0 · React 19 · TypeScript 6 · vitest · @remotion/google-fonts

**Reference design spec:** [`docs/superpowers/specs/2026-04-29-hyperframes-style-redesign-design.md`](../specs/2026-04-29-hyperframes-style-redesign-design.md)

**Phase 2 plan (D3-D7 rollout):** Will be authored after Task 20 user validation gate passes, so it can incorporate any helper-API adjustments the pilot reveals.

---

## File Structure

### Created in this phase

| Path | Responsibility |
|------|---------------|
| `src/theme/colors.ts` | `BRAND` + `DATA` color token exports |
| `src/theme/typography.ts` | Type-scale tokens (D0-D5) + font-family constants |
| `src/theme/index.ts` | Barrel re-export |
| `src/animations/easings.ts` | Pure easing functions matching GSAP curves |
| `src/animations/easings.test.ts` | Boundary value tests for every curve |
| `src/animations/primitives.ts` | `computeFrom`/`useFrom`, `computeStagger`/`useStagger`, `computeYoyo`/`useYoyo`, `computeTextReveal`/`useTextReveal` |
| `src/animations/primitives.test.ts` | Frame-boundary tests on `compute*` functions |
| `src/animations/data-hooks.ts` | `computeChartDraw`/`useChartDraw`, `computeNumberCount`/`useNumberCount`, `computeBarGrow`/`useBarGrow` |
| `src/animations/data-hooks.test.ts` | Tests on data hook compute functions |
| `src/animations/index.ts` | Barrel re-export |
| `src/components/_legacy/` | Archive of all 14 current component files |
| `src/scenes/_legacy/` | Archive of all 19 current scene files |
| `vitest.config.ts` | Test runner config (jsdom env) |
| `out/pilot-opening-scene-5s.mp4` | Pilot render artifact |

### Modified in this phase

| Path | Reason |
|------|-------|
| `package.json` | Add `@remotion/google-fonts`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, plus `test` script |
| `src/fonts.ts` | Replace system stack with Libre Baskerville + Libre Franklin via `@remotion/google-fonts` |
| `src/AMCVideo.tsx` | (a) Update imports to `_legacy/` paths after archive; (b) at pilot step, route `opening-chart` type to new `OpeningScene` v2 |
| `src/scenes/OpeningScene.tsx` | New HF-style v2 implementation (the pilot) |

### Design decision: split pure compute fns from React hooks

Each animation hook is a 3-line wrapper around a pure `compute*` function that takes `(frame, fps, config)`. Tests target the `compute*` functions directly — no React renderer mock needed. This keeps tests fast and true to the math.

```typescript
// pattern (used throughout animations/)
export function computeX(frame: number, fps: number, config: XConfig): XResult { /* pure math */ }

export function useX(config: XConfig): XResult {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return computeX(frame, fps, config);
}
```

---

## Tasks

### Task 1: Install dependencies + test infrastructure

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`

- [ ] **Step 1: Install runtime + test dependencies**

```bash
cd amc-video
npm install --save @remotion/google-fonts
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom @types/jsdom
```

- [ ] **Step 2: Add scripts to `package.json`**

In the `"scripts"` block, add (alongside existing scripts):

```json
"test": "vitest run",
"test:watch": "vitest",
"typecheck": "tsc --noEmit"
```

- [ ] **Step 3: Create `vitest.config.ts` at repo root**

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
  },
});
```

- [ ] **Step 4: Verify install**

```bash
npx vitest --version
npm ls @remotion/google-fonts
```

Expected: vitest version printed, `@remotion/google-fonts` listed in dependency tree.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json vitest.config.ts
git commit -m "chore: add @remotion/google-fonts + vitest dev deps"
```

---

### Task 2: Create `src/theme/colors.ts`

**Files:**
- Create: `src/theme/colors.ts`

- [ ] **Step 1: Write the file**

```typescript
// Single source of truth for visual color tokens.
// BRAND — used everywhere except inside <svg> chart elements
// DATA  — only allowed on SVG fill/stroke attributes for chart series

export const BRAND = {
  black: '#000000',
  yellow: '#FFD600',
  white: '#FFFFFF',
  textLight: '#999999',
  divider: '#333333',
  cardBg: 'rgba(255,255,255,0.04)',
  cardBorder: 'rgba(255,255,255,0.10)',
} as const;

export const DATA = {
  red:    '#A41034',
  blue:   '#116AB0',
  green:  '#4ADE80',
  orange: '#F59E0B',
} as const;

export type BrandColor = keyof typeof BRAND;
export type DataColor = keyof typeof DATA;
```

- [ ] **Step 2: Typecheck**

```bash
npm run typecheck
```

Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/theme/colors.ts
git commit -m "feat: add theme/colors with BRAND + DATA token exports"
```

---

### Task 3: Create `src/theme/typography.ts`

**Files:**
- Create: `src/theme/typography.ts`

- [ ] **Step 1: Write the file**

```typescript
// Type-scale tokens. Sizes target 1080×1920 vertical canvas at 30fps.
// Floor: body ≥36px, headline ≥72px (per ~/.claude/memory/feedback_video_mobile_typography.md)

export interface TypeToken {
  fontSize: number;        // px
  lineHeight: number;      // unitless multiplier
  letterSpacing: string;   // CSS letter-spacing value
}

export const D5_DISPLAY:   TypeToken = { fontSize: 112, lineHeight: 1.0,  letterSpacing: '-0.02em'  };
export const D4_HEADLINE:  TypeToken = { fontSize:  84, lineHeight: 1.08, letterSpacing: '-0.015em' };
export const D3_TITLE:     TypeToken = { fontSize:  60, lineHeight: 1.15, letterSpacing: '-0.01em'  };
export const D2_SUBTITLE:  TypeToken = { fontSize:  42, lineHeight: 1.3,  letterSpacing: '0'        };
export const D1_BODY:      TypeToken = { fontSize:  36, lineHeight: 1.7,  letterSpacing: '0'        };
export const D0_CAPTION:   TypeToken = { fontSize:  26, lineHeight: 1.5,  letterSpacing: '0'        };

export const FONT_HEAD_EN = '"Libre Baskerville", serif';
export const FONT_BODY_EN = '"Libre Franklin", sans-serif';
export const FONT_CN      = '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';

// Helper: spread a token directly into a style object
export const tokenToStyle = (t: TypeToken): React.CSSProperties => ({
  fontSize: t.fontSize,
  lineHeight: t.lineHeight,
  letterSpacing: t.letterSpacing,
});
```

- [ ] **Step 2: Typecheck**

```bash
npm run typecheck
```

Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/theme/typography.ts
git commit -m "feat: add theme/typography with D0-D5 type-scale tokens"
```

---

### Task 4: Rewrite `src/fonts.ts` to load Google Fonts

**Files:**
- Modify: `src/fonts.ts`

- [ ] **Step 1: Replace file content**

```typescript
// Loaded fonts available in Remotion render.
// FONT_FAMILY_* re-exports preserved for backwards compatibility with legacy components.

import { loadFont as loadBaskerville } from '@remotion/google-fonts/LibreBaskerville';
import { loadFont as loadFranklin } from '@remotion/google-fonts/LibreFranklin';

loadBaskerville();
loadFranklin();

// New canonical aliases (matches theme/typography.ts naming)
export const FONT_HEAD_EN = '"Libre Baskerville", serif';
export const FONT_BODY_EN = '"Libre Franklin", sans-serif';
export const FONT_CN      = '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';

// Backwards compatible exports — legacy components import these names
export const FONT_FAMILY_CN = FONT_CN;
export const FONT_FAMILY_EN = FONT_BODY_EN;
```

- [ ] **Step 2: Typecheck**

```bash
npm run typecheck
```

Expected: 0 errors.

- [ ] **Step 3: Smoke-test font loading**

```bash
npx remotion studio src/index.ts
```

Open in browser, navigate to any composition (legacy still wired). Confirm no font-loading errors in console. Quit studio.

- [ ] **Step 4: Commit**

```bash
git add src/fonts.ts
git commit -m "feat: load Libre Baskerville + Libre Franklin via @remotion/google-fonts"
```

---

### Task 5: Create `src/theme/index.ts` barrel

**Files:**
- Create: `src/theme/index.ts`

- [ ] **Step 1: Write the file**

```typescript
export * from './colors';
export * from './typography';
```

- [ ] **Step 2: Typecheck**

```bash
npm run typecheck
```

Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
git add src/theme/index.ts
git commit -m "feat: add theme barrel re-export"
```

---

### Task 6: Create `src/animations/easings.ts`

**Files:**
- Create: `src/animations/easings.ts`

- [ ] **Step 1: Write the file**

```typescript
// GSAP-equivalent easing functions.
// All signatures: (t: number) => number, where t ∈ [0, 1].
// Formulas ported from https://github.com/greensock/GSAP EasePack.js for numeric parity.

export type EasingFn = (t: number) => number;

export const linear: EasingFn = (t) => t;

// power1 = quadratic (t²)
export const power1In: EasingFn    = (t) => t * t;
export const power1Out: EasingFn   = (t) => 1 - (1 - t) * (1 - t);
export const power1InOut: EasingFn = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// power2 = cubic (t³)
export const power2In: EasingFn    = (t) => t * t * t;
export const power2Out: EasingFn   = (t) => 1 - Math.pow(1 - t, 3);
export const power2InOut: EasingFn = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// power3 = quartic (t⁴) — DEFAULT for entrance animations
export const power3In: EasingFn    = (t) => t * t * t * t;
export const power3Out: EasingFn   = (t) => 1 - Math.pow(1 - t, 4);
export const power3InOut: EasingFn = (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2);

// power4 = quintic (t⁵)
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

// back — overshoot. Default 1.7 matches GSAP's back.out().
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
  const s = p / (2 * Math.PI) * Math.asin(1 / a);
  return {
    in:  ((t: number) => t === 0 ? 0 : t === 1 ? 1 : -(a * Math.pow(2, 10 * (t - 1)) * Math.sin(((t - 1 - s) * (2 * Math.PI)) / p))) as EasingFn,
    out: ((t: number) => t === 0 ? 0 : t === 1 ? 1 : a * Math.pow(2, -10 * t) * Math.sin(((t - s) * (2 * Math.PI)) / p) + 1) as EasingFn,
    inOut: ((t: number) => {
      if (t === 0) return 0;
      if (t === 1) return 1;
      const tt = t * 2;
      if (tt < 1) return -0.5 * (a * Math.pow(2, 10 * (tt - 1)) * Math.sin(((tt - 1 - s) * (2 * Math.PI)) / p));
      return a * Math.pow(2, -10 * (tt - 1)) * Math.sin(((tt - 1 - s) * (2 * Math.PI)) / p) * 0.5 + 1;
    }) as EasingFn,
  };
};
```

- [ ] **Step 2: Typecheck**

```bash
npm run typecheck
```

Expected: 0 errors.

- [ ] **Step 3: Commit (impl only — tests come next task)**

```bash
git add src/animations/easings.ts
git commit -m "feat: add animations/easings with GSAP-equivalent curves"
```

---

### Task 7: Test `easings.ts` boundary values (TDD)

**Files:**
- Create: `src/animations/easings.test.ts`

- [ ] **Step 1: Write the test file**

```typescript
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
  // Every curve must satisfy fn(0) === 0 and fn(1) === 1
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
    it(`${name}(0) ≈ 0 and ${name}(1) ≈ 1`, () => {
      expect(Math.abs(fn(0))).toBeLessThan(NEAR);
      expect(Math.abs(fn(1) - 1)).toBeLessThan(NEAR);
    });
  }
});

describe('easings — back', () => {
  it('back.out(0) ≈ 0 and back.out(1) ≈ 1', () => {
    const b = back();
    expect(Math.abs(b.out(0))).toBeLessThan(NEAR);
    expect(Math.abs(b.out(1) - 1)).toBeLessThan(NEAR);
  });
  it('back.out overshoots above 1 in mid-range', () => {
    const b = back(1.7);
    // back.out peaks above 1 around t≈0.65 (overshoot signature)
    const peakRegion = [0.55, 0.6, 0.65, 0.7].map(b.out);
    expect(peakRegion.some((v) => v > 1)).toBe(true);
  });
});

describe('easings — elastic', () => {
  it('elastic.out(0) ≈ 0 and elastic.out(1) ≈ 1', () => {
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
```

- [ ] **Step 2: Run test — expect PASS (impl already written in Task 6)**

```bash
npm test -- easings
```

Expected: All tests pass.

- [ ] **Step 3: Commit**

```bash
git add src/animations/easings.test.ts
git commit -m "test: add boundary + monotonicity tests for easings"
```

---

### Task 8: Add `computeFrom` + `useFrom` (TDD)

**Files:**
- Create: `src/animations/primitives.ts`
- Create: `src/animations/primitives.test.ts`

- [ ] **Step 1: Write the failing test FIRST**

```typescript
// src/animations/primitives.test.ts
import { describe, it, expect } from 'vitest';
import { computeFrom } from './primitives';
import { linear } from './easings';

describe('computeFrom', () => {
  const FPS = 30;

  it('at frame=0 with delay=0, duration=0.5 → returns from-state', () => {
    const r = computeFrom(0, FPS, { duration: 0.5, ease: linear, from: { x: -30, opacity: 0 } });
    expect(r.x).toBeCloseTo(-30);
    expect(r.opacity).toBeCloseTo(0);
  });

  it('at frame=duration*fps → returns to-state (defaults: x=0, opacity=1)', () => {
    const r = computeFrom(15, FPS, { duration: 0.5, ease: linear, from: { x: -30, opacity: 0 } });
    expect(r.x).toBeCloseTo(0);
    expect(r.opacity).toBeCloseTo(1);
  });

  it('halfway through with linear easing → halfway interpolated', () => {
    const r = computeFrom(7.5, FPS, { duration: 0.5, ease: linear, from: { x: -30, opacity: 0 } });
    expect(r.x).toBeCloseTo(-15);
    expect(r.opacity).toBeCloseTo(0.5);
  });

  it('respects delay — before delay → still at from-state', () => {
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
```

- [ ] **Step 2: Run test — expect FAIL ("computeFrom not defined")**

```bash
npm test -- primitives
```

Expected: All tests fail with import error.

- [ ] **Step 3: Implement `computeFrom` + `useFrom`**

```typescript
// src/animations/primitives.ts
import { useCurrentFrame, useVideoConfig } from 'remotion';
import { EasingFn, power3Out } from './easings';

// Default "to" state (animations interpolate FROM caller's `from` TO these defaults)
const DEFAULT_TO = { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 };

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

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

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
```

- [ ] **Step 4: Run test — expect PASS**

```bash
npm test -- primitives
```

Expected: 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/animations/primitives.ts src/animations/primitives.test.ts
git commit -m "feat(animations): add computeFrom + useFrom primitive"
```

---

### Task 9: Add `computeStagger` + `useStagger` (TDD)

**Files:**
- Modify: `src/animations/primitives.ts`
- Modify: `src/animations/primitives.test.ts`

- [ ] **Step 1: Append failing test cases to `primitives.test.ts`**

```typescript
// Append to primitives.test.ts
import { computeStagger } from './primitives';

describe('computeStagger', () => {
  const FPS = 30;

  it('index=0 → starts at delay (no extra offset)', () => {
    const r = computeStagger(0, FPS, {
      stagger: 0.1, index: 0,
      delay: 0, duration: 0.5, ease: linear,
      from: { opacity: 0 },
    });
    expect(r.opacity).toBeCloseTo(0);
  });

  it('index=2 with stagger=0.1 → start delayed by 0.2s extra', () => {
    // At frame=3 (=0.1s) with stagger=0.1*2=0.2s extra delay → still at from-state
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
```

- [ ] **Step 2: Run test — expect FAIL**

```bash
npm test -- primitives
```

Expected: 3 new tests fail, original 5 still pass.

- [ ] **Step 3: Append implementation to `primitives.ts`**

```typescript
// Append to primitives.ts
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
```

- [ ] **Step 4: Run test — expect PASS**

```bash
npm test -- primitives
```

Expected: 8 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/animations/primitives.ts src/animations/primitives.test.ts
git commit -m "feat(animations): add computeStagger + useStagger"
```

---

### Task 10: Add `computeYoyo` + `useYoyo` (TDD)

**Files:**
- Modify: `src/animations/primitives.ts`
- Modify: `src/animations/primitives.test.ts`

- [ ] **Step 1: Append failing test cases**

```typescript
// Append to primitives.test.ts
import { computeYoyo } from './primitives';

describe('computeYoyo', () => {
  const FPS = 30;

  it('at frame=0 (before delay) → returns base', () => {
    expect(computeYoyo(0, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.0);
  });

  it('at midway of forward leg → returns midpoint between base and to', () => {
    expect(computeYoyo(7.5, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.05, 2);
  });

  it('at end of forward leg → returns to', () => {
    expect(computeYoyo(15, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.1);
  });

  it('at end of return leg → returns base', () => {
    expect(computeYoyo(30, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.0);
  });

  it('after both legs → stays at base', () => {
    expect(computeYoyo(60, FPS, { duration: 0.5, to: 1.1, base: 1.0, ease: linear })).toBeCloseTo(1.0);
  });
});
```

- [ ] **Step 2: Run test — expect FAIL**

```bash
npm test -- primitives
```

Expected: 5 new tests fail.

- [ ] **Step 3: Append implementation**

```typescript
// Append to primitives.ts
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
```

- [ ] **Step 4: Run test — expect PASS**

```bash
npm test -- primitives
```

Expected: 13 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/animations/primitives.ts src/animations/primitives.test.ts
git commit -m "feat(animations): add computeYoyo + useYoyo"
```

---

### Task 11: Add `computeTextReveal` + `useTextReveal` (TDD)

**Files:**
- Modify: `src/animations/primitives.ts`
- Modify: `src/animations/primitives.test.ts`

- [ ] **Step 1: Append failing test cases**

```typescript
// Append to primitives.test.ts
import { computeTextReveal } from './primitives';

describe('computeTextReveal', () => {
  const FPS = 30;
  const TEXT = '埃克塞特数学俱乐部挑战赛'; // 11 CN chars

  it('at frame=0 with delay=0 → no chars visible', () => {
    const r = computeTextReveal(0, FPS, { text: TEXT, durationPerChar: 0.04, ease: linear });
    expect(r.visibleChars).toBe(0);
    expect(r.visibleText).toBe('');
  });

  it('after total reveal time → all chars visible', () => {
    const totalSeconds = TEXT.length * 0.04;
    const r = computeTextReveal(totalSeconds * FPS + 1, FPS, { text: TEXT, durationPerChar: 0.04, ease: linear });
    expect(r.visibleChars).toBe(TEXT.length);
    expect(r.visibleText).toBe(TEXT);
  });

  it('halfway → roughly half chars visible', () => {
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
```

- [ ] **Step 2: Run test — expect FAIL**

```bash
npm test -- primitives
```

Expected: 4 new tests fail.

- [ ] **Step 3: Append implementation**

```typescript
// Append to primitives.ts
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
```

Note: also add `import { linear } from './easings';` at the top of `primitives.ts` if not already imported.

- [ ] **Step 4: Run test — expect PASS**

```bash
npm test -- primitives
```

Expected: 17 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/animations/primitives.ts src/animations/primitives.test.ts
git commit -m "feat(animations): add computeTextReveal + useTextReveal"
```

---

### Task 12: Create `data-hooks.ts` with `useChartDraw` (TDD)

**Files:**
- Create: `src/animations/data-hooks.ts`
- Create: `src/animations/data-hooks.test.ts`

- [ ] **Step 1: Write the failing test**

```typescript
// src/animations/data-hooks.test.ts
import { describe, it, expect } from 'vitest';
import { computeChartDraw } from './data-hooks';
import { linear } from './easings';

describe('computeChartDraw', () => {
  const FPS = 30;

  it('before delay → progress=0, dashOffset = totalLen', () => {
    const r = computeChartDraw(0, FPS, { delay: 0.5, duration: 1.4, ease: linear });
    expect(r.progress).toBeCloseTo(0);
    expect(r.dashOffset(100)).toBeCloseTo(100);
  });

  it('at end → progress=1, dashOffset=0', () => {
    const r = computeChartDraw((0.5 + 1.4) * FPS, FPS, { delay: 0.5, duration: 1.4, ease: linear });
    expect(r.progress).toBeCloseTo(1);
    expect(r.dashOffset(100)).toBeCloseTo(0);
  });

  it('halfway → progress=0.5, dashOffset = totalLen * 0.5', () => {
    const r = computeChartDraw((0.5 + 0.7) * FPS, FPS, { delay: 0.5, duration: 1.4, ease: linear });
    expect(r.progress).toBeCloseTo(0.5, 2);
    expect(r.dashOffset(100)).toBeCloseTo(50, 1);
  });
});
```

- [ ] **Step 2: Run — expect FAIL**

```bash
npm test -- data-hooks
```

- [ ] **Step 3: Implement**

```typescript
// src/animations/data-hooks.ts
import { useCurrentFrame, useVideoConfig } from 'remotion';
import { EasingFn, power3Out } from './easings';

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

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
```

- [ ] **Step 4: Run — expect PASS**

```bash
npm test -- data-hooks
```

Expected: 3 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/animations/data-hooks.ts src/animations/data-hooks.test.ts
git commit -m "feat(animations): add computeChartDraw + useChartDraw"
```

---

### Task 13: Add `computeNumberCount` + `useNumberCount` (TDD)

**Files:**
- Modify: `src/animations/data-hooks.ts`
- Modify: `src/animations/data-hooks.test.ts`

- [ ] **Step 1: Append failing test**

```typescript
// Append to data-hooks.test.ts
import { computeNumberCount } from './data-hooks';

describe('computeNumberCount', () => {
  const FPS = 30;

  it('before delay → returns from value', () => {
    expect(computeNumberCount(0, FPS, { delay: 0.5, duration: 1.0, from: 0, to: 100, ease: linear })).toBeCloseTo(0);
  });

  it('at end → returns to value exactly', () => {
    expect(computeNumberCount((0.5 + 1.0) * FPS, FPS, { delay: 0.5, duration: 1.0, from: 0, to: 100, ease: linear })).toBeCloseTo(100);
  });

  it('halfway with linear → midpoint', () => {
    expect(computeNumberCount((0.5 + 0.5) * FPS, FPS, { delay: 0.5, duration: 1.0, from: 0, to: 100, ease: linear })).toBeCloseTo(50, 1);
  });

  it('decimals=0 → integer rounded', () => {
    const v = computeNumberCount(15, FPS, { duration: 1.0, from: 0, to: 100, ease: linear, decimals: 0 });
    expect(Number.isInteger(v)).toBe(true);
  });

  it('decimals=2 → preserves 2 decimal places', () => {
    const v = computeNumberCount(15, FPS, { duration: 1.0, from: 0, to: 100, ease: linear, decimals: 2 });
    expect(v.toString().split('.')[1]?.length ?? 0).toBeLessThanOrEqual(2);
  });
});
```

- [ ] **Step 2: Run — expect FAIL**

```bash
npm test -- data-hooks
```

- [ ] **Step 3: Append implementation**

```typescript
// Append to data-hooks.ts
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

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
```

- [ ] **Step 4: Run — expect PASS**

```bash
npm test -- data-hooks
```

Expected: 8 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/animations/data-hooks.ts src/animations/data-hooks.test.ts
git commit -m "feat(animations): add computeNumberCount + useNumberCount"
```

---

### Task 14: Add `computeBarGrow` + `useBarGrow` (TDD)

**Files:**
- Modify: `src/animations/data-hooks.ts`
- Modify: `src/animations/data-hooks.test.ts`

- [ ] **Step 1: Append failing test**

```typescript
// Append to data-hooks.test.ts
import { computeBarGrow } from './data-hooks';

describe('computeBarGrow', () => {
  const FPS = 30;

  it('index=0 starts at frame=delay*fps', () => {
    expect(computeBarGrow(0, FPS, { delay: 0, duration: 0.5, index: 0, stagger: 0.1, ease: linear })).toBeCloseTo(0);
  });

  it('index=2 with stagger=0.1 → effective delay 0.2s; at frame=0 still 0', () => {
    expect(computeBarGrow(0, FPS, { delay: 0, duration: 0.5, index: 2, stagger: 0.1, ease: linear })).toBeCloseTo(0);
  });

  it('index=0 at end → 1', () => {
    expect(computeBarGrow(15, FPS, { delay: 0, duration: 0.5, index: 0, stagger: 0.1, ease: linear })).toBeCloseTo(1);
  });

  it('index=2 reaches end at frame = (0.2 + 0.5) * 30 = 21', () => {
    expect(computeBarGrow(21, FPS, { delay: 0, duration: 0.5, index: 2, stagger: 0.1, ease: linear })).toBeCloseTo(1);
  });
});
```

- [ ] **Step 2: Run — expect FAIL**

```bash
npm test -- data-hooks
```

- [ ] **Step 3: Append implementation**

```typescript
// Append to data-hooks.ts
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
```

- [ ] **Step 4: Run — expect PASS**

```bash
npm test -- data-hooks
```

Expected: 12 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/animations/data-hooks.ts src/animations/data-hooks.test.ts
git commit -m "feat(animations): add computeBarGrow + useBarGrow"
```

---

### Task 15: Create `src/animations/index.ts` barrel + verify build

**Files:**
- Create: `src/animations/index.ts`

- [ ] **Step 1: Write barrel**

```typescript
export * from './easings';
export * from './primitives';
export * from './data-hooks';
```

- [ ] **Step 2: Typecheck + run all tests**

```bash
npm run typecheck && npm test
```

Expected: 0 type errors. All tests pass (7 easings curve groups + 17 primitives + 12 data-hooks).

- [ ] **Step 3: Tag the foundation milestone**

```bash
git add src/animations/index.ts
git commit -m "feat(animations): add barrel re-export"
git tag v2-foundation
```

---

### Task 16: Archive legacy components to `_legacy/`

**Files:**
- Move 14 files: `src/components/*.tsx` → `src/components/_legacy/*.tsx`

- [ ] **Step 1: Create `_legacy/` and move all current components**

```bash
cd amc-video
mkdir -p src/components/_legacy
git mv src/components/AnimatedLineChart.tsx src/components/_legacy/
git mv src/components/AnimatedNumber.tsx    src/components/_legacy/
git mv src/components/AnimatedTitle.tsx     src/components/_legacy/
git mv src/components/Background.tsx        src/components/_legacy/
git mv src/components/BarChart.tsx          src/components/_legacy/
git mv src/components/BenefitGrid.tsx       src/components/_legacy/
git mv src/components/BodyText.tsx          src/components/_legacy/
git mv src/components/BrandOverlay.tsx      src/components/_legacy/
git mv src/components/DataCard.tsx          src/components/_legacy/
git mv src/components/FormulaDisplay.tsx    src/components/_legacy/
git mv src/components/ProgressBar.tsx       src/components/_legacy/
git mv src/components/ProgressPathway.tsx   src/components/_legacy/
git mv src/components/SceneNumber.tsx       src/components/_legacy/
git mv src/components/SubtitleOverlay.tsx   src/components/_legacy/
```

- [ ] **Step 2: Verify file count**

```bash
ls src/components/_legacy/ | wc -l
```

Expected: `14`

- [ ] **Step 3: Commit (do NOT typecheck yet — imports broken until Task 18)**

```bash
git commit -m "refactor: archive legacy components to _legacy/"
```

---

### Task 17: Archive legacy scenes to `_legacy/`

**Files:**
- Move 19 files: `src/scenes/*.tsx` → `src/scenes/_legacy/*.tsx`

- [ ] **Step 1: Create `_legacy/` and move all current scenes**

```bash
mkdir -p src/scenes/_legacy
git mv src/scenes/CalendarScene.tsx          src/scenes/_legacy/
git mv src/scenes/ChartScene.tsx             src/scenes/_legacy/
git mv src/scenes/ClosingScene.tsx           src/scenes/_legacy/
git mv src/scenes/ComparisonScene.tsx        src/scenes/_legacy/
git mv src/scenes/ContentScene.tsx           src/scenes/_legacy/
git mv src/scenes/CoverScene.tsx             src/scenes/_legacy/
git mv src/scenes/CoverStill.tsx             src/scenes/_legacy/
git mv src/scenes/ExamFormatScene.tsx        src/scenes/_legacy/
git mv src/scenes/KeyPointsScene.tsx         src/scenes/_legacy/
git mv src/scenes/OpeningScene.tsx           src/scenes/_legacy/
git mv src/scenes/PrepScene.tsx              src/scenes/_legacy/
git mv src/scenes/ProgressionScene.tsx       src/scenes/_legacy/
git mv src/scenes/ScoringExamplesScene.tsx   src/scenes/_legacy/
git mv src/scenes/ScoringScene.tsx           src/scenes/_legacy/
git mv src/scenes/StatsScene.tsx             src/scenes/_legacy/
git mv src/scenes/TitleCardScene.tsx         src/scenes/_legacy/
git mv src/scenes/TopicsScene.tsx            src/scenes/_legacy/
git mv src/scenes/WhatIsAMCScene.tsx         src/scenes/_legacy/
git mv src/scenes/WhyAMCScene.tsx            src/scenes/_legacy/
```

- [ ] **Step 2: Verify file count**

```bash
ls src/scenes/_legacy/ | wc -l
```

Expected: `19`

- [ ] **Step 3: Update legacy scene files' relative imports for components**

Each legacy scene imports from `../components/<X>`. After archive, the relative path is still valid because both `_legacy` directories are siblings under `src/`. Verify:

```bash
grep -l "from \"\.\./components/" src/scenes/_legacy/*.tsx | head -3
```

If any legacy scene imports `"../components/<X>"`, it now resolves to `src/components/<X>` which no longer exists (component is at `src/components/_legacy/<X>`). Fix every occurrence:

```bash
# Replace import paths in all _legacy scene files
sed -i 's|from "\.\./components/|from "../../components/_legacy/|g' src/scenes/_legacy/*.tsx
```

If `sed -i` is unavailable on Windows, use a TypeScript script or manual Edit per file. Verify after:

```bash
grep -h "from \"\.\." src/scenes/_legacy/*.tsx | sort -u
```

Expected: paths now read `from "../../components/_legacy/X"` or unrelated imports (config, fonts).

- [ ] **Step 4: Commit**

```bash
git add src/scenes/_legacy/
git commit -m "refactor: archive legacy scenes to _legacy/ + repath imports"
```

---

### Task 18: Update `AMCVideo.tsx` to route to `_legacy/` + smoke render

**Files:**
- Modify: `src/AMCVideo.tsx`

- [ ] **Step 1: Inspect current routing**

```bash
grep -n "from \"./scenes/" src/AMCVideo.tsx
```

Capture the existing scene imports. Each scene used by routing must be re-imported from `_legacy/` for now.

- [ ] **Step 2: Rewrite imports to point at `_legacy/`**

Edit `src/AMCVideo.tsx`. For every scene import, change `./scenes/XxxScene` → `./scenes/_legacy/XxxScene`. Example diff:

```diff
- import { CoverScene } from "./scenes/CoverScene";
+ import { CoverScene } from "./scenes/_legacy/CoverScene";
- import { OpeningScene } from "./scenes/OpeningScene";
+ import { OpeningScene } from "./scenes/_legacy/OpeningScene";
... (all 19 scenes)
```

- [ ] **Step 3: Typecheck**

```bash
npm run typecheck
```

Expected: 0 errors.

- [ ] **Step 4: Smoke render — confirm legacy still works**

```bash
npx remotion render src/index.ts AMCVideo out/smoke-legacy.mp4 --frames=0-30 --codec h264
```

Expected: `out/smoke-legacy.mp4` exists, file size > 100KB. (1 second of legacy rendering — proves nothing visually broke.)

- [ ] **Step 5: Commit**

```bash
git add src/AMCVideo.tsx
git commit -m "refactor: route AMCVideo imports through scenes/_legacy/"
```

---

### Task 19: Build pilot `OpeningScene` v2

**Files:**
- Create: `src/scenes/OpeningScene.tsx` (new HF-style implementation)
- Create: `src/components/EditorialChart.tsx` (shared chart component for the pilot)

- [ ] **Step 1: Create `src/components/EditorialChart.tsx`**

Reusable HF-style line chart. Used by pilot `OpeningScene`; reused by Phase 2 ChartScene.

```typescript
import React from 'react';
import { useChartDraw, useStagger } from '../animations';
import { power3Out, back } from '../animations/easings';
import { BRAND, DATA } from '../theme/colors';
import { D0_CAPTION, D2_SUBTITLE, FONT_BODY_EN } from '../theme/typography';

export interface ChartPoint {
  label: string;
  value: number;
}

interface EditorialChartProps {
  points: ChartPoint[];
  width: number;
  height: number;
  unit: string;
  drawDelay?: number;
  drawDuration?: number;
  pointStaggerDelay?: number;
  /** Color for the line + points (default: DATA.red 翰林红) */
  seriesColor?: string;
}

const ChartDot: React.FC<{ x: number; y: number; index: number; delay: number; color: string }> = ({
  x, y, index, delay, color,
}) => {
  const dot = useStagger({
    stagger: 0.12, index,
    delay, duration: 0.4,
    ease: back().out,
    from: { scale: 0 },
  });
  return (
    <circle
      cx={x}
      cy={y}
      r={8}
      fill={color}
      style={{ transform: `scale(${dot.scale})`, transformOrigin: `${x}px ${y}px` }}
    />
  );
};

const ChartLabel: React.FC<{ x: number; y: number; text: string; index: number; delay: number }> = ({
  x, y, text, index, delay,
}) => {
  const lab = useStagger({
    stagger: 0.12, index,
    delay: delay + 0.1, duration: 0.4,
    ease: power3Out,
    from: { y: -10, opacity: 0 },
  });
  return (
    <text
      x={x}
      y={y + lab.y}
      textAnchor="middle"
      fontFamily={FONT_BODY_EN}
      fontSize={D0_CAPTION.fontSize}
      fontWeight={600}
      fill={BRAND.white}
      opacity={lab.opacity}
    >
      {text}
    </text>
  );
};

export const EditorialChart: React.FC<EditorialChartProps> = ({
  points, width, height, unit,
  drawDelay = 0.3, drawDuration = 1.4,
  pointStaggerDelay = 1.2,
  seriesColor = DATA.red,
}) => {
  const padL = 80;
  const padR = 80;
  const padT = 40;
  const padB = 80;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;

  const maxVal = Math.max(...points.map((p) => p.value));
  const minVal = Math.min(...points.map((p) => p.value)) * 0.85;
  const range = maxVal - minVal || 1;

  const projected = points.map((p, i) => ({
    ...p,
    x: padL + (i / (points.length - 1)) * innerW,
    y: padT + innerH - ((p.value - minVal) / range) * innerH,
  }));

  const pathD = projected.reduce(
    (acc, p, i) => acc + (i === 0 ? `M ${p.x} ${p.y}` : ` L ${p.x} ${p.y}`),
    ''
  );

  // Approximate path length for stroke-dashoffset (sum of segment lengths)
  const totalLen = projected.reduce((sum, p, i) => {
    if (i === 0) return 0;
    const prev = projected[i - 1];
    return sum + Math.hypot(p.x - prev.x, p.y - prev.y);
  }, 0);

  const { dashOffset } = useChartDraw({
    delay: drawDelay,
    duration: drawDuration,
    ease: power3Out,
  });

  // Y-axis gridlines (4 lines)
  const gridYs = [0, 0.25, 0.5, 0.75, 1].map((p) => padT + innerH * p);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {/* Gridlines */}
      {gridYs.map((y, i) => (
        <line
          key={i}
          x1={padL}
          y1={y}
          x2={width - padR}
          y2={y}
          stroke={BRAND.divider}
          strokeWidth={1}
          opacity={0.6}
        />
      ))}

      {/* Y-axis unit label (top-left) */}
      <text
        x={padL}
        y={padT - 12}
        fontFamily={FONT_BODY_EN}
        fontSize={D0_CAPTION.fontSize}
        fill={BRAND.textLight}
      >
        {unit}
      </text>

      {/* Animated line */}
      <path
        d={pathD}
        fill="none"
        stroke={seriesColor}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={totalLen}
        strokeDashoffset={dashOffset(totalLen)}
      />

      {/* Data points (stagger overshoot) */}
      {projected.map((p, i) => (
        <ChartDot
          key={`dot-${i}`}
          x={p.x}
          y={p.y}
          index={i}
          delay={pointStaggerDelay}
          color={seriesColor}
        />
      ))}

      {/* Value labels above points */}
      {projected.map((p, i) => (
        <ChartLabel
          key={`label-${i}`}
          x={p.x}
          y={p.y - 22}
          text={p.value.toLocaleString()}
          index={i}
          delay={pointStaggerDelay}
        />
      ))}

      {/* X-axis labels (years) */}
      {projected.map((p, i) => (
        <text
          key={`xlabel-${i}`}
          x={p.x}
          y={height - padB / 2 + 8}
          textAnchor="middle"
          fontFamily={FONT_BODY_EN}
          fontSize={D0_CAPTION.fontSize}
          fill={BRAND.textLight}
        >
          {p.label}
        </text>
      ))}

      {/* Baseline */}
      <line
        x1={padL}
        y1={padT + innerH}
        x2={width - padR}
        y2={padT + innerH}
        stroke={BRAND.white}
        strokeWidth={1.5}
      />
    </svg>
  );
};
```

- [ ] **Step 2: Create new `src/scenes/OpeningScene.tsx`**

```typescript
import React from 'react';
import { AbsoluteFill } from 'remotion';
import { EditorialChart } from '../components/EditorialChart';
import { useFrom } from '../animations/primitives';
import { power3Out } from '../animations/easings';
import { BRAND } from '../theme/colors';
import { D0_CAPTION, D2_SUBTITLE, D4_HEADLINE, FONT_HEAD_EN, FONT_CN, tokenToStyle } from '../theme/typography';

interface OpeningSceneProps {
  title: string;
  subtitle: string;
  participationTitle: string;
  participationData: Array<{ year: string; value: number }>;
  participationUnit: string;
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({
  title,
  subtitle,
  participationTitle,
  participationData,
  participationUnit,
}) => {
  const titleAnim = useFrom({
    delay: 0.1, duration: 0.7, ease: power3Out,
    from: { y: -24, opacity: 0 },
  });
  const subtitleAnim = useFrom({
    delay: 0.3, duration: 0.6, ease: power3Out,
    from: { y: -12, opacity: 0 },
  });
  const captionAnim = useFrom({
    delay: 2.4, duration: 0.5, ease: power3Out,
    from: { opacity: 0 },
  });

  const points = participationData.map((d) => ({ label: d.year, value: d.value }));

  return (
    <AbsoluteFill style={{ background: BRAND.black, padding: '120px 80px' }}>
      {/* Headline (Libre Baskerville editorial style) */}
      <div
        style={{
          ...tokenToStyle(D4_HEADLINE),
          fontFamily: FONT_CN,
          color: BRAND.yellow,
          fontWeight: 700,
          transform: `translateY(${titleAnim.y}px)`,
          opacity: titleAnim.opacity,
          marginBottom: 16,
        }}
      >
        {title}
      </div>

      {/* Subtitle — Chinese stack, lighter weight */}
      <div
        style={{
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 400,
          transform: `translateY(${subtitleAnim.y}px)`,
          opacity: subtitleAnim.opacity,
          marginBottom: 80,
        }}
      >
        {subtitle}
      </div>

      {/* Chart title (English Libre Baskerville for editorial accent) */}
      <div
        style={{
          ...tokenToStyle(D2_SUBTITLE),
          fontFamily: FONT_CN,
          color: BRAND.white,
          fontWeight: 600,
          marginBottom: 24,
          opacity: subtitleAnim.opacity,
        }}
      >
        {participationTitle}
      </div>

      {/* Editorial chart */}
      <div style={{ width: 920, height: 720 }}>
        <EditorialChart
          points={points}
          width={920}
          height={720}
          unit={participationUnit}
        />
      </div>

      {/* Source caption */}
      <div
        style={{
          ...tokenToStyle(D0_CAPTION),
          fontFamily: FONT_HEAD_EN,
          fontStyle: 'italic',
          color: BRAND.textLight,
          marginTop: 24,
          opacity: captionAnim.opacity,
        }}
      >
        Source: 翰林有方 · 国际竞赛系列
      </div>
    </AbsoluteFill>
  );
};
```

- [ ] **Step 3: Wire pilot OpeningScene into `AMCVideo.tsx`**

Edit `src/AMCVideo.tsx`. Find the import for `OpeningScene` and the routing logic. Replace the legacy import with the new path:

```diff
- import { OpeningScene } from "./scenes/_legacy/OpeningScene";
+ import { OpeningScene } from "./scenes/OpeningScene";
```

If `AMCVideo.tsx` invokes `<OpeningScene>` with props that don't match the new signature, adapt the call site to pass `{ title, subtitle, participationTitle, participationData, participationUnit }` extracted from the relevant `SCENES[]` entry and `COMPETITION` constant. Inspect first:

```bash
grep -n "OpeningScene" src/AMCVideo.tsx
```

Then update the prop pass-through to match the new API.

- [ ] **Step 4: Typecheck**

```bash
npm run typecheck
```

Expected: 0 errors.

- [ ] **Step 5: Studio preview**

```bash
npx remotion studio src/index.ts
```

Open the OpeningScene in the timeline. Confirm:
- Title appears with downward fade-in
- Subtitle follows
- Chart line draws over ~1.4s
- Data points pop in with overshoot stagger
- Caption fades in last

Quit studio.

- [ ] **Step 6: Commit**

```bash
git add src/components/EditorialChart.tsx src/scenes/OpeningScene.tsx src/AMCVideo.tsx
git commit -m "feat(scenes): pilot OpeningScene v2 with EditorialChart (HF nyt-graph style)"
```

---

### Task 20: Render pilot 5s sample + USER VALIDATION GATE

**Files:**
- Create: `out/pilot-opening-scene-5s.mp4`

- [ ] **Step 1: Determine OpeningScene frame range**

In Studio (or by reading scene-durations.json), identify which frames cover the OpeningScene in the current EMCC composition. For a 5-second sample, render the first 150 frames of the OpeningScene timeline.

```bash
cat src/scene-durations.json | head -10
```

Identify `openingScene` (or whatever key exists) durations. Compute its frame offset. Suppose it starts at frame 60 and lasts 8 seconds (240 frames). Then render frames 60-210 (5 seconds).

- [ ] **Step 2: Render the pilot sample**

```bash
# Adjust --frames=START-END based on Step 1 inspection
npx remotion render src/index.ts AMCVideo out/pilot-opening-scene-5s.mp4 \
  --frames=60-210 \
  --codec h264 \
  --concurrency 4
```

- [ ] **Step 3: Verify render artifact**

```bash
ls -la out/pilot-opening-scene-5s.mp4
```

Expected: file exists, size > 1MB (proves not blank frames).

- [ ] **Step 4: Spot-check key frames**

```bash
mkdir -p out/pilot-frames
ffmpeg -i out/pilot-opening-scene-5s.mp4 -vf "select='eq(n\,0)+eq(n\,30)+eq(n\,60)+eq(n\,90)+eq(n\,120)'" -vsync 0 out/pilot-frames/frame_%03d.png 2>/dev/null || true
ls -la out/pilot-frames/
```

Expected: 5 PNG files exist, file sizes vary (proving distinct content). If all are identical size = static frame = bug.

- [ ] **Step 5: Tag pilot milestone**

```bash
git tag v2-pilot
```

- [ ] **Step 6: 🚦 USER VALIDATION GATE**

**Hand off `out/pilot-opening-scene-5s.mp4` and `out/pilot-frames/*.png` to the user.** Ask explicitly:

> "Pilot rendered. Files at `out/pilot-opening-scene-5s.mp4` (5s sample) and `out/pilot-frames/` (5 sampled frames). Please review and confirm:
> 1. Visual style matches what you wanted from HyperFrames?
> 2. Animation feels smooth (chart draw, data points, fades)?
> 3. Typography and color additions look right?
>
> If approved, I'll write the Phase 2 plan covering D3-D7 full-rollout (14 remaining scenes + transitions). If not, what should change about the helper API or visual direction?"

**STOP HERE — do not proceed past this gate without explicit user approval.**

---

## Phase 1 Complete — Summary

After Task 20 user approval:
- ✅ `theme/` and `animations/` foundation in place (~390 LOC + tests)
- ✅ Legacy code archived (rollback path preserved)
- ✅ Pilot `OpeningScene` v2 ships HF nyt-graph editorial style
- ✅ Sample mp4 demonstrably proves the visual direction

Next: write Phase 2 plan in `docs/superpowers/plans/<date>-hyperframes-redesign-phase2-rollout.md` covering D3-D7 (14 remaining scenes + cross-scene transitions + final regression render).

---

## Self-Review Notes

- [x] All 20 tasks have explicit file paths
- [x] All code-bearing steps include complete code blocks (no "TBD" / "implement here")
- [x] All commands have expected outputs
- [x] Type signatures consistent across tasks (e.g., `FromConfig`/`computeFrom`/`useFrom` triplet stable)
- [x] `back()` and `elastic()` curve usage in tests matches the higher-order pattern in implementation
- [x] Spec coverage: all of Section 4 (helper API) → Tasks 6-15; Section 5 (theme) → Tasks 2-5; Section 6 pilot → Tasks 19-20; Section 7 D0-D2 schedule → Tasks 1-20
- [x] Rollback strategy honored: `_legacy/` archive in Tasks 16-17 + git tag at `v2-foundation` and `v2-pilot`
- [x] Pilot validation gate (Section 8) → Task 20 hard stop

Phase 2 (D3-D7) deferred by design — written after pilot user approval per Section 8.
