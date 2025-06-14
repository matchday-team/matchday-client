import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  fontWeight: 500,
  '@media': {
    '(max-width: 991px)': {
      maxWidth: '100%',
    },
  },
});

export const searchContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'space-between',
  gap: '100px',
  marginTop: 'auto',
  marginBottom: 'auto',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.white.main,
  padding: '10px 16px',
  width: 391,
  minWidth: 240,
  minHeight: 44,
  letterSpacing: '-0.35px',
  color: lightThemeVars.color.gray[300],
  fontSize: 14,
});

export const searchInput = style({
  flex: 1,
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  letterSpacing: '-0.35px',
  color: lightThemeVars.color.gray[300],
  fontSize: 14,
  '::placeholder': {
    color: lightThemeVars.color.gray[300],
  },
});

export const searchInputFocused = style({
  color: lightThemeVars.color.black,
});

export const searchIcon = style({
  aspectRatio: '1',
  flexShrink: 0,
  objectFit: 'contain',
  objectPosition: 'center',
  width: 24,
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
