import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  width: '100%',
  '@media': {
    '(max-width: 991px)': {
      maxWidth: '100%',
    },
  },
});

export const searchContainer = style({
  display: 'flex',
  flexGrow: 1,
  flexShrink: 1,
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginRight: 8,
  marginBottom: 'auto',
  width: 321,
  minWidth: 240,
});

export const searchInputWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.white.main,
  width: '100%',
  minHeight: 44,
});

export const searchIcon = style({
  position: 'absolute',
  zIndex: 1,
  left: 16,
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray[500],
});

export const searchInput = style({
  outline: 'none',
  border: 'none',
  borderRadius: 10,
  backgroundColor: 'transparent',
  padding: '10px 16px 10px 48px',
  width: '100%',
  minHeight: 44,
  letterSpacing: -0.4,
  fontSize: 16,
  fontWeight: 500,
  '::placeholder': {
    color: lightThemeVars.color.gray[500],
  },
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
  '@media': {
    '(max-width: 991px)': {
      flexWrap: 'wrap',
    },
  },
});

export const filterSelect = style({
  outline: 'none',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 8,
  backgroundColor: lightThemeVars.color.white.main,
  cursor: 'pointer',
  padding: '10px 16px',
  minWidth: 120,
  minHeight: 44,
  letterSpacing: -0.4,
  color: lightThemeVars.color.gray[500],
  fontSize: 16,
  fontWeight: 500,
  '@media': {
    '(max-width: 991px)': {
      minWidth: 100,
    },
  },
});
