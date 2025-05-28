import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 7,
  width: 632,
});

export const fullWidthField = style({
  gridColumn: '1 / -1',
});

export const gridContainer = recipe({
  base: {
    display: 'grid',
    gap: 32,
  },
  variants: {
    columns: {
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
  },
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 12,
  marginTop: 56,
});
