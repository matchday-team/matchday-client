import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const container = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 60,
  width: '100%',
});

export const stepperWrapper = style({
  position: 'relative',
  width: 178,
  height: 28,
});

export const stepLine = recipe({
  base: {
    position: 'absolute',
    top: 'calc(50% - 1px)',
    left: 20,
    width: 89,
    height: 2,
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: lightThemeVars.color.primary[700],
      },
      false: {
        backgroundColor: lightThemeVars.color.gray[300],
      },
    },
  },
});

export const step = recipe({
  base: {
    position: 'absolute',
    zIndex: 1,
    top: 'calc(50% - 14px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 28,
    height: 28,
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: lightThemeVars.color.primary[700],
      },
      false: {
        backgroundColor: lightThemeVars.color.gray[300],
      },
    },
    step: {
      1: {
        left: 0,
      },
      2: {
        left: 91,
      },
      3: {
        left: 151,
      },
    },
  },
});

export const stepContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const stepNumber = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  height: 28,
});

export const stepText = style({
  margin: 0,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.white.main,
  fontFamily: 'Pretendard Variable',
  fontSize: 14,
  fontWeight: 600,
});

export const step1 = style({});
export const step2 = style({});
export const step3 = style({});
