import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  position: 'relative',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.field.background,
  width: '100%',
  height: '100%',
  overflow: 'hidden', // NOTE: 각 Cell에서 bgColor를 지정하므로 border 부분을 잘리게 표현하기 위함
});

const commonFieldBackgroundStyle = style({
  position: 'absolute',
  transform: 'translateX(-50%)',
  pointerEvents: 'none', // NOTE: svg bg와 겹칠 때 여기로 hover 이벤트가 먹어서 안 보이는 점 수정하기 위함
});

export const innerPenaltyBox = style([
  commonFieldBackgroundStyle,
  {
    bottom: 0,
    left: '50%',
  },
]);

export const outerPenaltyBox = style([
  commonFieldBackgroundStyle,
  {
    bottom: 0,
    left: '50%',
  },
]);

export const centerCircleHalf = style([
  commonFieldBackgroundStyle,
  {
    top: 0,
    left: '50%',
  },
]);

export const gridContainer = style({
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridTemplateColumns: 'repeat(5, 1fr)',
  width: '100%',
  height: '100%',
});
