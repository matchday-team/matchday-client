import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: '100%',
});

export const labelContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const value = recipe({
  base: {
    width: 14,
    lineHeight: 1.4,
    letterSpacing: -0.35,
    color: lightThemeVars.color.black,
    fontSize: 14,
    fontWeight: 500,
  },
  variants: {
    align: {
      right: {
        textAlign: 'right',
      },
    },
  },
  defaultVariants: {},
});

export const label = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});

export const barContainer = style({
  display: 'flex',
  gap: 4,
});
