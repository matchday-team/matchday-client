import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const matchRecordTable = style({
  width: '100%',
});

export const opponentCell = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const teamLogo = style({
  aspectRatio: '1',
  flexShrink: 0,
  objectFit: 'cover',
  width: 24,
});

export const teamName = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});

export const scoreDisplay = recipe({
  base: {
    display: 'flex',
    gap: 4,
  },
  variants: {
    result: {
      win: {
        color: lightThemeVars.color.primary[700],
      },
      loss: {
        color: lightThemeVars.color.soccer.red,
      },
    },
  },
});

export const scoreNumber = recipe({
  base: {
    width: 17,
  },
  variants: {
    team: {
      home: {
        textAlign: 'right',
      },
      away: {
        textAlign: 'left',
      },
    },
  },
});

export const scoreColon = style({
  justifyContent: 'center',
});

export const scoreNumberWrapper = style({
  width: 17,
});
