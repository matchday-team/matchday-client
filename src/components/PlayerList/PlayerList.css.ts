import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  border: '2px solid #D91920',
  borderRadius: 10,
  background: '#FFF',
  height: 462, // NOTE: 고정 폭 사용
});

const commonText = style({
  lineHeight: '140%',
  letterSpacing: '-0.3px',
  fontSize: '12px',
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
  border: '2px solid #D91920',
  borderRadius: '50%',
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
    letterSpacing: '-0.35px',
    color: lightThemeVars.color.black,
    fontSize: '14px',
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
  height: 406, // NOTE: 고정 폭 사용
  overflow: 'auto',
});
