import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.white.main,
  width: '100%',
  height: 700,
});

export const table = style({
  width: '100%',
  height: '100%',
});

export const typeCell = style({
  padding: '16px 10px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.black,
  fontWeight: 400,
});

export const nameCell = style({
  padding: '16px 10px',
  color: lightThemeVars.color.black,
  fontWeight: 400,
});

export const opponentContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: 12,
  padding: '16px 10px',
  whiteSpace: 'nowrap',
});

export const opponentLogo = style({
  aspectRatio: '1',
  flexShrink: 0,
  objectFit: 'contain',
  objectPosition: 'center',
  width: 44,
});

export const opponentName = style({
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  width: 47,
  color: lightThemeVars.color.black,
  fontWeight: 500,
});

export const resultCell = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '16px 10px',
  minHeight: 22,
  whiteSpace: 'nowrap',
  fontWeight: 500,
});

export const win = style({
  color: lightThemeVars.color.primary[700],
});

export const loss = style({
  color: '#C63535',
});

export const draw = style({
  color: lightThemeVars.color.gray[500],
});

export const durationCell = style({
  alignSelf: 'stretch',
  justifyContent: 'center',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '16px 10px',
  minHeight: 22,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.black,
  fontWeight: 500,
});

export const locationCell = style({
  alignSelf: 'stretch',
  justifyContent: 'center',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '16px 10px',
  minHeight: 22,
  color: lightThemeVars.color.gray[500],
});

export const dateCell = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '16px 10px',
  minHeight: 22,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.gray[500],
});

export const actionIcon = style({
  aspectRatio: '1',
  flexShrink: 0,
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  objectFit: 'contain',
  objectPosition: 'center',
  cursor: 'pointer',
  width: 24,
  color: lightThemeVars.color.gray[500],
});
