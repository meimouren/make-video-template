# HyperFrames-Style Visual Redesign — Design Spec

- **Date**: 2026-04-29
- **Project**: `amc-video/` (Remotion + Aliyun CosyVoice TTS · 「每天介绍一个国际竞赛」系列)
- **Scope**: Component-layer visual upgrade (config + workflow unchanged)
- **Reference**: `C:\Users\梅奇强\Desktop\技能专家\hyperframes_ref` (HeyGen HyperFrames OSS)
- **Status**: Approved by user, awaiting written-spec review before implementation plan

---

## 1. Background & Motivation

The current pipeline has rendered 33+ competition videos using Remotion native `interpolate` + `spring` animations and a system-font typography stack. Animations work correctly but feel restrained vs. HyperFrames examples which use editorial typography (Libre Baskerville / Libre Franklin), GSAP-style easing curves with overshoot, and chart animations with stagger and stroke-draw effects.

User goal: borrow HyperFrames' visual richness — animation curves, typography hierarchy, data-visualization polish — while remaining on Remotion (HyperFrames itself was previously rejected for 43% black-screen rate and `data-duration` freeze-frame bugs; see `~/.claude/memory/feedback_remotion_over_hyperframes.md`).

User explicit success criteria: **stable, efficient, high-quality** content production.

---

## 2. Decisions (Locked)

| # | Decision | Choice | Rationale |
|---|----------|--------|-----------|
| 1 | **Scope of redesign** | B — Component upgrade | Keep existing `SCENES` config (15 scene-type variants), 19 scene component files, 7-step workflow; only upgrade internals |
| 2 | **Animation engine** | C — Remotion native + HF-style helper hooks | Avoid Framer-Motion timeline drift; build thin helper layer (~390 LOC) for GSAP-like ergonomics on top of `interpolate`/`spring` |
| 3 | **Palette policy** | B — Brand + data palette | Non-chart scenes pure 黑底黄字; charts allow 4 data colors (red/blue/green/orange) inside SVG only |
| 4 | **Rollout strategy** | 2 — Foundation → Pilot → batched expansion | D2 pilot validation gate ensures direction before committing 5 more days of work |
| 5 | **Old videos** | Untouched | Existing 33 videos do not get re-rendered; legacy components archived in `_legacy/` |
| 6 | **Brand identity** | Preserved | 黑底 #000 + 黄字 #FFD600, 翰林品牌栏, 左上引号, 右上注释栏 — all stay |

### Alternatives Rejected

- **Full rewrite (option A)** — too disruptive; throws away validated 7-step workflow
- **Single scene patch (option C)** — leaves visual inconsistency between v1/v2 scenes during long rollout
- **Framer Motion** — known timeline drift with Remotion's frame-precise rendering
- **Pure brand palette** — multi-series chart data needs color differentiation; yellow-only charts fail

---

## 3. Architecture

### File Structure

```
amc-video/src/
├── animations/                    [NEW] HF-style animation helper layer
│   ├── easings.ts                 GSAP-equivalent easing curves
│   ├── primitives.ts              useFrom · useStagger · useYoyo · useTextReveal
│   ├── data-hooks.ts              useChartDraw · useNumberCount · useBarGrow
│   └── index.ts
├── theme/                         [NEW] design tokens
│   ├── colors.ts                  BRAND + DATA palettes
│   ├── typography.ts              FONT_HEAD_EN · FONT_BODY_EN · FONT_CN + scale tokens
│   └── index.ts
├── fonts.ts                       [REWRITE] @remotion/google-fonts integration
├── components/
│   ├── _legacy/                   [NEW] all 14 current components archived here
│   └── (new components written in components/ root)
├── scenes/
│   ├── _legacy/                   [NEW] all 19 current scenes archived here
│   └── (new scenes written in scenes/ root)
├── config.ts                      [UNCHANGED] SCENES array + COLORS exports
└── AMCVideo.tsx                   [PARTIAL CHANGE] route to new scenes + scene-transition wrapper
```

### Module Boundaries

- **`animations/`** — pure functions + React hooks. No styling, no business logic. Single source of animation behavior.
- **`theme/`** — only source of visual constants. Components do not write hex literals.
- **`components/` vs `scenes/`** — preserved semantics: components are reusable atoms (charts, cards, grids); scenes are config-driven type renderers.
- **`_legacy/`** — strictly isolated. Not imported by new code. Only used if a specific old video needs re-rendering.

### Data Flow (unchanged from v1)

