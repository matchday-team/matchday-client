import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const inputWrapper = style({
  position: 'relative',
  width: '100%',
});

export const textInputWithIcon = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  outline: '1.5px solid transparent',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 6,
  background: lightThemeVars.color.white.hover,
  padding: '9px 48px 9px 16px',
  width: '100%',
  height: 35,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 400,

  '::placeholder': {
    color: lightThemeVars.color.gray[300],
  },
  ':focus': {
    outline: `1.5px solid ${lightThemeVars.color.primary[700]}`,
  },
  selectors: {
    '&[aria-invalid="true"]': {
      border: `1.5px solid ${lightThemeVars.color.warning}`,
    },
    '&[aria-invalid="true"]:focus': {
      outline: `1.5px solid ${lightThemeVars.color.warning}`,
    },
  },
});

export const iconContainer = style({
  position: 'absolute',
  top: '50%',
  right: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  color: lightThemeVars.color.gray[300],
});
