import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  borderRadius: 8,
  padding: 20,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 32,
  width: '100%',
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
  gap: 16,
  color: lightThemeVars.color.gray[500],
});

export const moreText = style({
  lineHeight: 1.4,
  letterSpacing: -0.3,
  fontSize: 12,
  fontWeight: 500,
});

export const calendarContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

export const monthNavigation = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 105,
  marginBottom: 30,
  color: lightThemeVars.color.black,
});

export const monthText = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.6,
  color: lightThemeVars.color.black,
  fontSize: 24,
  fontWeight: 400,
});

export const calendarGrid = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const weekHeader = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const weekDayContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 54,
  height: 54,
});

export const weekDayText = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 400,
});

export const weekRow = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const dayContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 54,
  height: 54,
});

export const dayContent = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 2,
  height: 30,
});

export const selectedDayContent = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: lightThemeVars.color.primary[700],
  width: 54,
  height: 54,
});

export const eventDot = style({
  borderRadius: '50%',
  backgroundColor: lightThemeVars.color.primary[700],
  width: 6,
  height: 6,
});

export const selectedEventDot = style({
  position: 'absolute',
  top: 8,
  borderRadius: '50%',
  backgroundColor: lightThemeVars.color.white.main,
  width: 6,
  height: 6,
});

export const selectedDayText = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.white.main,
  fontSize: 16,
  fontWeight: 400,
});

export const currentMonthDayText = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.gray[500],
  fontSize: 16,
  fontWeight: 400,
});

export const otherMonthDayText = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.gray[300],
  fontSize: 16,
  fontWeight: 400,
});
