import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

import { NAVBAR_HEIGHT } from '@/constants';

export const layoutContainer = style({
  display: 'flex',
  width: '100%',
  height: '100dvh',
});

export const mainContent = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  height: '100dvh',
  overflow: 'auto',
});

export const contentArea = style({
  display: 'flex',
  flex: 1,
  backgroundColor: lightThemeVars.color.white.background,
  paddingTop: NAVBAR_HEIGHT,
});
