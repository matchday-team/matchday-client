import { commonPageRoot } from '@/styles/page.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPageRoot,
  {
    display: 'flex',
    backgroundColor: lightThemeVars.color.white.background,
    paddingTop: 60,
    paddingBottom: 60,
    overflow: 'hidden',
  },
]);

export const pageHeader = style({
  borderBottom: `1px solid ${lightThemeVars.color.primary[100]}`,
  backgroundColor: lightThemeVars.color.white.main,
  padding: '20px 32px',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.primary[700],
  fontSize: 16,
  fontWeight: 500,
});

export const contentGrid = style({
  display: 'flex',
  gap: 20,
});

export const calendarColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const detailColumn = style({
  display: 'flex',
  flexDirection: 'column',
});
