import { commonPaper } from '@/styles/paper.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPaper,
  {
    display: 'flex',
    flex: 1, // NOTE: 고정 폭 사용
    flexDirection: 'column',
    gap: 32,
    border: `1px solid ${lightThemeVars.color.primary[100]}`,
    paddingBottom: 4, // FIXME.
    overflow: 'auto',
  },
]);

export const listHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  paddingTop: 16,
  paddingRight: 100,
  paddingLeft: 100,
  height: 36,
});

export const listHeaderItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 150,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
});
