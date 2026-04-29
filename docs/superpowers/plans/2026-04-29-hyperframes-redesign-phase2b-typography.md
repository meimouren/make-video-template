# HyperFrames Redesign — Phase 2B (D4 P2 Typography Scenes) Implementation Plan

> Continuation of Phase 2A. Pattern validated: yellow accent bar + dark cards + count-up + emphasis on latest. Phase 2B applies pattern to typography-heavy scenes.

**Goal:** Rewrite 5 typography scenes (CoverScene · CoverStill · ClosingScene · WhatIsAMCScene · ContentScene) with HyperFrames kinetic-type style.

**Tech:** Phase 1 helpers (`useFrom/useStagger/useTextReveal`) + theme tokens.

---

## File Structure

### Created
- `src/scenes/CoverScene.tsx` — animated cover with brand+name+tag
- `src/scenes/CoverStill.tsx` — static frame-0 cover (used for AMCCover Still composition)
- `src/scenes/ClosingScene.tsx` — finale title + body + yellow wipe
- `src/scenes/WhatIsAMCScene.tsx` — title + level cards (AMC-schema or simple-schema adaptive)
- `src/scenes/ContentScene.tsx` — generic title + body + scene-number indicator
- `src/components/LevelCard.tsx` — used by WhatIsAMCScene to render each level's card

### Modified
- `src/AMCVideo.tsx` — route `cover`, `closing`, `levels-compare` to v2; add fallback for content
- `src/Root.tsx` — `CoverStill` import to non-_legacy path

---

## Tasks

### Task 1: New `CoverScene` v2 — kinetic-type cover

`{ seriesName, competitionName, competitionNameEn, episodeTag }`

- Big ENG name (Libre Baskerville fallback, BRAND.yellow, 200-280px adaptive size)
- Above: small CN series name (white, 36px)
- Below: CN competition full name (D2_SUBTITLE)
- Below that: small episode tag chip
- Animation: ENG name `useTextReveal` char-by-char (0.04s/char), CN name fades in after, then yellow underline sweeps in

### Task 2: New `CoverStill` v2 — static cover

No props (reads COMPETITION). Same layout as CoverScene but at end-state (everything visible). Used by Still composition.

### Task 3: New `ClosingScene` v2

`{ title, text }`

- Center: large CN title (D4_HEADLINE, yellow) with text reveal
- Below: body text (D2_SUBTITLE, white)
- Bottom: brand chip "翰林有方 · 国际竞赛系列"
- Last second: yellow wipe right-to-left as transition out

### Task 4: New `WhatIsAMCScene` v2 + `LevelCard`

`{ title, subtitle, levels: { name, target?, questions?, time?, scoring?, detail?, badge?, color? }[] }`

- Title block (yellow accent bar + headline)
- 2x2 or 1x3 grid of LevelCards depending on count
- Each LevelCard: badge dot + name + detail rows (target/questions/time/scoring OR detail) + back.out entry stagger

### Task 5: New `ContentScene` v2

`{ title, subtitle, text, sceneIndex, totalScenes }`

- Yellow accent bar + title + subtitle
- Body text panel (large readable D1_BODY) with `useTextReveal` line-by-line (split by \n)
- Bottom-right: progress indicator "X / N" with thin yellow bar
- Used as fallback for any scene type not specifically routed

### Task 6: Wire 5 v2 scenes into AMCVideo + Root

- `cover` → CoverScene v2
- `closing` → ClosingScene v2
- `levels-compare` → WhatIsAMCScene v2
- AMCCover Still → CoverStill v2 (in Root.tsx)
- ContentScene available as router default fallback

### Task 7: Render P2 sample mp4

Frames 0-200 = CoverScene + transition into OpeningScene. Plus a closing chunk near end. Tag `v2-p2-batch`.

### Task 8: USER VALIDATION GATE

Hand off mp4 + frames. If approved, proceed to Phase 2C (D5-D6 layout scenes).
