import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const textFieldLabel = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  gap: 2,
  padding: '0 4px',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});

export const textFieldRequired = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.primary[700],
  fontSize: 14,
  fontWeight: 600,
});
