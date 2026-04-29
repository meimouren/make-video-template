# HyperFrames Redesign — Phase 2A (D3 P1 Data-Viz Scenes) Implementation Plan

> Continuation of [Phase 1](./2026-04-29-hyperframes-redesign-phase1-foundation-pilot.md). Pilot v2 user-approved with rich layout (yellow accent bar + stat cards + chart panel + area fill + ringed dots + value pills).

**Goal:** Rewrite 5 data-viz scenes (ChartScene · StatsScene · TopicsScene · ScoringScene · ScoringExamplesScene) using the validated foundation (`theme/`, `animations/`) and pilot-derived design language.

**Architecture:** Each new scene v2 lives in `src/scenes/<X>.tsx` (root, not _legacy). Shared HF-style components for stat cards / bar rows / formula cards extracted into `src/components/`. AMCVideo router rewires all 5 scene types to v2 implementations.

**Tech Stack:** Remotion · React 19 · TS 6 · helper layer from Phase 1 (`useFrom/useStagger/useChartDraw/useNumberCount/useBarGrow`).

**Reference design language (locked in pilot):**
- 黑底 + 黄字 brand (BRAND.yellow #FFD600)
- Editorial: yellow accent bar | titles, panel-wrapped charts, stat cards, value pills
- Animation: power3Out for entries, back(1.4-1.7).out for emphasis, stagger 0.12s

---

## File Structure

### Created
- `src/scenes/ChartScene.tsx` — single-axis line chart (uses EditorialChart)
- `src/scenes/StatsScene.tsx` — 2x2 grid of count-up stat cards
- `src/scenes/TopicsScene.tsx` — title + horizontal bar chart with domain rows
- `src/scenes/ScoringScene.tsx` — title + formula display + scoring example cards
- `src/scenes/ScoringExamplesScene.tsx` — title + 2x2 scoring band cards
- `src/components/StatBlock.tsx` — reusable stat card (extracted from OpeningScene's StatCard)
- `src/components/BarRow.tsx` — horizontal bar row with name/percent/topics
- `src/components/FormulaCard.tsx` — formula display with reveal animation
- `src/components/ScoreCard.tsx` — score example card

### Modified
- `src/AMCVideo.tsx` — wire 5 v2 scenes to their respective scene-type cases
- `src/scenes/OpeningScene.tsx` — refactor inline `StatCard` → import from `components/StatBlock`

---

## Tasks

### Task 1: Extract reusable `StatBlock` from OpeningScene

**Files:**
- Create: `src/components/StatBlock.tsx`
- Modify: `src/scenes/OpeningScene.tsx`

- [ ] Move the inline `StatCard` definition to `src/components/StatBlock.tsx` and rename export `StatBlock`. Allow `value` to accept `string | number | React.ReactNode` so count-up children work.
- [ ] Update `OpeningScene.tsx` to import `StatBlock` instead of inline.
- [ ] Typecheck + render quick smoke (only frames 200-260) to verify OpeningScene still renders.
- [ ] Commit: `refactor: extract StatBlock from OpeningScene to shared component`

---

### Task 2: Build new `StatsScene` v2

**Files:**
- Create: `src/scenes/StatsScene.tsx`

Data: `{ stats: { label: string, value: number, suffix?: string }[] }` (4 stats from config).

- [ ] Layout: vertically centered, title block ("关键数据") with yellow accent bar, then 2×2 grid of `StatBlock`s — each shows `useNumberCount` from 0→value over 1.0s after stagger delay.
- [ ] Use `D3_TITLE` for numbers, `D0_CAPTION` for labels.
- [ ] Stagger entry: 0.15s between cards.
- [ ] Typecheck.
- [ ] Commit: `feat(scenes): StatsScene v2 with count-up stat cards`

---

### Task 3: Build `BarRow` component + new `TopicsScene` v2

**Files:**
- Create: `src/components/BarRow.tsx`
- Create: `src/scenes/TopicsScene.tsx`

`BarRow` props: `{ name, percentage, topics, index, delay, maxPercentage }`. Renders left-side `name` + topics description + right-aligned percentage + animated horizontal bar (uses `useBarGrow`). Uses `DATA.blue` for first half, `DATA.red` for top performers (>30%).

`TopicsScene` data: `{ title, subtitle, domains: { name, percentage, topics }[] }`.

- [ ] Layout: title block + chart panel containing 4-6 BarRows stacked vertically.
- [ ] Each BarRow grows with `useBarGrow` staggered 0.12s, name+topics slide in from left.
- [ ] Typecheck.
- [ ] Commit: `feat(components/scenes): BarRow + TopicsScene v2 with horizontal bars`

---

### Task 4: Build `FormulaCard` component + new `ScoringScene` v2

**Files:**
- Create: `src/components/FormulaCard.tsx`
- Create: `src/components/ScoreCard.tsx`
- Create: `src/scenes/ScoringScene.tsx`

`FormulaCard` props: `{ formula: string, delay?: number }`. Renders the formula in a panel with monospace styling, reveal-by-character via `useTextReveal` (durationPerChar=0.06).

`ScoreCard` props: `{ label, correct, blank, score, index, delay }`. Card showing example: 答对 X / 留空 Y → 得 Z 分. Animated entry + score number `useNumberCount`.

`ScoringScene` data: `{ title, subtitle, formula, scoringExamples }`.

- [ ] Layout: title + FormulaCard centered + 2×2 ScoreCards below.
- [ ] Stagger ScoreCards 0.15s.
- [ ] Typecheck.
- [ ] Commit: `feat(components/scenes): FormulaCard + ScoreCard + ScoringScene v2`

---

### Task 5: New `ScoringExamplesScene` v2 (reuses `ScoreCard`)

**Files:**
- Create: `src/scenes/ScoringExamplesScene.tsx`

Data: `{ title, subtitle, scoringExamples: { correct, blank, score, label }[] }`. Just title + grid of ScoreCards (no formula).

- [ ] Layout: title block + 2×2 ScoreCard grid (or 1×N if examples > 4).
- [ ] Stagger 0.18s (slower than ScoringScene since this is a focal scene).
- [ ] Typecheck.
- [ ] Commit: `feat(scenes): ScoringExamplesScene v2 reusing ScoreCard`

---

### Task 6: New `ChartScene` v2 (reuses `EditorialChart`)

**Files:**
- Create: `src/scenes/ChartScene.tsx`

`ChartScene` is no-prop in legacy (reads COMPETITION). v2 takes optional props but defaults to COMPETITION. Simpler than OpeningScene — just title + chart panel (no stat cards row).

- [ ] Layout: title (e.g. competition name big in yellow) + EditorialChart panel.
- [ ] Use larger chart (1000×720) since no stat cards taking space.
- [ ] Typecheck.
- [ ] Commit: `feat(scenes): ChartScene v2 reusing EditorialChart`

---

### Task 7: Wire all 5 v2 scenes into AMCVideo router

**Files:**
- Modify: `src/AMCVideo.tsx`

For each of the 5 scene types, swap legacy import to v2 import (drop `/_legacy/` from path), and adjust prop pass-through if signature changed.

- [ ] Update imports: `ChartScene`, `StatsScene`, `TopicsScene`, `ScoringScene`, `ScoringExamplesScene` now from `./scenes/<X>` (root).
- [ ] Verify routing prop pass-through matches new prop signatures.
- [ ] Typecheck.
- [ ] Commit: `feat(amc-video): route P1 data-viz scenes to v2 implementations`

---

### Task 8: Render P1 sample mp4 (~15s covering all 5 P1 scenes)

**Files:**
- Output: `out/p1-sample.mp4`

Looking at scene-durations.json indices:
- Index 1 (opening-1) → starts ~frame 180, OpeningScene (already done)
- Index 2 (opening-2) → StatsScene
- Index 5 (four-rounds, type unclear — check) — skip if not P1
- Other P1 scenes spread throughout

Pick 3 representative chunks: opening-2 (StatsScene), one ScoringScene, one TopicsScene. Render concatenated samples or simply render frames 180-1200 to cover several scenes.

- [ ] Determine frame ranges for at least one StatsScene, one ScoringScene, one TopicsScene from `scene-durations.json` and config.
- [ ] Render 600 frames (20s) covering frames 180-780 — captures OpeningScene + StatsScene + first content scenes.
- [ ] Extract 8 frames at second intervals.
- [ ] Tag `v2-p1-batch`.

---

### Task 9: USER VALIDATION GATE for Phase 2A

Hand off rendered mp4 + sample frames. Confirm:
1. Are 5 P1 scenes consistent with pilot's HF style?
2. Any scene type need rework before P2 starts?
3. Helper API still feels right after using it 5 times?

Blocks Phase 2B until approved.

---

## Self-Review

- Spec coverage: design spec §6 P1 mapping = 5 scenes (ChartScene, StatsScene, TopicsScene, ScoringScene, ScoringExamplesScene) — all 5 covered as Tasks 2-6.
- Type consistency: `StatBlock` extracted in Task 1 is consumed in Tasks 2 (StatsScene) — same import, same shape.
- Reuse: `EditorialChart` from pilot is reused in Task 6 (ChartScene). `ScoreCard` from Task 4 is reused in Task 5.
- Scope: bounded to 5 scenes + 4 components, all data-viz pattern. P2/P3 batches are out of scope and deferred.
- Validation: Task 9 hard gate before Phase 2B writing.
