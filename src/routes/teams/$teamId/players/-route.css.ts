import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: lightThemeVars.color.white.background,
  padding: '67px 52px 113px',
  overflow: 'hidden',
});
