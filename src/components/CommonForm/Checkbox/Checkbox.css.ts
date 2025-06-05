import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

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

export const checkboxInput = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    appearance: 'none',
    border: `1px solid ${lightThemeVars.color.gray[500]}`,
    borderRadius: 4,
    background: lightThemeVars.color.white.main,
    cursor: 'pointer',
    width: 20,
    height: 20,

    ':focus': {
      outline: `1px solid ${lightThemeVars.color.primary[700]}`,
    },
  },
  variants: {
    disabled: {
      true: {
        borderColor: lightThemeVars.color.primary[100],
        background: lightThemeVars.color.white.background,
        cursor: 'not-allowed',
      },
    },
  },
});

export const checkIcon = recipe({
  base: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'none',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    width: 10,
    height: 6,
    color: lightThemeVars.color.primary[700],
  },
  variants: {
    disabled: {
      true: { display: 'flex', color: lightThemeVars.color.gray[500] },
    },
    checked: {
      false: { display: 'none' },
      true: { display: 'flex' },
    },
  },
});

export const checkboxLabel = recipe({
  base: {
    lineHeight: 1.4,
    letterSpacing: -0.35,
    color: lightThemeVars.color.black,
    fontSize: 14,
    fontWeight: 500,
  },
  variants: {
    disabled: {
      true: {
        color: lightThemeVars.color.gray[500],
      },
    },
  },
});
