import { style } from '@vanilla-extract/css';

import { commonPaper } from '@/styles/paper.css';
import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style([
  commonPaper,
  {
    display: 'flex',
    flex: 1, // NOTE: 고정 폭 사용
    flexDirection: 'column',
    border: `1px solid ${lightThemeVars.color.primary[100]}`,
    paddingBottom: 4,
    width: 1363, // FIXME.
    overflow: 'auto',
  },
]);

export const listHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  paddingRight: 100,
  paddingLeft: 100,
});

export const listHeaderItem = style({
  width: 150,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});
