import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  position: 'relative',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.field.background,
  height: '100%',
  overflow: 'hidden', // NOTE: 각 Cell에서 bgColor를 지정하므로 border 부분을 잘리게 표현하기 위함
});

export const innerPenaltyBox = style({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
});

export const outerPenaltyBox = style({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
});

export const centerCircleHalf = style({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
});
