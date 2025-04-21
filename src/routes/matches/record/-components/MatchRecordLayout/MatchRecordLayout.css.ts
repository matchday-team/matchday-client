import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

// NOTE: 현재 디자인은 고정 크기의 레이아웃으로 배치
export const rootContainer = style({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  justifyContent: 'flex-start',
  '@media': {
    '(min-width: 1440px)': {
      justifyContent: 'center',
    },
  },
  gap: 16,
  margin: '0 16px',
  minWidth: 1380,
  height: 964,
});

const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',

  // TODO: Sidebar 도입 시 bg 제거
  backgroundColor: lightThemeVars.color.white.background,
});

export const teamContainer = style([
  flexColumn,
  {
    marginTop: 12,
    width: 354,
  },
]);

export const statsContainer = style([
  flexColumn,
  {
    marginTop: 30,
    width: 280,
  },
]);

export const infoContainer = style([
  flexColumn,
  {
    marginTop: 30,
    width: 280,
  },
]);
