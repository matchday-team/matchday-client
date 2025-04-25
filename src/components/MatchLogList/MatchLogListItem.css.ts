import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

import { teamAwayColor, teamHomeColor } from './colors.css';

export const rootContainer = recipe({
  base: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',

    gap: 20,
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
export const commonText = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
  fontStyle: 'normal',
});

export const commonLineClamp = style({
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});

export const teamName = style([
  commonText,
  commonLineClamp,
  // NOTE: 우선 임의로 길이를 지정해서 ... 처리 추가함
  {
    width: 50,
  },
]);

export const text = style([commonText]);
