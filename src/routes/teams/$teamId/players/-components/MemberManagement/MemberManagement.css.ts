import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: lightThemeVars.color.white.background,
  padding: '67px 52px 113px',
  overflow: 'hidden',
  '@media': {
    '(max-width: 991px)': {
      padding: '67px 20px 100px',
    },
  },
});
