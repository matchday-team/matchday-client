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

export const matchGrid = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 80,
  overflowX: 'auto',
});

export const matchCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 12,
  width: 192,
});

export const matchInfo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const matchDate = style({
  lineHeight: 1.4,
  letterSpacing: -0.3,
  color: lightThemeVars.color.gray[500],
  fontSize: 12,
  fontWeight: 500,
});

export const matchDuration = style({
  lineHeight: 1.4,
  letterSpacing: -0.3,
  color: lightThemeVars.color.gray[500],
  fontSize: 12,
  fontWeight: 500,
});

export const matchResult = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: '100%',
});

export const teamRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const teamInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const teamLogo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${lightThemeVars.color.gray[500]}`,
  borderRadius: '50%',
  backgroundColor: lightThemeVars.color.white.main,
  width: 44,
  height: 44,
});

export const logoImage = style({
  width: 28,
  height: 32,
});

export const teamNameWinner = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 600,
});

export const teamNameLoser = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.gray[500],
  fontSize: 16,
  fontWeight: 600,
});

export const scoreWinner = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 600,
});

export const scoreLoser = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.gray[500],
  fontSize: 16,
  fontWeight: 600,
});
