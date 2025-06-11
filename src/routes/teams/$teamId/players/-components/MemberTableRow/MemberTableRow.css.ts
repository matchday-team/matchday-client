import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  padding: '16px 40px 16px 40px',
  width: '100%',
});

export const rowContent = style({
  width: '100%',
  maxWidth: 1246,
});

export const rowContainer = style({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  gap: 20,
  width: '100%',
});

export const leftSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  textAlign: 'center',
});

export const indexNumber = style({
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 6px',
  minHeight: 20,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
});

export const profileImage = style({
  aspectRatio: '1',
  flexShrink: 0,
  alignSelf: 'stretch',
  objectFit: 'contain',
  objectPosition: 'center',
  width: 36,
  minHeight: 36,
});

export const memberName = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 500,
});

export const memberNumber = style({
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 500,
});

export const rightSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: 93,
  marginTop: 'auto',
  marginBottom: 'auto',
});

export const positionTag = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  justifyContent: 'center',
  borderRadius: 100,
  padding: '4px 8px',
  letterSpacing: -0.35,
  fontSize: 14,
});

export const positionTagFW = style({
  backgroundColor: 'rgba(255, 236, 236, 1)',
  color: 'rgba(255, 0, 0, 1)',
});

export const positionTagMF = style({
  backgroundColor: 'rgba(225, 254, 232, 1)',
  color: 'rgba(0, 152, 36, 1)',
});

export const positionTagDF = style({
  backgroundColor: '#DBE4FF',
  color: '#0043FF',
});

export const positionTagGK = style({
  backgroundColor: 'rgba(255, 244, 203, 1)',
  color: 'rgba(183, 125, 0, 1)',
});

export const positionText = style({
  alignSelf: 'stretch',
  gap: 8,
  width: '100%',
});

export const footText = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  textAlign: 'center',
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 500,
});

export const roleText = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  textAlign: 'center',
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 500,
});

export const joinDateText = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  textAlign: 'center',
  letterSpacing: -0.4,
  color: lightThemeVars.color.gray[500],
  fontSize: 16,
  fontWeight: 500,
});

export const moreIcon = style({
  aspectRatio: '1',
  flexShrink: 0,
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  objectFit: 'contain',
  objectPosition: 'center',
  cursor: 'pointer',
  width: 24,
});
