import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.primary[800],
  padding: '20px 23px',
  height: 118,
});

export const scoreContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  width: 105,
});

export const scoreText = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -1,
  color: lightThemeVars.color.white.main,
  fontSize: 40,
  fontWeight: 600,
});

export const colonText = style({
  marginBottom: 6,
  lineHeight: 1.4,
  letterSpacing: -1,
  color: lightThemeVars.color.white.main,
  fontSize: 40,
  fontWeight: 600,
});

export const teamContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  width: 64, // NOTE: 로고 영역이 outline 사용해서 64가 안 돼서 필요
});

export const logoWrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: `3px solid ${lightThemeVars.color.white.main}`,
    borderRadius: '50%',
    backgroundColor: lightThemeVars.color.white.main,
    width: 51,
    height: 51,
  },
  variants: {
    isHome: {
      true: {
        border: `3px solid ${teamHomeColor}`,
      },
      false: {
        border: `3px solid ${teamAwayColor}`,
      },
    },
  },
  defaultVariants: {
    isHome: false,
  },
});

export const logo = style({
  objectFit: 'cover',
  width: 32,
  height: 32,
});

export const teamName = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.white.main,
  fontSize: 14,
  fontWeight: 600,
});

export const region = style({
  width: '100%',
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.primary[300],
  fontSize: 14,
  fontWeight: 400,
});
