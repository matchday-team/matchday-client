import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  paddingRight: 100,
  paddingLeft: 100,
});

export const item = style({
  width: 150,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
