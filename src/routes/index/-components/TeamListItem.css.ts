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
