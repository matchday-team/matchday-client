import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const commonContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #ccc',
  borderRadius: 8,
  backgroundColor: lightThemeVars.color.white.main,
  padding: 16,
  height: '100%',
  overflow: 'auto',
});
