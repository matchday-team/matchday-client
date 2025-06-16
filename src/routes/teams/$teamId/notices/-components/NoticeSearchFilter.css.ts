import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  width: '100%',
});

export const searchContainer = style({
  flex: 1,
  maxWidth: 400,
});

export const filtersContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const filterSelect = style({
  minWidth: 120,
});
