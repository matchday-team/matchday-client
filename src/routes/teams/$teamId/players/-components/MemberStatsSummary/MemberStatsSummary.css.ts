import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.primary[800],
  padding: '20px 40px',
  lineHeight: 1.4,
});

export const totalMembersSection = style({
  width: 91,
  fontWeight: 500,
});

export const totalMembersLabel = style({
  letterSpacing: -0.35,
  color: lightThemeVars.color.primary[300],
  fontSize: 14,
});

export const totalMembersCount = style({
  letterSpacing: -1.1,
  color: lightThemeVars.color.white.main,
  fontSize: 44,
});

export const positionStatsContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  minWidth: 240,
  color: lightThemeVars.color.white.main,
});

export const positionStatItem = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRadius: 100,
  padding: '10px 14px',
});

export const positionStatContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  width: '100%',
});

export const positionLabel = style({
  letterSpacing: -0.35,
  color: lightThemeVars.color.white.main,
  fontSize: 14,
  fontWeight: 500,
});

export const positionCountContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const positionCount = style({
  width: 35,
  textAlign: 'right',
  letterSpacing: -0.6,
  color: lightThemeVars.color.white.main,
  fontSize: 24,
  fontWeight: 600,
});

export const positionCountLabel = style({
  letterSpacing: -0.35,
  color: lightThemeVars.color.white.main,
  fontSize: 14,
  fontWeight: 500,
});
