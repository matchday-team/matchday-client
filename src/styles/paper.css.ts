import { style } from '@vanilla-extract/css';

import { lightThemeVars } from './theme.css';

export const commonPaper = style({
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  background: lightThemeVars.color.white.main,
});