```
config.ts SCENES[]
    ↓
AMCVideo.tsx 遍历 SCENES
    ↓
scene.type → scenes/<XxxScene>.tsx
    ↓
scene 内部 import { BRAND, DATA } from theme/colors
                  { FONT_*, D5_DISPLAY ... } from theme/typography
                  { useFrom, useChartDraw ... } from animations
    ↓
Remotion <Sequence> · 帧渲染
```

### Invariants Preserved

- `config.ts` `SCENES[]` schema unchanged → user authors new topics identically to v1
- `generate-voiceover.ts` / `compute-durations.ts` / `generate-srt.ts` — unchanged
- `public/voiceover/<scene-id>.mp3` filename convention — unchanged
- 1080×1920 @ 30fps H.264 output — unchanged

### Risks & Boundaries

- No third-party animation library introduced (Framer Motion explicitly rejected)
- `_legacy/` directory never imported by new code (enforced by ESLint rule + code review)
- Google Fonts loaded via `@remotion/google-fonts` (not `<link>` CDN) → offline render works

---

## 4. Helper Layer API

### Design Constraints (mapped from user's "stable + efficient + high-quality")

| User goal | Implementation rule |
|-----------|---------------------|
| **Stable** | All hooks are pure functions of `useCurrentFrame()`. Zero internal state, zero `setTimeout`, zero `useEffect` side effects |
| **Efficient** | Single interpolation per frame. Easings are math formulas, no lookup tables. No re-renders triggered by hooks |
| **High-quality** | Easing curves ported directly from GSAP source (numerically identical). No cubic-bezier approximation |

### `easings.ts`

All signatures: `(t: number) => number`, where `t ∈ [0, 1]`.

```typescript
export const linear: EasingFn;
export const power1In, power1Out, power1InOut;   // t² family
export const power2In, power2Out, power2InOut;   // t³ family (default recommendation: power2Out)
export const power3In, power3Out, power3InOut;   // t⁴ family
export const power4In, power4Out, power4InOut;   // t⁵ family
export const expoIn, expoOut, expoInOut;
export const sineIn, sineOut, sineInOut;
export const back: (overshoot?: number) => { in: EasingFn, out: EasingFn, inOut: EasingFn };  // back.out(1.7) default
export const elastic: (amplitude?: number, period?: number) => { in, out, inOut };
```

`EasingFn = (t: number) => number`. Defaults match GSAP: `back(1.7)`, `elastic(1, 0.3)`.

### `primitives.ts`

```typescript
export interface FromConfig {
  delay?: number;        // seconds, default 0
  duration?: number;     // seconds, default 0.6
  ease?: EasingFn;       // default power3Out
  from: { x?: number; y?: number; opacity?: number; scale?: number; rotate?: number };
}
export function useFrom(config: FromConfig): {
  x: number; y: number; opacity: number; scale: number; rotate: number;
};

export interface StaggerConfig extends Omit<FromConfig, 'delay'> {
  delay?: number;
  stagger: number;       // seconds between siblings
  index: number;         // 0-based
}
export function useStagger(config: StaggerConfig): ReturnType<typeof useFrom>;

export interface YoyoConfig {
  delay?: number;
  duration: number;      // one-way duration in seconds
  to: number;            // target value
  base?: number;         // start/end value, default 1
  ease?: EasingFn;
}
export function useYoyo(config: YoyoConfig): number;

export interface TextRevealConfig {
  text: string;
  delay?: number;
  durationPerChar?: number;  // seconds, default 0.04
  ease?: EasingFn;
}
export function useTextReveal(config: TextRevealConfig): {
  visibleChars: number;
  visibleText: string;
};
```

### `data-hooks.ts`

```typescript
export interface ChartDrawConfig {
  delay?: number;
  duration: number;
  ease?: EasingFn;
}
export function useChartDraw(config: ChartDrawConfig): {
  progress: number;                    // 0..1
  dashOffset: (totalLen: number) => number;  // for SVG path stroke-dashoffset
};

export interface NumberCountConfig {
  delay?: number;
  duration: number;
  from: number;
  to: number;
  ease?: EasingFn;
  decimals?: number;     // default 0
}
export function useNumberCount(config: NumberCountConfig): number;

export interface BarGrowConfig {
  delay?: number;
  duration: number;
  index: number;
  stagger?: number;      // default 0.1
  ease?: EasingFn;       // default power3Out
}
export function useBarGrow(config: BarGrowConfig): number;  // 0..1
```

### Usage Example (OpeningScene chart)

