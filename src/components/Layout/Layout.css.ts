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
  minHeight: '100dvh', // NOTE: 화면은 채우되 화면에 비해 콘텐츠가 크면 얼마든지 더 늘어날 수 있게 함
});

export const mainContent = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  overflow: 'hidden',
});

export const contentArea = style({
  display: 'flex',
  flex: 1,
  backgroundColor: lightThemeVars.color.white.background,
  paddingTop: NAVBAR_HEIGHT,
  overflow: 'auto',
  '@media': {
    [`(max-width: ${SIDEBAR_BREAKPOINT}px)`]: {
      paddingLeft: SIDEBAR_WIDTH_SMALL,
    },
  },
});
