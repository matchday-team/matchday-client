import { style } from '@vanilla-extract/css';

import { NAVBAR_HEIGHT } from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

export const navbar = style({
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
  minWidth: 600,
  height: NAVBAR_HEIGHT,
});

export const title = style({
  lineHeight: '140%',
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
  border: `1px solid ${lightThemeVars.color.primary[700]}`,
  borderRadius: 8,
  cursor: 'pointer',
  padding: '8px 20px',
  height: 40,
});

export const signUpText = style({
  lineHeight: '140%',
  letterSpacing: -0.35,
  color: lightThemeVars.color.primary[700],
  fontSize: 14,
  fontWeight: 600,
});
