import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
});

export const text = style({
  marginTop: 60,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray['500'],
  fontSize: 14,
  fontWeight: 500,
});
