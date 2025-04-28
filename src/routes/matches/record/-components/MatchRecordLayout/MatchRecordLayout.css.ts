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
  backgroundColor: lightThemeVars.color.gray[100],
  minWidth: 1380,
  height: 964,
});

const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const teamContainer = style([
  flexColumn,
  {
    marginTop: 12,
    width: 354,
  },
]);

export const centerContainer = style([
  flexColumn,
  {
    gap: 18,
    marginTop: 30,
    width: 280,
  },
]);

export const infoContainer = style([
  flexColumn,
  {
    gap: 16,
    marginTop: 30,
    width: 280,
  },
]);
