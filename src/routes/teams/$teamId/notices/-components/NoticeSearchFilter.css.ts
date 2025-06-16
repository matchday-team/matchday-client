import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const searchContainer = style({
  flex: 1,
  maxWidth: 360,
});

export const filtersContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const filterSelect = style({
  width: 115,
});
