import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const wrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const checkboxWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  width: 28,
  height: 28,
});

export const checkboxInput = style({
  position: 'relative',
  display: 'flex',
  appearance: 'none',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 4,
  background: lightThemeVars.color.white.background,
  cursor: 'pointer',
  width: 20,
  height: 20,
  ':checked': {
    borderColor: lightThemeVars.color.primary[700],
    background: lightThemeVars.color.white.main,
  },
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const checkIcon = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
  width: 10,
  height: 6,
  color: lightThemeVars.color.primary[100],
  selectors: {
    [`${checkboxWrapper} input:checked + &`]: {
      color: lightThemeVars.color.primary[700],
    },
    [`${checkboxWrapper} input:disabled + &`]: {
      display: 'none',
    },
  },
});

export const checkboxLabel = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
  selectors: {
    '&[data-checked="true"]': {
      color: lightThemeVars.color.black,
    },
  },
});
