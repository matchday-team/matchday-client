import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${lightThemeVars.color.primary[100]}`, // NOTE: 고정 폭 사용
  borderRadius: 10,

  background: '#fff',
  paddingBottom: 4,
  height: 228,
  overflow: 'hidden',
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${lightThemeVars.color.primary[100]}`,
  padding: '12px 20px',
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 600,
  fontStyle: 'normal',
});

export const logListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: 406, // NOTE: 고정 폭 사용
  overflow: 'auto',
});