```typescript
import { useChartDraw, useStagger, useFrom } from '@/animations';
import { power3Out, back } from '@/animations/easings';

// Per-point component — each invocation is a single React render with one hook call
const ChartDot: React.FC<{ point: Point; index: number }> = ({ point, index }) => {
  const dot = useStagger({
    stagger: 0.12, index,
    delay: 1.2, duration: 0.4,
    ease: back().out,
    from: { scale: 0 },
  });
  return (
    <circle
      cx={point.x}
      cy={point.y}
      r={6}
      style={{ transform: `scale(${dot.scale})`, transformOrigin: `${point.x}px ${point.y}px` }}
    />
  );
};

// Top-level scene
const OpeningChart: React.FC = () => {
  const titleAnim = useFrom({ delay: 0, duration: 0.6, ease: power3Out, from: { y: -20, opacity: 0 } });
  const { dashOffset } = useChartDraw({ delay: 0.3, duration: 1.4, ease: power3Out });

  return (
    <>
      <h1 style={{ transform: `translateY(${titleAnim.y}px)`, opacity: titleAnim.opacity }}>
        EMCC 历年参赛人数
      </h1>
      <svg viewBox="0 0 1600 700">
        <path d={pathD} strokeDasharray={totalLen} strokeDashoffset={dashOffset(totalLen)} />
        {points.map((p, i) => <ChartDot key={i} point={p} index={i} />)}
      </svg>
    </>
  );
};
```

> **Hook rule**: never call `useStagger`/`useFrom` inside `.map()` or conditionals. Extract a per-item component (like `ChartDot` above) so each hook is called at the top level of one component render.

### LOC Estimate

| File | Lines | Notes |
|------|-------|-------|
| `easings.ts` | ~120 | Math formulas + types |
| `primitives.ts` | ~150 | 4 hooks |
| `data-hooks.ts` | ~100 | 3 hooks |
| `index.ts` | ~20 | Re-exports |
| **Total** | **~390** | One-time write |

### Test Coverage Requirements

- `easings.ts`: boundary checks at `t=0`, `t=0.5`, `t=1` for every exported curve
- `primitives.ts`: each hook tested at `frame=delay`, `frame=delay+duration*fps`, mid-frame
- `data-hooks.ts`: `useNumberCount` exact endpoints; `useBarGrow` stagger correctness; `useChartDraw` dashOffset polarity
- Coverage target: ≥80% on helper layer (vitest)

---

## 5. Color & Typography System

### `theme/colors.ts`

```typescript
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
  red:    '#A41034',  // 翰林红 — primary contrast
  blue:   '#116AB0',  // 学术蓝 — secondary series
  green:  '#4ADE80',  // 翠绿   — positive / growth
  orange: '#F59E0B',  // 暖橙   — warning / peak
} as const;
```

### Usage Rules

- Non-chart elements (titles, body text, brand bar, subtitles, CTAs): only `BRAND.*`
- Chart elements (`<svg>` `fill`/`stroke` attributes only): `BRAND.*` or `DATA.*`
- ESLint custom rule (or comment-based linter pass) flags `DATA.*` outside `<svg>` subtree

### `fonts.ts` (rewrite)

```typescript
import { loadFont as loadBaskerville } from '@remotion/google-fonts/LibreBaskerville';
import { loadFont as loadFranklin } from '@remotion/google-fonts/LibreFranklin';

loadBaskerville();
loadFranklin();

export const FONT_HEAD_EN = '"Libre Baskerville", serif';
export const FONT_BODY_EN = '"Libre Franklin", sans-serif';
export const FONT_CN = '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';
```

Chinese kept as system stack (PingFang SC / Microsoft YaHei) — already optimal. English headlines and numbers use Libre Baskerville + Libre Franklin to match HF editorial style.

### `theme/typography.ts` Scale

| Token | Size | Line height | Letter spacing | Use |
|-------|------|-------------|----------------|-----|
| `D5_DISPLAY` | 112px | 1.0 | -0.02em | Cover main title |
| `D4_HEADLINE` | 84px | 1.08 | -0.015em | Scene main title |
| `D3_TITLE` | 60px | 1.15 | -0.01em | Subtitle / large numbers |
| `D2_SUBTITLE` | 42px | 1.3 | 0 | Tertiary heading |
| `D1_BODY` | 36px | 1.7 | 0 | Subtitles / body |
| `D0_CAPTION` | 26px | 1.5 | 0 | Caption / units |

Aligns with `~/.claude/memory/feedback_video_mobile_typography.md`: 正文 ≥36px, 标题 ≥72px, 行距 1.7-1.8.

