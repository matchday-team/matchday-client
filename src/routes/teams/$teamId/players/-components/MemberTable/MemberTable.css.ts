import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const tableOverride = style({
  width: '100%',
  height: 700,
});

export const indexNumber = style({
  textAlign: 'center',
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
});

export const memberNameContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const profileImage = style({
  aspectRatio: '1',
  borderRadius: '50%',
  objectFit: 'contain',
  objectPosition: 'center',
  width: 36,
  height: 36,
});

export const memberName = style({
  width: 50,
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const memberNumber = style({
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const positionTag = style({
  display: 'flex',
  alignItems: 'center',
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
  textAlign: 'center',
});

export const footText = style({
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const roleText = style({
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const joinDateText = style({
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const moreIcon = style({
  cursor: 'pointer',
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray[500],

  ':hover': {
    color: lightThemeVars.color.gray[600],
  },
});
