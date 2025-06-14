import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  fontWeight: 500,
});

export const searchContainer = style({
  flex: 1,
  maxWidth: 391,
});

export const filtersContainer = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'start',
  gap: 8,
  marginTop: 'auto',
  marginBottom: 'auto',
  minWidth: 240,
  letterSpacing: '-0.4px',
  color: lightThemeVars.color.gray[500],
  fontSize: 16,
});

export const filterSelect = style({
  minWidth: 'fit-content',
});
