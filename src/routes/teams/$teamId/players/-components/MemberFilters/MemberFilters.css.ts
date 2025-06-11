import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 20,
  width: '100%',
});

export const searchContainer = style({
  flex: 1,
  maxWidth: 391,
});

export const filtersContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const filterSelect = style({
  minWidth: 120,
});
