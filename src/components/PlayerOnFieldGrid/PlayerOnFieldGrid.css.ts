import { style } from '@vanilla-extract/css';

export const grid = style({
  display: 'grid',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridTemplateColumns: 'repeat(5, 1fr)',
  width: '100%',
  height: '100%',
});
