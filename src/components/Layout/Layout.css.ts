import { style } from '@vanilla-extract/css';

import { NAVBAR_HEIGHT } from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

export const layoutContainer = style({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
});

export const mainContent = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
});

export const contentArea = style({
  flex: 1,
  backgroundColor: '#f5f5f5',
  padding: 16,
  overflow: 'auto',
});

export const contentAreaNested = style({
  marginLeft: 'auto',
  backgroundColor: lightThemeVars.color.white.hover,
  paddingTop: NAVBAR_HEIGHT,
  minHeight: '100vh',
});
