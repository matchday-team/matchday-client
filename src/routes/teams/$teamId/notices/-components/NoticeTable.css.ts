import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const tableOverride = style({});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,
  padding: '16px 40px',
});

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const pinIndicator = style({
  flexShrink: 0,
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
  lineHeight: '24px',
  whiteSpace: 'nowrap',
  color: '#1A1A1A',
  fontSize: 16,
  fontWeight: 600,
});

export const noticeContent = style({
  display: '-webkit-box',
  overflow: 'hidden',
  lineHeight: '20px',
  color: '#767676',
  fontSize: 14,
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});

export const actionIcon = style({
  width: 24,
  height: 24,
  color: '#C7C7C7',
});
