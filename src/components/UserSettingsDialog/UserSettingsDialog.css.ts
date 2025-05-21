import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { commonPaper } from '@/styles/paper.css';
import { lightThemeVars } from '@/styles/theme.css';

export const dialog = style([
  commonPaper,
  {
    border: 'none',
    borderRadius: 10,
  },
]);

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 8,
  padding: 16,
  width: 320,
  height: 320,
});

export const footerContainer = style({
  display: 'flex',
  justifyContent: 'space-evenly',
  gap: 8,
});

export const button = recipe({
  base: {
    flex: 1,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: 16,
    fontSize: 16,
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: lightThemeVars.color.primary['700'],
        color: lightThemeVars.color.white.main,
        ':hover': {
          backgroundColor: lightThemeVars.color.primary['700Darken'],
        },
      },
      ghost: {
        border: `1px solid ${lightThemeVars.color.white.hover}`,
        backgroundColor: lightThemeVars.color.white.main,
        color: lightThemeVars.color.black,
        ':hover': {
          backgroundColor: lightThemeVars.color.white.hover,
        },
      },
    },
  },
});
