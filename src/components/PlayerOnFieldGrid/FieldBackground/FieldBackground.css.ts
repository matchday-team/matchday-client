import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  position: 'relative',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.field.background,
  height: '100%',
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
