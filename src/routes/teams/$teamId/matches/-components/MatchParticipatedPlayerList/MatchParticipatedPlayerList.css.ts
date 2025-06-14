import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  zIndex: 10,
  flex: 1,
  width: '100%',
});

export const tableOverride = style({
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  height: '100%',
});

export const headerOverride = style({
  borderTop: 'none',
});

export const headerRow = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 12,
  fontWeight: 500,
});

export const headerIcons = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  marginLeft: 20,
});

export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid transparent',
  borderRadius: '50%',
  width: 28,
  height: 28,
});

export const teamIconButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const teamIcon = style({
  height: 20,
});

export const playerAvatar = style({
  marginRight: 10,
  marginLeft: 20,
  borderRadius: '50%',
  objectFit: 'cover',
  width: 24,
  height: 24,
});

export const playerDetails = style({
  display: 'flex',
  alignItems: 'center',
});

export const nameSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
});

export const playerNumber = style({
  marginRight: 10,
  width: 17,
  textAlign: 'center',
  fontSize: 14,
  fontWeight: 600,
});

export const playerName = style({
  marginLeft: 4,
  width: 60,
  textAlign: 'center',
  fontWeight: 500,
});

export const playerPosition = style({
  marginLeft: 22,
  color: lightThemeVars.color.gray[500],
});

export const statValue = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
});
