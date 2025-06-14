import { commonPageRoot } from '@/styles/page.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPageRoot,
  {
    backgroundColor: lightThemeVars.color.white.background,
    minHeight: '100vh',
  },
]);

export const contentContainer = style({
  marginTop: 20,
  marginRight: 22,
  marginLeft: 21,
  maxWidth: 1336,
});

export const tableSection = style({
  marginTop: 20,
});