---

## 6. Pilot Scene + Scene Mapping

### Pilot: `OpeningScene` (chart variant)

**Why**: covers data-viz + typography + stagger + editorial layout in one scene → validates entire helper layer end-to-end with maximal visual impact.

**Redesign content**:
- Top: Libre Baskerville large title + Libre Franklin subtitle + two-series legend (red/blue) — editorial feel
- Middle: SVG dual-axis chart (line + bar, ref `nyt-graph` example) with `useChartDraw` 1.4s stroke animation, data points using `useStagger` with `back.out` overshoot
- Bottom: data-source caption (`D0_CAPTION` gray); top-right gray note bar preserved

### Full 19-Scene Mapping

19 scene files in `src/scenes/`:

| Scene | HF reference | Key change | Phase |
|-------|--------------|------------|-------|
| CoverScene | kinetic-type | Title text reveal char-by-char + subtitle stagger + yellow wipe | P2 |
| CoverStill | kinetic-type | Static cover at frame 0 — tightened grid + Libre Baskerville | P2 |
| **OpeningScene** | **nyt-graph + data-chart** | **Dual-axis SVG chart + editorial title** (**Pilot**) | **P1** |
| ChartScene | data-chart | Single-axis line chart with `useChartDraw` stroke + point stagger | P1 |
| StatsScene | kinetic-type | Number count-up (`useNumberCount`) + label stagger | P1 |
| TopicsScene | data-chart (bar) | Horizontal bar chart with `useBarGrow` stagger | P1 |
| ScoringScene | data-chart | Formula reveal item-by-item + highlight | P1 |
| ScoringExamplesScene | data-chart | Score-band cards stagger rise | P1 |
| TitleCardScene | swiss-grid | Keyword tags stagger sweep | P3 |
| KeyPointsScene | swiss-grid | List stagger + large left-aligned ordinal | P3 |
| ComparisonScene | swiss-grid + data-chart | Two-column cards + data-bar comparison | P3 |
| CalendarScene | swiss-grid | Timeline node stagger + current-date highlight | P3 |
| ProgressionScene | flowchart | Node fade-in + connector stroke draw | P3 |
| PrepScene | flowchart | Step-node stagger | P3 |
| ExamFormatScene | swiss-grid | Info card grid | P3 |
| WhyAMCScene | swiss-grid | Reason list stagger | P3 |
| ClosingScene | logo-outro | Large finale type + yellow full-screen transition | P2 |
| WhatIsAMCScene | kinetic-type | Big question mark + answer line-reveal | P2 |
| ContentScene | (generic fallback) | Title + body stagger using `useFrom`/`useStagger` | P2 |

Reusable components in `src/components/` get refreshed alongside the scenes that use them:

| Component | HF reference | Used by |
|-----------|--------------|---------|
| AnimatedLineChart | data-chart | ChartScene · OpeningScene |
| BarChart | data-chart | TopicsScene · ComparisonScene |
| AnimatedNumber | kinetic-type | StatsScene · ScoringScene |
| AnimatedTitle | kinetic-type | CoverScene · OpeningScene |
| BenefitGrid | swiss-grid | (used in benefits-type scene config) |
| DataCard | swiss-grid | KeyPointsScene · ScoringExamplesScene |
| FormulaDisplay | data-chart | ScoringScene |
| ProgressBar | data-chart | (progress visualizations) |
| ProgressPathway | flowchart | ProgressionScene |
| Background · BrandOverlay · SubtitleOverlay · BodyText · SceneNumber | (overlay layer) | All scenes — minor token swaps only |

---

## 7. Rollout Schedule

