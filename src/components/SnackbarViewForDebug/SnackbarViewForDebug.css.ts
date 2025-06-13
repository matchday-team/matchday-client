import { commonPaper } from '@/styles/paper.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const rootContainer = style([
  commonPaper,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    borderRadius: 2,
    backgroundColor: lightThemeVars.color.white.background,
    overflow: 'hidden',
    lineHeight: 1.4,
    letterSpacing: -0.35,
    color: lightThemeVars.color.gray[600],
    fontSize: 10,
    fontWeight: 400,
  },
]);

export const messageColor = recipe({
  base: {
    width: 4,
    height: 16,
  },
  variants: {
    variant: {
      success: {
        backgroundColor: lightThemeVars.color.field.background,
      },
      error: {
        backgroundColor: lightThemeVars.color.soccer.red,
      },
      warning: {
        backgroundColor: lightThemeVars.color.soccer.yellow,
      },
      info: {
        backgroundColor: lightThemeVars.color.primary[700],
      },
    },
  },
});
