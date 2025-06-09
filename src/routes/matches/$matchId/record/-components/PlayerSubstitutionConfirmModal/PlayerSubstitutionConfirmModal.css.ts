import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const backdrop = style({
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(1px)',
  backgroundColor: 'rgba(0,0,0,0.30)',
  width: '100vw',
  height: '100vh',
});

export const modalContainer = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.white.main,
  padding: '24px 50px',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const bodyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  width: 160,
});

export const warningIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 21,
  height: 20,
  color: lightThemeVars.color.warning,
});

export const title = style({
  alignSelf: 'stretch',
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 500,
});

export const contentContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
  marginTop: 28,
});

export const playerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  // NOTE: 공통 텍스트 스타일
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
});

export const playerProfileImage = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 50,
  objectFit: 'cover',
  width: 32,
  height: 32,
});

export const playerInfoContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 8,
});

export const playerName = style({
  width: 50,
  textAlign: 'right',
  color: lightThemeVars.color.black,
});

export const playerNumber = style({
  marginLeft: 4,
  color: lightThemeVars.color.black,
});

export const label = recipe({
  base: {
    marginLeft: 12,
  },
  variants: {
    variant: {
      out: {
        color: lightThemeVars.color.primary[700],
      },
      in: {
        color: lightThemeVars.color.warning,
      },
    },
  },
});

export const arrowRightIcon = style({
  width: 12,
});

export const buttonContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  marginTop: 30,
});
