import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  marginTop: 24,
  width: 264,
});

export const row = style({
  display: 'flex',
  gap: 8,
  width: '100%',
  fontWeight: 600,
});

const commonText = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
});

export const label = style([
  {
    color: lightThemeVars.color.primary[300],
    fontWeight: 600,
  },
  commonText,
]);

export const value = style([
  {
    display: '-webkit-box',
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: lightThemeVars.color.white.main,
    fontWeight: 500,
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
  },
  commonText,
]);
