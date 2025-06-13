import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const rootContainer = style({
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.white.main,
  overflow: 'hidden',
});

export const headerActions = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: lightThemeVars.color.white.main,
  padding: 20,
});

export const header = style({
  borderTop: `1px solid ${lightThemeVars.color.primary[100]}`,
  backgroundColor: lightThemeVars.color.white.main,
});

export const headerRow = recipe({
  base: {
    display: 'flex',
    letterSpacing: -0.35,
    color: lightThemeVars.color.gray[500],
    fontSize: 14,
    fontWeight: 500,
  },
  variants: {
    align: {
      top: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      bottom: { alignItems: 'flex-end' },
    },
  },
});

export const headerCell = recipe({
  base: {
    display: 'flex',
    flexShrink: 0,
  },
  variants: {
    align: {
      left: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      right: { justifyContent: 'flex-end' },
    },
  },
});

export const body = style({
  minHeight: 500,
  overflow: 'auto',
});

export const row = recipe({
  base: {
    display: 'flex',
    borderBottom: `1px solid ${lightThemeVars.color.gray[100]}`,
    cursor: 'pointer',
    letterSpacing: -0.4,
    color: lightThemeVars.color.black,
    fontSize: 16,

    ':hover': {
      backgroundColor: lightThemeVars.color.gray[100],
    },
  },
  variants: {
    align: {
      top: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      bottom: { alignItems: 'flex-end' },
    },
  },
});

export const cell = recipe({
  base: {
    display: 'flex',
    flexShrink: 0,
  },
  variants: {
    align: {
      left: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      right: { justifyContent: 'flex-end' },
    },
  },
});
