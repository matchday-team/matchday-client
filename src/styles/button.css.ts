import { style } from '@vanilla-extract/css';

import { lightThemeVars } from './theme.css';

export const button = style({
  padding: lightThemeVars.spacing.medium,
  backgroundColor: lightThemeVars.color.primary,
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: lightThemeVars.font.size.medium,
  ':hover': {
    opacity: 0.9,
  },
});
