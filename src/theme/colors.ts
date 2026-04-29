// ACADEMIC EDITORIAL palette (frontend-design output, locked 2026-04-29)
// Aesthetic: Penguin Classics × Oxford academic guidebook × 老课本复古
// Background: warm parchment cream — designed for long-form comfortable viewing.
// Primary accent: scholarly burgundy — gravitas without harshness.

export const BRAND = {
  black: '#F4EFE6',                    // parchment — main bg (semantic name kept for token API stability)
  yellow: '#8A2832',                   // scholarly burgundy — primary accent
  white: '#1C1814',                    // deep ink — primary text
  textLight: '#6B6258',                // muted ink — secondary text
  divider: '#C7BFB0',                  // soft warm divider
  cardBg: 'rgba(28,24,20,0.035)',      // subtle warm card bg
  cardBorder: 'rgba(28,24,20,0.12)',   // editorial ink-tone border
} as const;

// Data palette tuned for parchment background — desaturated, editorial.
export const DATA = {
  red:    '#8A2832',  // 学院红 — primary chart series
  blue:   '#1F3D5C',  // 深海军 — second series, headers
  green:  '#3A6B5F',  // 深 teal — third series, comparative
  orange: '#C39248',  // 古铜金 — emphasis, callouts
} as const;

// Deep variants kept for callbacks where original v1/v2 values are needed.
export const DATA_DEEP = {
  red:    '#A41034',
  blue:   '#116AB0',
} as const;

export type BrandColor = keyof typeof BRAND;
export type DataColor = keyof typeof DATA;
