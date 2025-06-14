import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  boxSizing: 'border-box',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.05)',
  width: 354,
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.primary[800],
  padding: 12,
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
