import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const button = style({
  border: 'none',
  borderRadius: '4px',
  backgroundColor: lightThemeVars.color.primary['700'],
  cursor: 'pointer',
  padding: 16,
  color: 'white',
  fontSize: 16,
  ':hover': {
    backgroundColor: lightThemeVars.color.primary['700Darken'],
  },
});
