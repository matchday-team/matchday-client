import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 40,
  padding: '40px 20px 0',
  width: '100%',
  maxWidth: 314,
  lineHeight: 1.4,
});

export const profileSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: '100%',
});

export const playerHeader = style({
  display: 'flex',
  gap: 16,
  width: '100%',
  letterSpacing: -0.4,
  fontSize: 16,
});

export const playerAvatar = style({
  aspectRatio: '1',
  borderRadius: 100,
  objectFit: 'cover',
  width: 64,
});

export const playerInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 234,
});

export const playerName = style({
  marginTop: 6,
  width: 58,
  height: '100%',
  color: lightThemeVars.color.black,
});

export const positionSection = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '40px 52px',
  padding: '0 44px',
  width: '100%',
});

export const positionColumn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  width: 58,
});

export const positionLabel = style({
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 600,
});

export const divider = style({
  alignSelf: 'center',
  backgroundColor: lightThemeVars.color.primary[100],
  width: 1,
  height: 40,
});

export const secondaryPositionTag = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: 4,
  borderRadius: 100,
  backgroundColor: 'rgba(225, 254, 232, 1)',
  padding: '4px 8px',
  letterSpacing: -0.35,
  color: lightThemeVars.color.field.background,
  fontSize: 14,
  fontWeight: 500,
});

export const secondaryPositionText = style({
  gap: 8,
  width: '100%',
});

export const personalInfoSection = style({
  display: 'flex',
  gap: '40px 80px',
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
});

export const personalInfoLabels = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 12,
  width: 48,
  color: lightThemeVars.color.gray[500],
});

export const infoLabel = style({
  color: lightThemeVars.color.gray[500],
});

export const personalInfoValues = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 12,
  width: 80,
  color: lightThemeVars.color.black,
});

export const infoValue = style({
  color: lightThemeVars.color.black,
});
