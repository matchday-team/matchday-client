import { commonPaper } from '@/styles/paper.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style([
  commonPaper,
  {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    gap: 34,
    padding: '0 0 0 20px',
    width: '100%',
    height: 116,
    overflow: 'hidden',
  },
]);

export const timeSection = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

export const timeDisplay = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const additionalTime = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 600,
});

export const mainTime = style({
  lineHeight: 1.4,
  letterSpacing: -1.05,
  color: lightThemeVars.color.black,
  fontSize: 42,
  fontWeight: 600,
});

export const controlSection = style({
  display: 'flex',
  flexDirection: 'column',
  borderLeft: `1px solid ${lightThemeVars.color.primary[100]}`,
  width: 84,
  height: '100%',
});
