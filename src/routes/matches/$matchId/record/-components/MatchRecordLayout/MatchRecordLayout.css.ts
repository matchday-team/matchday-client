import { style } from '@vanilla-extract/css';

import { commonPageRoot } from '@/styles/page.css';

// NOTE: 현재 디자인은 고정 크기의 레이아웃으로 배치
export const rootContainer = style([
  commonPageRoot,
  {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    gap: 16,
    marginTop: 60,
    paddingBottom: 80,
    minWidth: 1320,
  },
]);

const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const teamContainer = style([
  flexColumn,
  {
    width: 354,
  },
]);

export const centerContainer = style([
  flexColumn,
  {
    gap: 18,
    width: 280,
  },
]);

export const infoContainer = style([
  flexColumn,
  {
    gap: 16,
    width: 280,
  },
]);