| Day | Tasks | Deliverables | Acceptance |
|-----|-------|--------------|------------|
| **D0** | `theme/colors.ts` · `theme/typography.ts` · `fonts.ts` rewrite | 3 token files + Google Fonts loader | `tsc --noEmit` 0 errors |
| **D1** | `animations/easings.ts` + `animations/primitives.ts` + unit tests | 2 helper files + vitest passes | ≥80% coverage on easings |
| **D2 AM** | `animations/data-hooks.ts` + unit tests | 1 helper file + vitest passes | Same as D1 |
| **D2 PM** | **Pilot: OpeningScene v2 rewrite** | New `OpeningScene.tsx` + 5s sample mp4 | 🚦 **USER VALIDATION GATE** before D3 |
| **D3** | P1 data-viz scenes: StatsScene · TopicsScene · ScoringScene · ScoringExamplesScene · ChartScene | 5 v2 scenes | Studio preview 0 errors per scene |
| **D4** | P2 typography scenes: CoverScene · CoverStill · ClosingScene · WhatIsAMCScene · ContentScene | 5 v2 scenes | Same as D3 |
| **D5** | P3 layout scenes (1/2): TitleCardScene · KeyPointsScene · ComparisonScene · CalendarScene | 4 v2 scenes | Same as D3 |
| **D6** | P3 layout scenes (2/2): ProgressionScene · PrepScene · ExamFormatScene · WhyAMCScene + final pass on reusable components (BenefitGrid · ProgressPathway · DataCard · FormulaDisplay · ProgressBar) | 4 v2 scenes + 5 components refreshed | Same as D3 |
| **D7** | Cross-scene transitions (`@remotion/transitions`) + full regression: re-render an existing topic (e.g., EMCC) with new template | 1 full new mp4 + perf comparison report | Render time ≤ v1 + 5%; visual quality clearly above v1 |

---

## 8. Validation Criteria

### Per-Phase Hard Gates

Every phase must pass before next starts:
- ✅ `tsc --noEmit` 0 errors
- ✅ All unit tests pass (helpers + theme only)
- ✅ Remotion Studio preview renders without dropped frames (<100ms/frame budget)
- ✅ Zero `console.error` in studio dev console

### D2 Pilot Gate (Stricter)

- ✅ Render 5s sample mp4, file size > 1MB (proves not blank frames)
- ✅ Sample frames at frame=0/30/60/90/120 — visual inspection: no blank frames, easing feels smooth
- ✅ User subjective approval: "this is the HyperFrames look I wanted"

### D7 Final Gate

- ✅ Full-video render time ≤ v1 + 5% (`time npx remotion render` comparison)
- ✅ Visual style consistency across all 19 scene types (same brand, fonts, animation rhythm)
- ✅ Voiceover/subtitles/BGM still synced (no new bugs introduced)

### Rollback Strategy

- Git tag at each phase boundary: `v2-foundation`, `v2-pilot`, `v2-batch1`, `v2-batch2`, `v2-batch3`, `v2-final`
- Pilot fails → roll back to D1 end (keep helper layer; redo pilot only)
- Any single scene breaks → soft-link that scene back to `_legacy/` namesake; rest of pipeline unaffected

---

## 9. Out of Scope

- Re-rendering existing 33 published videos
- Redesigning TTS voice / audio pipeline
- Changing 9:16 1080×1920 30fps output specs
- Changing `config.ts` `SCENES[]` schema (would break workflow muscle memory)
- Adding new scene types beyond the existing 19
- Multi-theme support (cream-mode toggle) — not needed for current single series
- Migrating away from Aliyun CosyVoice TTS

---

## 10. Open Questions for Implementation Plan

These will be resolved when invoking `writing-plans` skill:

- Exact `@remotion/transitions` configuration (cross-fade duration, easing) for D7
- ESLint rule format for `DATA.*` outside `<svg>` (custom rule vs. naming convention)
- Whether to extract chart axis/gridline rendering into shared `ChartFrame` component or duplicate per scene
- Vitest configuration if not already present in repo

---

## 11. References

- HyperFrames OSS repo: `C:\Users\梅奇强\Desktop\技能专家\hyperframes_ref`
  - `registry/blocks/data-chart/` — chart animation block
  - `registry/blocks/kinetic-type/` — kinetic typography block
  - `registry/examples/nyt-graph/` — full editorial chart composition
  - `registry/examples/swiss-grid/` — typographic grid layout
  - `registry/examples/kinetic-type/` — full kinetic-type composition
- Memory entries informing this design:
  - `~/.claude/memory/feedback_remotion_over_hyperframes.md` — why we stay on Remotion
  - `~/.claude/memory/project_video_pipeline.md` — current Remotion stack
  - `~/.claude/memory/workflow_video_production.md` — 7-step workflow (preserved)
  - `~/.claude/memory/feedback_video_mobile_typography.md` — type-scale floor
  - `~/.claude/memory/feedback_video_quality.md` — animation smoothness expectation
  - `~/.claude/memory/feedback_video_dead_zones.md` — historical HyperFrames pain (avoided here)
- GSAP source for easing formulas: https://github.com/greensock/GSAP/blob/master/src/EasePack.js
- Remotion docs: https://www.remotion.dev/docs/animating-properties
- `@remotion/google-fonts`: https://www.remotion.dev/docs/google-fonts
