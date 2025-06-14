import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  gap: '58px',
  '@media': {
    '(max-width: 991px)': {
      padding: '20px 20px 20px 20px',
    },
  },
  borderRadius: 10,
  backgroundColor: '#1C263C',
  padding: '20px 20px 20px 20px',
});

export const teamInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  letterSpacing: '-0.6px',
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.white.main,
  fontSize: 24,
  fontWeight: 600,
  '@media': {
    '(max-width: 991px)': {
      whiteSpace: 'initial',
    },
  },
});

export const teamLogo = style({
  aspectRatio: '1',
  alignSelf: 'center',
  objectFit: 'contain',
  objectPosition: 'center',
  width: 64,
});

export const teamName = style({
  flex: '1',
  flexBasis: '0',
  flexShrink: 1,
  alignSelf: 'stretch',
  gap: 10,
  '@media': {
    '(max-width: 991px)': {
      whiteSpace: 'initial',
    },
  },
  width: '100%',
  color: lightThemeVars.color.white.main,
});

export const statsContainer = style({
  display: 'flex',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 1,
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '100px',
  marginTop: 'auto',
  marginBottom: 'auto',
  letterSpacing: '-0.4px',
  fontSize: 16,
  '@media': {
    '(max-width: 991px)': {
      gap: '40px',
      maxWidth: '100%',
    },
  },
});

export const statItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  justifyContent: 'start',
  marginTop: 'auto',
  marginBottom: 'auto',
  minWidth: 'fit-content',
});

export const statLabel = style({
  alignSelf: 'stretch',
  gap: 6,
  color: '#DBE4FF',
  fontWeight: 600,
});

export const statValue = style({
  alignSelf: 'start',
  gap: 10,
  '@media': {
    '(max-width: 991px)': {
      whiteSpace: 'initial',
    },
  },
  marginTop: 20,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.white.main,
  fontWeight: 500,
});

export const recordContainer = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  gap: 16,
  marginTop: 20,
  color: lightThemeVars.color.white.main,
  fontWeight: 500,
});

export const recordValue = style({
  alignSelf: 'stretch',
  gap: 10,
  color: lightThemeVars.color.white.main,
});

export const recentMatchesContainer = style({
  display: 'flex',
  gap: 4,
  marginTop: 14,
  width: 140,
});

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
