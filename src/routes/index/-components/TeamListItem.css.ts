import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  padding: 12,
  paddingRight: 100,
  paddingLeft: 100,

  ':hover': {
    backgroundColor: lightThemeVars.color.white.hover,
  },
});

export const item = style({
  width: 150,
  overflow: 'hidden',
  textAlign: 'center',
  textOverflow: 'ellipsis',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 500,
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  border: 'none',
  borderRadius: '4px',
  backgroundColor: lightThemeVars.color.primary['700'],
  cursor: 'pointer',
  ':hover': {
    backgroundColor: lightThemeVars.color.primary['700Darken'],
  },
  padding: 16,
  color: 'white',
  fontSize: 16,
});
