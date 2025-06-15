import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.white.main,
  width: 362,
});

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px 10px 0 0',
  backgroundColor: lightThemeVars.color.primary[800],
  padding: 20,
});

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10,
  width: '100%',
});

export const dateSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const dateText = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  lineHeight: 1.4,
  letterSpacing: -0.6,
  color: lightThemeVars.color.white.main,
  fontSize: 24,
  fontWeight: 500,
});

export const monthText = style({
  color: lightThemeVars.color.white.main,
});

export const dayText = style({
  color: lightThemeVars.color.white.main,
});

export const dayOfWeek = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 8px',
  height: 34,
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.primary[300],
  fontSize: 16,
  fontWeight: 500,
});

export const createButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  border: 'none',
  cursor: 'pointer',
  height: 24,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.primary[300],
  fontSize: 14,
  fontWeight: 600,
  ':hover': {
    color: lightThemeVars.color.white.main,
  },
});

export const createIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 12,
  height: 12,
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: '20px 16px',
});

export const scheduleHeader = style({
  display: 'flex',
  alignItems: 'end',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
});

export const scheduleLabel = style({
  color: lightThemeVars.color.gray[500],
});

export const scheduleCount = style({
  padding: '0 10px',
  color: lightThemeVars.color.black,
  fontWeight: 600,
});

export const scheduleListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  height: 692,
  overflow: 'clip',
});

export const emptyState = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 200,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});
