import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const dropdownItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: '8px 12px',
  width: '100%',
  textAlign: 'left',
  color: lightThemeVars.color.black,
  fontSize: 14,

  ':hover': {
    backgroundColor: lightThemeVars.color.white.hover,
  },

  ':focus': {
    outline: 'none',
    backgroundColor: lightThemeVars.color.white.hover,
  },
});

export const dropdownItemText = style({
  flex: 1,
});
