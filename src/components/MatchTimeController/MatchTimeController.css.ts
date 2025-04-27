import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: 34,
  borderRadius: 10,
  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.05)',
  background: lightThemeVars.color.white.main,
  padding: '0 0 0 20px',
  width: '100%',
  height: 116,
  overflow: 'hidden',
});

export const timeSection = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

export const timeDisplay = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const additionalTime = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 600,
});

export const mainTime = style({
  lineHeight: 1.4,
  letterSpacing: -1.05,
  color: lightThemeVars.color.black,
  fontSize: 42,
  fontWeight: 600,
});

export const controlSection = style({
  display: 'flex',
  flexDirection: 'column',
  borderLeft: `1px solid ${lightThemeVars.color.primary[100]}`,
  width: 78,
  height: '100%',
});
