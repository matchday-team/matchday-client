import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const cautionContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  width: 17,
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});

export const playerCautionCard = recipe({
  base: {
    borderRadius: 2,
    width: 8,
    height: 10,
  },
  variants: {
    variant: {
      empty: {
        backgroundColor: lightThemeVars.color.white.background,
      },
      yellow: {
        backgroundColor: lightThemeVars.color.soccer.yellow,
      },
      red: {
        backgroundColor: lightThemeVars.color.soccer.red,
      },
    },
  },
});
