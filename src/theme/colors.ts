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
  // Brighter palette tuned for text + accents on the brand black background.
  // Earlier values (#A41034 / #116AB0) were too dark for text contrast on #000.
  red:    '#FF4D6A',  // bright crimson — replaces 翰林红 for on-black readability
  blue:   '#5BA3F0',  // bright academic blue
  green:  '#4ADE80',
  orange: '#F59E0B',
} as const;

/**
 * Deep variants — only use for fills/backgrounds where a saturated dark tone is needed
 * (e.g., row tints or large area backgrounds where lighter colors would overpower).
 */
export const DATA_DEEP = {
  red:    '#A41034',
  blue:   '#116AB0',
} as const;

export type BrandColor = keyof typeof BRAND;
export type DataColor = keyof typeof DATA;
