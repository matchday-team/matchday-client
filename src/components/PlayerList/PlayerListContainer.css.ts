import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

import { teamColor } from './TeamColor.css';

export const rootContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex', // NOTE: emptyContainer의 height 채우기 구현을 위해 추가
    flexDirection: 'column',
    border: `2px solid ${teamColor}`,
    borderRadius: 10,
    background: '#FFF',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  variants: {
    isDragOver: {
      true: {
        outline: `2px solid ${lightThemeVars.color.field.background}`,
      },
    },
    disabled: {
      true: {
        outline: `2px solid ${lightThemeVars.color.soccer.red}`,
      },
    },
  },
});

const commonText = style({
  lineHeight: 1.4,
  letterSpacing: -0.3,
  fontSize: 12,
  fontWeight: 400,
  fontStyle: 'normal',
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${lightThemeVars.color.primary[100]}`,
  padding: '12px 20px',
});

export const teamLogo = style({
  border: `2px solid ${teamColor}`,
  borderRadius: '50%',
  objectFit: 'cover',
  width: 26,
  height: 26,
});

export const teamInfo = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
});

export const teamName = style([
  commonText,
  {
    letterSpacing: -0.35,
    color: lightThemeVars.color.black,
    fontSize: 14,
    fontWeight: 500,
  },
]);

export const statContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
});

export const stat = style([
  commonText,
  {
    color: lightThemeVars.color.gray['500'],
  },
]);

export const playerListContainer = style({
  flex: 1,
  overflow: 'auto',
});

export const emptyContainer = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const emptyText = style({
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray['500'],
  fontSize: 14,
  fontWeight: 500,
});
