import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${lightThemeVars.color.primary['100']}`,
  borderRadius: 10,
  height: 186,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '16px 24px',
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: '#000000',
  fontSize: 14,
  fontWeight: 500,
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  height: 144,
  overflowY: 'auto',
});
