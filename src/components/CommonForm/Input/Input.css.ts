import { lightThemeRawValues, lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

import { hexColorAlpha } from '@/styles/colorUtils';

export const rootContainer = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  transition: 'border-color, outline 0.2s ease-in-out',
  outline: '1px solid transparent',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 6,
  background: lightThemeVars.color.white.hover,
  padding: '9px 16px',
  width: '100%',
  height: 38,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 400,

  '::placeholder': {
    color: lightThemeVars.color.gray[300],
  },
  ':focus': {
    outlineColor: lightThemeVars.color.primary[700],
  },
  selectors: {
    '&[aria-invalid="true"]': {
      borderColor: lightThemeRawValues.color.warning,
    },
    '&[aria-invalid="true"]:focus': {
      outlineColor: hexColorAlpha(lightThemeRawValues.color.warning, 80),
    },
  },
});
