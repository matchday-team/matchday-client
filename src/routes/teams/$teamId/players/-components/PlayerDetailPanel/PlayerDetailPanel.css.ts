import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.white.main,
  width: '100%',
  maxWidth: 480,
});
