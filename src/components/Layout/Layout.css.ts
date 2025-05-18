import { style } from '@vanilla-extract/css';

import { NAVBAR_HEIGHT } from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

export const layoutContainer = style({
  display: 'flex',
  width: '100%',
});

export const mainContent = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  overflow: 'hidden',
});

export const contentArea = style({
  flex: 1,
  backgroundColor: lightThemeVars.color.white.background,
  padding: 16,
  paddingTop: NAVBAR_HEIGHT + 16,
  overflow: 'auto',
});
