import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  marginTop: 60,
});

export const header = style({
  display: 'flex',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.primary[800],
  padding: 20,
  height: 138,
});

export const headerTitle = style({
  lineHeight: 1.4,
  letterSpacing: -0.6,
  color: lightThemeVars.color.white.main,
  fontSize: 24,
  fontWeight: 600,
});

export const listContainer = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: 16,
});
