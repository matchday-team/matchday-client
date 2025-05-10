import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';
import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = recipe({
  base: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',

    gap: 12,
    borderBottom: `1px solid ${lightThemeVars.color.primary[100]}`,
    padding: '0 20px',
    height: 36,

    selectors: {
      '&:last-child': {
        borderBottom: 'none',
      },

      '&:hover': {
        backgroundColor: lightThemeVars.color.white.hover,
      },
    },
  },
  variants: {
    team: {
      home: {
        color: teamHomeColor,
      },
      away: {
        color: teamAwayColor,
      },
    },
  },
});

// NOTE: 중복 제거 필요해보임 (Typography)
const commonText = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
  fontStyle: 'normal',
});

const commonLineClamp = style({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});

export const teamName = style([
  commonText,
  commonLineClamp,
  {
    width: 50,
  },
]);

export const time = style([
  commonText,
  {
    width: 30,
  },
]);

export const name = style([
  commonText,
  {
    width: 50,
    textAlign: 'center',
  },
]);

export const event = style([
  commonText,
  commonLineClamp,
  {
    flex: 1,
  },
]);
