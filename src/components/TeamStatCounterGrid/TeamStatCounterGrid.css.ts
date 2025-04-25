import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'grid',
  gridTemplateRows: 'repeat(2, 80px)',
  gridTemplateColumns: 'repeat(3, 110px)',
  gap: 4,
});
