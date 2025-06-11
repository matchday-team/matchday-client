import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const indexNumber = style({
  textAlign: 'center',
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
});

export const profileImage = style({
  aspectRatio: '1',
  borderRadius: '50%',
  objectFit: 'contain',
  objectPosition: 'center',
  width: 36,
  height: 36,
});

export const centerText = style({
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const positionTag = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  padding: '4px 8px',
  width: 40,
  textAlign: 'center',
  letterSpacing: -0.35,
  fontSize: 14,
});

export const positionTagFW = style([
  positionTag,
  {
    backgroundColor: 'rgba(255, 236, 236, 1)',
    color: 'rgba(255, 0, 0, 1)',
  },
]);

export const positionTagMF = style([
  positionTag,
  {
    backgroundColor: 'rgba(225, 254, 232, 1)',
    color: 'rgba(0, 152, 36, 1)',
  },
]);

export const positionTagDF = style([
  positionTag,
  {
    backgroundColor: '#DBE4FF',
    color: '#0043FF',
  },
]);

export const positionTagGK = style([
  positionTag,
  {
    backgroundColor: 'rgba(255, 244, 203, 1)',
    color: 'rgba(183, 125, 0, 1)',
  },
]);

export const moreIcon = style({
  cursor: 'pointer',
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray[500],

  ':hover': {
    color: lightThemeVars.color.gray[600],
  },
});

export const filtersContainer = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
});

export const searchInput = style({
  width: 200,
});

export const selectInput = style({
  width: 120,
});

export const storyContainer = style({
  margin: '0 auto',
  padding: 40,
  width: '100vw',
  maxWidth: 1400,
});
