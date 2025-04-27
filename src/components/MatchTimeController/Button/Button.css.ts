import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const controlButton = recipe({
  base: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    lineHeight: 1.6,
    fontSize: 14,
    fontWeight: 600,
  },
  variants: {
    isActive: {
      true: {
        background: lightThemeVars.color.primary[700],
        color: lightThemeVars.color.white.main,
        ':hover': {
          background: lightThemeVars.color.primary['700Darken'],
        },
      },
      false: {
        background: lightThemeVars.color.white.main,
        color: lightThemeVars.color.gray[500],
        ':hover': {
          background: lightThemeVars.color.white.hover,
        },
      },
    },
  },
});
