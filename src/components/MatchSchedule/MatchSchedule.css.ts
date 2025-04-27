import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  borderRadius: 10,
  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.05)',
  background: lightThemeVars.color.white.main,
  padding: '24px 20px',
});

export const infoItem = style({
  display: 'flex',
  alignItems: 'center',
});

export const labelContainer = style({
  display: 'flex',
  alignItems: 'center',
  width: 71,
});

export const label = style({
  borderRadius: 4,
  background: lightThemeVars.color.primary[300],
  padding: '5px 10px',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.primary[800],
  fontSize: 14,
  fontWeight: 500,
});

export const value = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});
