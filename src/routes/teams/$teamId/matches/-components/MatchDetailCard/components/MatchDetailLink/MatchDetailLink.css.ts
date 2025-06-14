import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 12,
});

export const text = style({
  lineHeight: 1.4,
  letterSpacing: -0.3,
  color: lightThemeVars.color.primary[400],
  fontSize: 12,
  fontWeight: 500,
});

export const icon = style({
  width: 16,
  height: 16,
  color: lightThemeVars.color.primary[400],
});
