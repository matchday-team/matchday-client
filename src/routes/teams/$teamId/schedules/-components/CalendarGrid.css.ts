import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

// 이벤트 배경색 상수
const EVENT_COLORS = {
  league: lightThemeVars.color.primary[300],
  friendly: 'rgba(255, 232, 219, 1)',
  other: 'rgba(219, 255, 229, 1)',
  hoverPrimary: 'rgba(0, 67, 255, 0.05)',
} as const;

export const gridContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 14,
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 500,
});

export const row = style({
  display: 'flex',
  alignItems: 'center',
});

export const weekHeaderCell = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '23px 10px',
  width: 128,
  height: 100,
});

export const weekHeaderText = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 4,
  borderRadius: 100,
  width: 44,
  minHeight: 44,
  color: lightThemeVars.color.black,
});

export const dayInactive = style({
  color: lightThemeVars.color.gray[500],
});

export const dayCell = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 1,
  alignItems: 'center',
  transition: 'background-color 0.2s ease',
  cursor: 'pointer',
  padding: '23px 10px',
  width: 128,
  height: 100,
  overflow: 'hidden',
  ':hover': {
    borderRadius: 8,
    backgroundColor: EVENT_COLORS.hoverPrimary,
  },
});

export const dayCellWithEvents = style({
  backgroundColor: lightThemeVars.color.white.main,
  padding: '9px 10px',
  letterSpacing: -0.3,
  fontSize: 12,
  fontWeight: 400,
});

export const dayNumber = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 4,
  borderRadius: '50%',
  width: 20,
  height: 20,
  letterSpacing: -0.4,
  fontSize: 16,
  fontWeight: 500,
});

export const eventListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  overflowY: 'auto',
});

export const dayNumberInactive = style({
  color: lightThemeVars.color.gray[500],
});

export const dayNumberToday = style({
  color: lightThemeVars.color.primary[700],
  fontWeight: 600,
});

export const dayNumberSelected = style({
  backgroundColor: lightThemeVars.color.primary[700],
  color: lightThemeVars.color.white.main,
});

export const eventIndicators = style({
  display: 'flex',
  gap: 6,
  minHeight: 6,
});

export const eventItem = style({
  display: '-webkit-box',
  flexShrink: 0,
  borderRadius: 4,
  padding: '0 4px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  letterSpacing: -0.3,
  color: lightThemeVars.color.black,
  fontSize: 12,
  fontWeight: 400,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
});

export const eventLeague = style({
  backgroundColor: EVENT_COLORS.league,
});

export const eventFriendly = style({
  backgroundColor: EVENT_COLORS.friendly,
});

export const eventOther = style({
  backgroundColor: EVENT_COLORS.other,
});
