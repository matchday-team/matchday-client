import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const overlay = recipe({
  base: {
    position: 'fixed',
    zIndex: 99,
    inset: 0,
    transition: 'opacity 0.3s ease',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
  },
});

export const container = style({
  position: 'fixed',
  zIndex: 100,
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  borderRight: '1px solid #f0f0f0',
  backgroundColor: lightThemeVars.color.white.main,
  height: '100vh',
});

export const logo = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: '6px',
  height: '72px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.black,
  fontSize: '16px',
  fontWeight: '600',
});

export const logoText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const logoTitle = style({
  color: lightThemeVars.color.black,
  fontSize: '16px',
  fontWeight: '600',
});

export const logoSubtitle = style({
  color: lightThemeVars.color.gray[500],
  fontSize: '12px',
});

export const adminIcon = style({
  position: 'absolute',
  right: '26px',
  width: '24px',
  height: '24px',
  color: lightThemeVars.color.gray[600],
});

export const nav = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  padding: '0',
});

export const navItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '8px 26px',
    overflow: 'hidden',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    color: lightThemeVars.color.gray[600],
    fontSize: '14px',
    ':hover': {
      backgroundColor: lightThemeVars.color.white.hover,
    },
    ':focus-visible': {
      outline: `2px solid ${lightThemeVars.color.gray[600]}`,
      outlineOffset: '2px',
    },
  },
  variants: {
    active: {
      true: {
        backgroundColor: lightThemeVars.color.white.hover,
        color: lightThemeVars.color.black,
      },
    },
  },
});

export const footer = style({
  padding: '1px 0',
});

export const footerItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  padding: '12px 16px',
  overflow: 'hidden',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: '#666666',
  fontSize: '14px',
  ':hover': {
    backgroundColor: '#f5f5f5',
  },
});

export const footerItemIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const toggleButton = style({
  position: 'absolute',
  zIndex: 101,
  top: '50%',
  right: '-12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateY(-50%)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid #f0f0f0',
  borderRadius: '50%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.white.main,
  cursor: 'pointer',
  width: '20px',
  ':hover': {
    backgroundColor: '#f5f5f5',
  },
  height: '20px',
});

export const matchDayLogo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: '12px 14px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const matchDayIcon = style({
  flexShrink: 0,
  borderRadius: '8px',
  width: '24px',
  height: '24px',
});
