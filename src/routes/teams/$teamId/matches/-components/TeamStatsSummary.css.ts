import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  gap: 60,
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.primary[800],
  padding: '20px 40px',
});

export const teamInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: lightThemeVars.color.white.main,
});

export const teamLogo = style({
  objectFit: 'cover',
  width: 64,
});

export const teamName = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.6,
  color: lightThemeVars.color.white.main,
  fontSize: 24,
  fontWeight: 600,
});

export const statsContainer = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  letterSpacing: -0.4,
  fontSize: 16,
});

export const statItem = style({
  display: 'flex',
  flexDirection: 'column',
});

export const statLabel = style({
  gap: 6,
  color: lightThemeVars.color.primary[300],
  fontWeight: 600,
});

export const statValue = style({
  marginTop: 20,
  color: lightThemeVars.color.white.main,
  fontWeight: 500,
});

export const recordContainer = style({
  display: 'flex',
  gap: 16,
  marginTop: 20,
  color: lightThemeVars.color.white.main,
  fontWeight: 500,
});

export const recordValue = style({
  color: lightThemeVars.color.white.main,
});

export const recentMatchesContainer = style({
  display: 'flex',
  gap: 4,
  marginTop: 14,
  width: 140,
});

// FIXME: 체크, 엑스 아이콘으로 개선
export const recentMatchResult = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  width: 24,
  height: 24,
  color: lightThemeVars.color.white.main,
  fontSize: 12,
  fontWeight: 600,
});

export const win = style({
  backgroundColor: lightThemeVars.color.primary[700],
});

export const loss = style({
  backgroundColor: '#C63535',
});

export const draw = style({
  backgroundColor: lightThemeVars.color.gray[500],
});
