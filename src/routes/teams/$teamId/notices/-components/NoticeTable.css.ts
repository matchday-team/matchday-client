import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const tableOverride = style({});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  padding: '16px 40px',
});

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const pinIndicator = style({
  borderRadius: '50%',
  backgroundColor: lightThemeVars.color.primary[700],
  width: 8,
  height: 8,
});

export const noticeTitle = style({
  flex: 1,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 600,
});

export const noticeContent = style({
  display: '-webkit-box',
  overflow: 'hidden',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});

export const actionIcon = style({
  width: 24,
  height: 24,
  color: lightThemeVars.color.black,
});
