import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.primary[800],
  padding: '20px 40px',
  lineHeight: 1.4,
});

export const totalMembersSection = style({
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  width: 91,
  fontWeight: 500,
});

export const totalMembersLabel = style({
  letterSpacing: -0.35,
  color: '#DBE4FF',
  fontSize: 14,
});

export const totalMembersCount = style({
  letterSpacing: -1.1,
  color: lightThemeVars.color.white.main,
  fontSize: 44,
});

export const positionStatsContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'start',
  gap: 24,
  marginTop: 'auto',
  marginBottom: 'auto',
  minWidth: 240,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.white.main,
});

export const positionStatItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  justifyContent: 'center',
  marginTop: 'auto',
  marginBottom: 'auto',
  borderRadius: 100,
  padding: '10px 14px',
});

export const positionStatContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: 4,
  width: '100%',
});

export const positionLabel = style({
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  letterSpacing: -0.35,
  color: lightThemeVars.color.white.main,
  fontSize: 14,
  fontWeight: 500,
});

export const positionCountContainer = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'start',
  gap: 4,
  marginTop: 'auto',
  marginBottom: 'auto',
});

export const positionCount = style({
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  width: 35,
  textAlign: 'right',
  letterSpacing: -0.6,
  color: lightThemeVars.color.white.main,
  fontSize: 24,
  fontWeight: 600,
});

export const positionCountLabel = style({
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  letterSpacing: -0.35,
  color: lightThemeVars.color.white.main,
  fontSize: 14,
  fontWeight: 500,
});
