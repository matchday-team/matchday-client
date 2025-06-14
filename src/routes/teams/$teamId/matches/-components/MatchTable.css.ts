import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const tableOverride = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: '100%',
  height: 700,
});

export const opponentContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const opponentLogo = style({
  aspectRatio: '1',
  flexShrink: 0,
  objectFit: 'contain',
  objectPosition: 'center',
  width: 44,
});

export const opponentName = style({
  width: 47,
  textAlign: 'center',
});

export const win = style({
  color: lightThemeVars.color.primary[700],
});

export const loss = style({
  color: '#C63535',
});

export const draw = style({
  color: lightThemeVars.color.gray[500],
});

export const timeCell = style({
  color: lightThemeVars.color.black,
});

export const actionIcon = style({
  cursor: 'pointer',
  width: 24,
  color: lightThemeVars.color.gray[500],
});
