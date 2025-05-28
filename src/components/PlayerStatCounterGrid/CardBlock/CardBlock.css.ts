import { recipe } from '@vanilla-extract/recipes';

import { lightThemeRawValues, lightThemeVars } from '@/styles/theme.css';
import { colorUtils } from '@/utils';

// FIXME: dashed 간격 늘려야 함
export const rootContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    transition: 'background-color 0.3s ease, border 0.3s ease',
    borderRadius: 6,
    cursor: 'pointer',
    width: 30,
    height: 39,
  },
  variants: {
    caution: {
      yellow: {
        border: `2px solid ${lightThemeVars.color.soccer.yellow}`,
        backgroundColor: colorUtils.hexColorAlpha(
          lightThemeRawValues.color.soccer.yellow,
          10,
        ),
        ':hover': {
          backgroundColor: lightThemeVars.color.soccer.yellow,
        },
      },
      red: {
        border: `2px solid ${lightThemeVars.color.soccer.red}`,
        backgroundColor: colorUtils.hexColorAlpha(
          lightThemeRawValues.color.soccer.red,
          10,
        ),
        ':hover': {
          backgroundColor: lightThemeVars.color.soccer.red,
        },
      },
    },
    active: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        caution: 'yellow',
        active: true,
      },
      style: {
        backgroundColor: lightThemeVars.color.soccer.yellow,
      },
    },
    {
      variants: {
        caution: 'red',
        active: true,
      },
      style: {
        backgroundColor: lightThemeVars.color.soccer.red,
      },
    },
  ],
  defaultVariants: {
    active: false,
  },
});
