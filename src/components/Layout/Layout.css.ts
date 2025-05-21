import { style } from '@vanilla-extract/css';

import {
  NAVBAR_HEIGHT,
  SIDEBAR_BREAKPOINT,
  SIDEBAR_WIDTH_SMALL,
} from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

export const layoutContainer = style({
  display: 'flex',
  width: '100%',
  height: '100vh',
});

export const mainContent = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

export const contentArea = style({
  flex: 1,
  backgroundColor: lightThemeVars.color.white.background,
  paddingTop: NAVBAR_HEIGHT + 16,
  paddingRight: 16,
  paddingLeft: 16,
  overflow: 'auto',
  '@media': {
    [`(max-width: ${SIDEBAR_BREAKPOINT}px)`]: {
      paddingLeft: SIDEBAR_WIDTH_SMALL + 16,
    },
  },
});
