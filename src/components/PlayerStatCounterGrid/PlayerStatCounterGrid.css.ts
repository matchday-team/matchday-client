import { style } from '@vanilla-extract/css';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { commonPaper } from '@/styles/paper.css';
import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style([
  commonPaper,
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    border: `2px solid ${teamColor}`,
  },
]);

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 22,
  paddingBottom: 18, // NOTE: 현재 디자인이 border 미포함 높이라서 border만큼 빼줘야 함
});

export const grid2x2Container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: 16,
  columnGap: 8,
});

export const cautionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  width: 127,
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray['600'],
  fontSize: 14,
  fontWeight: 400,
});

export const cardBlockContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
});
