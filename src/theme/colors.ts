// BOLD EDITORIAL palette (redesign 2026-06-24)
// Aesthetic: serious magazine × bold display × education-grade clarity.
// Background: clean near-white paper (NOT cream — deliberately avoids the
// banned warm beige/oxblood AI-tell). Primary accent: confident cobalt.
// Token semantic names (black/yellow/white) kept for API stability across
// all existing components — only the VALUES changed.

export const BRAND = {
  black: '#FAFAFA',                    // paper — main bg
  yellow: '#1D4ED8',                   // cobalt — primary accent
  white: '#111111',                    // ink — primary text + thick rules
  textLight: '#5B5B5B',                // neutral muted ink — secondary text
  divider: '#C4C4C4',                  // divider — visible on paper, still refined
  cardBg: 'rgba(17,17,17,0.025)',      // very subtle ink-tint card bg
  cardBorder: 'rgba(17,17,17,0.12)',   // editorial hairline border
} as const;

// On-accent contrast color (text/marks sitting on the cobalt accent).
export const ON_ACCENT = '#FFFFFF';

// Data palette — cobalt-led, editorial, max one warm emphasis.
export const DATA = {
  red:    '#1D4ED8',  // cobalt — primary chart series (key name kept)
  blue:   '#111111',  // ink — secondary series, bars
  green:  '#15803D',  // deep green — tertiary / positive
  orange: '#B45309',  // ochre — single emphasis callout
} as const;

export const DATA_DEEP = {
  red:    '#1E40AF',
  blue:   '#000000',
} as const;

export type BrandColor = keyof typeof BRAND;
export type DataColor = keyof typeof DATA;
