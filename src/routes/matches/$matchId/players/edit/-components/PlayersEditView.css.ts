import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
});

export const fieldContainer = style({
  width: 354,
  height: 462,
});

export const allPlayersRootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: -26,
  width: 354,
});

export const allPlayersContainer = style({
  height: 648,
});

const commonDescription = style({
  marginLeft: 4,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
});

export const listTopDescription = style([
  commonDescription,
  {
    marginBottom: 6,
    color: lightThemeVars.color.gray[500],
    fontWeight: 500,
  },
]);

export const listBottomDescription = style([
  commonDescription,
  {
    marginTop: 26,
    color: lightThemeVars.color.primary[700],
    fontWeight: 400,
  },
]);

export const matchPlayerListRootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  width: 354,
});

export const starterListContainer = style({
  height: 462,
});

export const subListContainer = style({
  height: 170,
});

export const nextButton = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'flex-end', // NOTE: flex 부모를 전제하는 스타일이라 유지보수 적절성에 대해 고민이 됨 - 나중에 문제될 때 해결
  justifyContent: 'center',
  borderRadius: 8,
  backgroundColor: lightThemeVars.color.primary[700],
  padding: '12px 20px',
  width: 88,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.white.main,
  fontSize: 14,
  fontWeight: 600,
});
