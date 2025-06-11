import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  borderRadius: 8,
  padding: 20,
  paddingRight: 51,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 24,
  height: 34,
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.5,
  color: lightThemeVars.color.black,
  fontSize: 20,
  fontWeight: 600,
});

export const moreSection = style({
  display: 'flex',
  alignItems: 'center',
  color: lightThemeVars.color.gray[500],
});

export const moreText = style({
  lineHeight: 1.4,
  letterSpacing: -0.3,
  fontSize: 12,
  fontWeight: 500,
});

export const chevronIcon = style({
  width: 16,
});

export const noticeList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  width: '100%',
  height: 120,
});

export const noticeItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: 20,
});

export const noticeContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const bullet = style({
  borderRadius: '50%',
  backgroundColor: lightThemeVars.color.black,
  width: 4,
  height: 4,
});

export const noticeTitle = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});

export const noticeInfo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 180,
});

export const authorContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 60,
});

export const authorText = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});

export const dateText = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});
