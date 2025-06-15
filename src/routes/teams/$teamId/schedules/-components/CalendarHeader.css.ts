import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '13px 28px',
  width: '100%',
});

export const monthNavigation = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: 40,
  letterSpacing: -0.7,
  fontSize: 28,
  fontWeight: 600,
});

export const navButton = style({
  aspectRatio: 1,
  cursor: 'pointer',
  width: 24,
  color: lightThemeVars.color.black,
});

export const monthText = style({
  color: lightThemeVars.color.primary[700],
});

export const filtersContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  minWidth: 240,
  minHeight: 42,
  letterSpacing: -0.35,
  fontSize: 14,
});

export const filterTag = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  transition: 'all 0.2s ease',
  borderRadius: 90,
  backgroundColor: lightThemeVars.color.primary[300],
  cursor: 'pointer',
  padding: '10px 16px',
  ':hover': {
    backgroundColor: 'rgba(200, 215, 255, 1)',
  },
});

export const filterTagInactive = style({
  backgroundColor: lightThemeVars.color.gray[200],
  ':hover': {
    backgroundColor: lightThemeVars.color.gray[300],
  },
});

export const filterLabel = style({
  color: lightThemeVars.color.primary[700],
  fontWeight: 500,
});

export const filterLabelInactive = style({
  color: lightThemeVars.color.gray[500],
});

export const filterCount = style({
  width: 17,
  textAlign: 'right',
  color: lightThemeVars.color.primary[700],
  fontWeight: 600,
});

export const filterCountInactive = style({
  color: lightThemeVars.color.gray[500],
});
