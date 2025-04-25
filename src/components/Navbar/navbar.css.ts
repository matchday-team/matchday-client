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
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  backgroundColor: lightThemeVars.color.white.main,
  padding: '0 32px',
  minWidth: '600px',
  height: NAVBAR_HEIGHT,
});

export const title = style({
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.primary[700],
  fontSize: '14px',
  fontWeight: 500,
});

export const actions = style({
  display: 'flex',
  flexShrink: 0,
  gap: '12px',
});

export const button = style({
  transition: 'all 0.2s ease',
  borderRadius: '4px',
  cursor: 'pointer',
  padding: '8px 16px',
  whiteSpace: 'nowrap',
  fontSize: '14px',
  fontWeight: 500,
  ':hover': {
    opacity: 0.9,
  },
});

export const primaryButton = style([
  button,
  {
    border: `1px solid ${lightThemeVars.color.primary[700]}`,
    backgroundColor: 'transparent',
    color: lightThemeVars.color.primary[700],
  },
]);
