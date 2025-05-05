import { style } from '@vanilla-extract/css';

import { NAVBAR_HEIGHT } from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

export const main = style({
  marginLeft: 'auto',
  backgroundColor: lightThemeVars.color.white.hover,
  paddingTop: NAVBAR_HEIGHT,
  minHeight: '100vh',
});
