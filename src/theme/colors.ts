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
