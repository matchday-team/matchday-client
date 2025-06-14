import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  width: 354,
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.primary[800],
  padding: 12,
  width: '100%',
  height: 470,
});

export const closeButtonContainer = style({
  display: 'flex',
  justifyContent: 'end',
  width: '100%',
});

export const closeButton = style({
  width: 24,
  height: 24,
  color: lightThemeVars.color.white.main,
});
