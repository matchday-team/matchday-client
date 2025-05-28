import { style } from '@vanilla-extract/css';
import { lightThemeRawValues, lightThemeVars } from 'src/styles/theme.css';

import { hexColorAlpha } from '@/utils/colorUtils';

export const selectContainer = style({
  position: 'relative',
  width: '100%',
});

export const select = style({
  boxSizing: 'border-box',
  outline: '1px solid transparent',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 6,
  backgroundColor: lightThemeVars.color.white.hover,
  padding: '7px 14px',
  paddingRight: 38,
  width: '100%',
  height: 38,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 400,

  ':focus': {
    outlineColor: lightThemeVars.color.primary[700],
  },
  selectors: {
    '&[aria-invalid="true"]': {
      borderColor: lightThemeVars.color.warning,
    },
    '&[aria-invalid="true"]:focus': {
      outlineColor: hexColorAlpha(lightThemeRawValues.color.warning, 80),
    },
  },
});

export const chevronIcon = style({
  position: 'absolute',
  top: '50%',
  right: 14,
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray[500],
});
