import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const filterContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '40px 100px',
  padding: 20,
  width: '100%',
});

export const searchContainer = style({
  display: 'flex',
  gap: 10,
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 10,
  backgroundColor: '#FFF',
  padding: '10px 16px',
  width: 391,
  minWidth: 240,
  minHeight: 44,
});

export const searchIcon = style({
  margin: 'auto 0',
  width: 24,
  height: 24,
});

export const sortContainer = style({
  display: 'flex',
  gap: 8,
  margin: 'auto 0',
  letterSpacing: -0.4,
  color: '#767676',
  fontSize: 16,
  fontWeight: 500,
});

export const sortButton = style({
  display: 'flex',
  gap: 10,
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 8,
  backgroundColor: '#FFF',
  padding: '10px 24px 10px 16px',
  minHeight: 44,
});

export const sortText = style({
  margin: 'auto 0',
  color: '#767676',
});

export const chevronIcon = style({
  margin: 'auto 0',
  width: 24,
  height: 24,
});
