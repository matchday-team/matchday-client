import { commonPageRoot } from '@/styles/page.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPageRoot,
  {
    backgroundColor: lightThemeVars.color.white.background,
    width: 1336,
    minHeight: '100vh',
  },
]);

export const tableSection = style({
  marginTop: 20,
});
