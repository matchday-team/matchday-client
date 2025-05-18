import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 16,
});

export const formsContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flex: 1,
  gap: 16,
  overflow: 'auto',
});
