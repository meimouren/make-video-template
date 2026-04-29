# HyperFrames Redesign — Phase 2C (D5-D6 P3 Layout Scenes) Implementation Plan

> Continuation of Phase 2B. Pattern: yellow accent bar + dark panels + stagger animations + BRAND/DATA palette discipline.

**Goal:** Rewrite 8 layout-heavy scenes (TitleCard · KeyPoints · Comparison · Calendar · Progression · Prep · ExamFormat · WhyAMC) using shared scene-shell components.

---

## Reused vs new components

**Reuse from prior phases:** StatBlock · BarRow · LevelCard · ScoreCard · EditorialChart

**New components:**
- `src/components/SceneShell.tsx` — extract the title-block-with-yellow-bar pattern (used in every v2 scene)
- `src/components/KeyValueRow.tsx` — for KeyPointsScene rows
- `src/components/TimelineNode.tsx` — for CalendarScene
- `src/components/StepNode.tsx` — for PrepScene + ProgressionScene (step or pathway stage)
- `src/components/BenefitCard.tsx` — for WhyAMCScene benefit grid

## File Structure

### Created (8 scenes + 5 components)
- `src/components/SceneShell.tsx`
- `src/components/KeyValueRow.tsx`
- `src/components/TimelineNode.tsx`
- `src/components/StepNode.tsx`
- `src/components/BenefitCard.tsx`
- `src/scenes/TitleCardScene.tsx`
- `src/scenes/KeyPointsScene.tsx`
- `src/scenes/ComparisonScene.tsx`
- `src/scenes/CalendarScene.tsx`
- `src/scenes/ProgressionScene.tsx`
- `src/scenes/PrepScene.tsx`
- `src/scenes/ExamFormatScene.tsx`
- `src/scenes/WhyAMCScene.tsx`

### Modified
- `src/AMCVideo.tsx` — re-route 8 P3 scene types to new v2 imports

---

## Tasks

### Task 1: `SceneShell` — shared scene shell

Extract the common pattern: AbsoluteFill black background + 180px top / 220px bottom padding + title block (yellow accent bar | headline + subtitle).

`{ title, subtitle?, children }` — children renders below the title.

### Task 2-9: Build 8 P3 scenes

Each follows: SceneShell wrapping → content panel(s).

| Scene | Body content |
|-------|---------|
| TitleCardScene | Keyword tags grid (3-cols flex-wrap, each tag pill animates in stagger) |
| KeyPointsScene | KeyValueRow list (left-aligned label, right-aligned bold yellow value) |
| ComparisonScene | Two-column comparison table (left header / right header / aspect rows + bars) |
| CalendarScene | Vertical timeline of TimelineNode (date pill + event description) |
| ProgressionScene | Funnel of StepNode (stage + participant count + desc) |
| PrepScene | Numbered StepNode list (big number + title + desc) |
| ExamFormatScene | Horizontal BarRow chart (reuses BarRow from Phase 2A) |
| WhyAMCScene | 2x2 BenefitCard grid (icon + title + desc) |

### Task 10: Wire 8 v2 scenes into AMCVideo router

Update imports + pass new props.

### Task 11: Render P3 sample mp4

Find frame ranges for at least 4-5 P3 scenes in EMCC config. Render concatenated chunks. Tag `v2-p3-batch`.

### Task 12: USER VALIDATION GATE

After approval, proceed to Phase 2D (transitions + final regression).
