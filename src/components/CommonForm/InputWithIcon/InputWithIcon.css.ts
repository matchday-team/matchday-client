import { lightThemeRawValues, lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

import { hexColorAlpha } from '@/styles/colorUtils';

export const inputWrapper = style({
  position: 'relative',
  width: '100%',
});

export const textInputWithIcon = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  transition: 'border-color, outline 0.2s ease-in-out',
  outline: '1px solid transparent',

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
  '::-webkit-calendar-picker-indicator': {
    // NOTE: typ=date 사용 시 기본 아이콘 숨김
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0,
    cursor: 'pointer',
    width: '100%',
    height: '100%',
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

export const iconContainer = style({
  position: 'absolute',
  top: '50%',
  right: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  color: lightThemeVars.color.gray[300],
});
