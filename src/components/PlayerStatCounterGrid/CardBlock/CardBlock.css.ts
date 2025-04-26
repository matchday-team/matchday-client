import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

// FIXME: dashed 간격 늘려야 함
export const rootContainer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'center',
    gap: 10,
    transition: 'background-color 0.3s ease, border 0.3s ease',
    borderRadius: 6,
    width: '100%',

    height: 38,
  },
  variants: {
    caution: {
      none: {
        border: `1px dashed ${lightThemeVars.color.primary['100']}`,
        backgroundColor: lightThemeVars.color.white.background,

        ':hover': {
          backgroundColor: lightThemeVars.color.soccer.yellow,
        },
      },
      yellow: {
        border: `1px solid ${lightThemeVars.color.soccer.yellow}`,
        backgroundColor: lightThemeVars.color.soccer.yellow,
      },
      red: {
        border: `1px solid ${lightThemeVars.color.soccer.red}`,
        backgroundColor: lightThemeVars.color.soccer.red,
      },
    },
  },
});
