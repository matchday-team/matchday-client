import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 28px)',
  alignContent: 'center',
  justifyContent: 'center',
  gap: 4,
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 10,
  background: lightThemeVars.color.white.main,
  width: 332,
  height: 76,
});

export const colorContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 28,
  height: 28,
});

export const selectedColor = recipe({
  base: {
    flexShrink: 0,
    gap: 4,
    transition: 'transform 0.1s',
    outline: 'none',
    borderRadius: 10,
    cursor: 'pointer',
    width: 18,
    height: 18,
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  variants: {
    selected: {
      true: {
        border: `1px solid ${lightThemeVars.color.gray[600]}`,
      },
    },
    isWhite: {
      true: {
        border: `1px solid ${lightThemeVars.color.gray[300]}`,
      },
    },
  },
  compoundVariants: [
    {
      variants: { selected: true, isWhite: true },
      style: {
        border: `1px solid ${lightThemeVars.color.gray[600]}`,
        outline: 'none',
      },
    },
  ],
});
