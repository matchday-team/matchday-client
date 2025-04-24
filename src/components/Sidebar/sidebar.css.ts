import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_TOGGLE } from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

export const container = recipe({
  base: {
    position: 'fixed',
    zIndex: 100,
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRight: '1px solid #f0f0f0',
    backgroundColor: lightThemeVars.color.white.main,
    height: '100vh',
  },
  variants: {
    width: {
      default: {
        width: SIDEBAR_WIDTH,
      },
      toggle: {
        width: SIDEBAR_WIDTH_TOGGLE,
      },
    },
  },
});

export const logo = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: 6,
  height: 72,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 600,
});

export const logoText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

export const logoTitle = style({
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 600,
});

export const logoSubtitle = style({
  color: lightThemeVars.color.gray[500],
  fontSize: 12,
});

export const adminIcon = style({
  position: 'absolute',
  right: 26,
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray[600],
});

export const nav = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  padding: 0,
});

export const navItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '8px 16px',
    overflow: 'hidden',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    color: lightThemeVars.color.gray[600],
    fontSize: 14,
    fontWeight: 500,
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
  fontSize: 14,
  ':hover': {
    backgroundColor: '#f5f5f5',
  },
});

export const footerItemIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const footerItemIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const toggleButton = recipe({
  base: {
    position: 'absolute',
    zIndex: 101,
    top: '50%',
    right: -12,
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
    width: 24,
    height: 24,
    ':hover': {
      backgroundColor: lightThemeVars.color.white.hover,
    },
  },
  variants: {
    isOpen: {
      true: {
        transform: 'translateY(-50%) rotate(180deg)',
      },
      false: {
        transform: 'translateY(-50%)',
      },
    },
  },
});

export const matchDayLogo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: '12px 14px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const matchDayIcon = style({
  flexShrink: 0,
  borderRadius: 8,
  width: 24,
  height: 24,
});

export const toggleIcon = style({
  width: 24,
  height: 24,
});

export const icon = style({
  flexShrink: 0,
  width: 20,
  height: 20,
});

export const smallIcon = style({
  width: 16,
  height: 16,
});

export const largeIcon = style({
  width: 24,
  height: 24,
});

export const logoImage = style({
  width: 40,
  height: 40,
});

export const logoTextImage = style({
  height: 14,
});
