import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const rootContainer = style({
  width: '100%',
});

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '16px 0 16px 52px',
  lineHeight: 1.4,
  letterSpacing: -0.3,
  color: lightThemeVars.color.gray[500],
  fontSize: 12,
  fontWeight: 400,
});

export const headerRowContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 20,
  borderRadius: 0,
  width: '100%',
  maxWidth: 273,
});

export const opponentLabel = style({
  color: lightThemeVars.color.gray[500],
});

export const statsLabels = style({
  display: 'flex',
  gap: 24,
});

export const scoreLabel = style({
  color: lightThemeVars.color.gray[500],
});

export const personalStatsLabels = style({
  display: 'flex',
  gap: 12,
});

export const statsLabel = style({
  color: lightThemeVars.color.gray[500],
});

export const bodyContainer = style({
  width: '100%',
});

export const rowContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  borderBottom: `1px solid ${lightThemeVars.color.primary[100]}`,
  paddingRight: 20,
  paddingLeft: 20,
  width: '100%',
  minHeight: 40,
});

export const teamLogo = style({
  aspectRatio: '1',
  flexShrink: 0,
  justifyContent: 'center',
  objectFit: 'cover',
  width: 24,
});

export const matchInfo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 19,
  minWidth: 240,
});

export const matchMainInfo = style({
  display: 'flex',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
});

export const teamName = style({
  display: 'flex',
  width: 100,
  color: lightThemeVars.color.black,
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

export const playerStats = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
});

export const statValue = style({
  justifyContent: 'center',
  width: 17,
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});

export const cardDisplay = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  borderRadius: 4,
  width: 17,
});

export const cardPlaceholder = style({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 2,
  backgroundColor: lightThemeVars.color.white.background,
  width: 8,
  minHeight: 10,
});
