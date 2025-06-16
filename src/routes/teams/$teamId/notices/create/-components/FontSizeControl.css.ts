import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const fontSizeControl = style({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${lightThemeVars.color.gray[200]}`,
  borderRadius: 6,
  backgroundColor: lightThemeVars.color.white.main,
  overflow: 'hidden',
});

export const sizeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  width: 28,
  height: 28,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 'bold',

  ':hover': {
    backgroundColor: lightThemeVars.color.white.hover,
  },

  ':disabled': {
    opacity: 0.4,
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },

  ':active': {
    backgroundColor: lightThemeVars.color.gray[100],
  },
});

export const sizeInput = style({
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'text',
  width: 50,
  height: 28,
  textAlign: 'center',
  fontSize: 14,

  // Remove number input spinners
  selectors: {
    '&::-webkit-outer-spin-button': {
      margin: 0,
      WebkitAppearance: 'none',
    },
    '&::-webkit-inner-spin-button': {
      margin: 0,
      WebkitAppearance: 'none',
    },
    '&[type="number"]': {
      MozAppearance: 'textfield',
    },
  },
});
