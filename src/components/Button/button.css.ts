import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const button = style({
  border: 'none',
  borderRadius: '4px',
  backgroundColor: lightThemeVars.color.primary,
  cursor: 'pointer',
  padding: lightThemeVars.spacing.medium,
  color: 'white',
  fontSize: lightThemeVars.font.size.medium,
  ':hover': {
    opacity: 0.9,
  },
});
