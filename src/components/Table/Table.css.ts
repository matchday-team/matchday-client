import { lightThemeVars } from '@/styles/theme.css';

import { createVar, style } from '@vanilla-extract/css';

export const tableWidthVars = {
  totalWidth: createVar(),
};

export const columnWidthVars = {
  width: createVar(),
};

export const container = style({
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.white.main,
  width: tableWidthVars.totalWidth,
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

export const headerRow = style({
  display: 'flex',
  alignItems: 'center',
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});

export const headerCell = style({
  display: 'flex',
  flexShrink: 0,
  width: columnWidthVars.width,
});

export const body = style({
  minHeight: 500,
  overflow: 'auto',
});

export const row = style({
  display: 'flex',
  borderBottom: `1px solid ${lightThemeVars.color.gray[100]}`,
  cursor: 'pointer',
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,

  ':hover': {
    backgroundColor: lightThemeVars.color.gray[100],
  },
});

export const cell = style({
  display: 'flex',
  flexShrink: 0,
  width: columnWidthVars.width,
});
