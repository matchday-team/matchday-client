import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const TextInput = style({
  flexShrink: 0,
  outline: 'none',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 6,
  background: lightThemeVars.color.white.hover,
  padding: '9px 16px',
  width: 300,
  height: 38,
  selectors: {
    '&::placeholder': {
      lineHeight: 1.4,
      letterSpacing: -0.35,
      color: lightThemeVars.color.gray[300],
      fontSize: 14,
      fontWeight: 400,
    },
    '&:focus': {
      border: `1.5px solid ${lightThemeVars.color.primary[700]}`,
    },
    '&[aria-invalid="true"]': {
      border: `1.5px solid ${lightThemeVars.color.warning}`,
    },
    '&[aria-invalid="true"]:focus': {
      border: `1.5px solid ${lightThemeVars.color.warning}`,
    },
  },
});
