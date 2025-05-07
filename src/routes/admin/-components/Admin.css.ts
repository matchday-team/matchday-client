import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  padding: 16,
  height: '100vh',
});

export const formsContainer = style({
  boxSizing: 'border-box',
  display: 'grid',
  flex: 1,
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 16,
  overflow: 'hidden',
});
