import { style } from '@vanilla-extract/css';

export const optionButton = style({
  border: 'none',
  background: 'none',
  padding: '8px 16px',
  width: '100%',
  textAlign: 'left',
});

export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});
