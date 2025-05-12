import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_SMALL } from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

import {
  footer,
  footerItemIcon,
  icon,
  nav,
  transitionTiming,
} from './sidebarCommon.css';

export { nav, footerItemIcon, footer, icon, transitionTiming };

export const container = recipe({
  base: {
    position: 'fixed',
    zIndex: 100,
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    transition: `width 0.3s ${transitionTiming}`,
    borderRight: `1px solid ${lightThemeVars.color.gray[100]}`,
    backgroundColor: lightThemeVars.color.white.main,
    height: '100vh',
  },
  variants: {
    isOpen: {
      true: {
        width: SIDEBAR_WIDTH,
      },
      false: {
        width: SIDEBAR_WIDTH_SMALL,
      },
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

export const logo = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    margin: '21px 0 23px 16px',
    width: '100%',
    height: 39,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: lightThemeVars.color.black,
    fontSize: 16,
    fontWeight: 600,
  },
  variants: {
    isOpen: {
      true: {
        width: SIDEBAR_WIDTH - 16,
      },
      false: {
        justifyContent: 'center',
        width: SIDEBAR_WIDTH_SMALL - 32,
      },
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

export const logoText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  marginLeft: 20,
});

export const logoTitle = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 700,
  fontStyle: 'normal',
});

export const logoSubtitle = style({
  lineHeight: 1.4,
  letterSpacing: -0.3,
  color: lightThemeVars.color.gray[500],
  fontSize: 12,
  fontWeight: 500,
  fontStyle: 'normal',
});

export const adminIcon = style({
  position: 'absolute',
  right: 18,
  flexShrink: 0,
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray[600],
});

export const toggleButton = style({
  position: 'absolute',
  zIndex: 1,
  top: '50%',
  right: -16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  clipPath: 'inset(0 0 0 50%)',
  border: 'none',
  borderRadius: '50%',
  boxShadow: `0 2px 4px ${lightThemeVars.color.black}0d`,
  backgroundColor: lightThemeVars.color.white.main,
  cursor: 'pointer',
  width: 36,
  height: 36,
  selectors: {
    '&::after': {
      position: 'absolute',
      inset: 0,
      clipPath: 'inset(0 0 0 55.5%)',
      border: `1px solid ${lightThemeVars.color.gray[100]}`,
      borderRadius: '50%',
      content: "''",
    },
  },
});

export const rotateIcon = style({
  transform: 'rotate(180deg)',
});

export const matchDayLogo = recipe({
  base: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
    padding: '12px 0',
    height: 19,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  variants: {
    isOpen: {
      true: {
        width: SIDEBAR_WIDTH,
      },
      false: {
        width: SIDEBAR_WIDTH_SMALL,
      },
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

export const matchDayIcon = style({
  flexShrink: 0,
  width: 28,
  height: 28,
});

export const rightIcon = style({
  position: 'absolute',
  right: 0,
  flexShrink: 0,
  width: 24,
  height: 24,
});

export const logoImage = style({
  aspectRatio: '7 / 8',
  flexShrink: 0,
  width: 28,
  height: 32,
});

export const logoTextImage = style({
  flexShrink: 0,
  width: 90,
  height: 10,
});
