import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const tableOverride = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: '100%',
  height: 700,
});

export const indexNumber = style({
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
});

export const memberNameContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const profileImage = style({
  borderRadius: 50,
  objectFit: 'cover',
  width: 36,
  height: 36,
});

export const moreIcon = style({
  cursor: 'pointer',
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray[500],
});
