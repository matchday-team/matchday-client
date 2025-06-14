import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 240,
});

export const goalItem = recipe({
  base: {
    display: 'flex',
    margin: '0 12px',
    borderBottom: `1px solid ${lightThemeVars.color.primary[300]}`,
    width: '100%',
    height: 20,
    lineHeight: 1.4,
    letterSpacing: -0.35,
  },
  variants: {
    team: {
      home: {
        justifyContent: 'flex-start',
      },
      away: {
        justifyContent: 'flex-end',
      },
    },
  },
});

export const goalText = recipe({
  base: {
    width: 80,
    color: lightThemeVars.color.white.main,
  },
  variants: {
    team: {
      home: {
        paddingLeft: 30,
        textAlign: 'right',
      },
      away: {
        paddingRight: 30,
        textAlign: 'left',
      },
    },
  },
});

export const goalIcon = style({
  objectFit: 'contain',
  objectPosition: 'center',
  width: '100%',
  height: 'auto',
});
