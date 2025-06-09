import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { NAVBAR_HEIGHT, SIDEBAR_WIDTH, SIDEBAR_WIDTH_SMALL } from '@/constants';

export const navbar = recipe({
  base: {
    boxSizing: 'border-box',
    position: 'fixed',
    zIndex: 30,
    top: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: `0 1px 2px ${lightThemeVars.color.black}1a`,
    backgroundColor: lightThemeVars.color.white.main,
    padding: '0 32px',
    height: NAVBAR_HEIGHT,
  },
  variants: {
    isOpen: {
      true: {
        left: SIDEBAR_WIDTH,
      },
      false: {
        left: SIDEBAR_WIDTH_SMALL,
      },
    },
  },
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.primary[700],
  fontSize: 16,
  fontWeight: 500,
});

export const signUpButton = style({
  display: 'inline-flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  transition: 'background-color 0.2s ease, color 0.2s ease',
  border: `1px solid ${lightThemeVars.color.primary[700]}`,
  borderRadius: 8,
  cursor: 'not-allowed', // FIXME: 구현 완료 후 다시 변경
  padding: '8px 16px',
  height: 40,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.primary[700],
  fontSize: 14,
  fontWeight: 600,
  fontStyle: 'normal',
  ':hover': {
    background: lightThemeVars.color.primary[700],
    color: lightThemeVars.color.white.main,
  },
});
