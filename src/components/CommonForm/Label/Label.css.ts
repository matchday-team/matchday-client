import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  minWidth: 0, // NOTE: 기본값이 min-width: auto이며 flex:1, width:100% 으로 작아지지 않음
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});

export const labelContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  marginBottom: 8, // NOTE: gap이 달라서 추가로 보정한 것
});

export const requiredMark = style({
  color: lightThemeVars.color.primary[700],
  fontWeight: 600,
});
