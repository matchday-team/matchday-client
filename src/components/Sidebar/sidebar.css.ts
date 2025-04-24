import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_SMALL } from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

const transitionTiming = 'cubic-bezier(0.4, 0, 0.2, 1)';

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
    width: {
      default: {
        width: SIDEBAR_WIDTH,
      },
      toggle: {
        width: SIDEBAR_WIDTH_SMALL,
      },
    },
  },
});

export const logo = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    transition: `width 0.3s ${transitionTiming}`,
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
        margin: '20px 26px',
        width: 308,
        height: 39,
      },
      false: {
        justifyContent: 'center',
        margin: '22px 16px',
        width: SIDEBAR_WIDTH_SMALL - 32,
        height: 32,
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
  lineHeight: '140%',
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 700,
  fontStyle: 'normal',
});

export const logoSubtitle = style({
  lineHeight: '140%',
  letterSpacing: -0.3,
  color: lightThemeVars.color.gray[500],
  fontSize: 12,
  fontWeight: 500,
  fontStyle: 'normal',
});

export const adminIcon = style({
  position: 'absolute',
  right: 0,
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray[600],
});

export const nav = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 16,
  padding: 0,
  width: 308,
});

export const navItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 16,
    transition: `background-color 0.3s ${transitionTiming}, color 0.3s ${transitionTiming}`,
    width: '100%',
    overflow: 'hidden',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    color: lightThemeVars.color.gray[600],
    fontSize: 14,
    fontWeight: 500,
  },
  variants: {
    active: {
      true: {
        color: lightThemeVars.color.black,
      },
    },
    isOpen: {
      true: {
        padding: '8px 26px',
      },
      false: {
        padding: '8px 0',
      },
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

export const navItemIcon = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  variants: {
    isOpen: {
      false: {
        justifyContent: 'flex-start',
        marginLeft: 18,
      },
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  alignItems: 'flex-start',
  gap: 16,
  padding: '1px 0',
  width: 308,
  height: 84,
});

export const footerItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: `background-color 0.3s ${transitionTiming}`,
    cursor: 'pointer',
    width: '100%',
    overflow: 'hidden',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    color: lightThemeVars.color.gray[500],
    fontSize: 14,
  },
  variants: {
    isOpen: {
      true: {
        padding: '12px 26px',
      },
      false: {
        padding: '12px 0',
      },
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

export const footerItemIcon = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  variants: {
    isOpen: {
      false: {
        justifyContent: 'flex-start',
        marginLeft: 18,
      },
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

export const footerItemIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
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
    transition: `transform 0.3s ${transitionTiming}, background-color 0.3s ${transitionTiming}`,
    border: `1px solid ${lightThemeVars.color.gray[100]}`,
    borderRadius: '50%',
    boxShadow: `0 2px 4px ${lightThemeVars.color.black}0d`,
    backgroundColor: lightThemeVars.color.white.main,
    cursor: 'pointer',
    width: 36,
    height: 36,
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

export const matchDayLogo = recipe({
  base: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    gap: 10.667,
    transition: `width 0.3s ${transitionTiming}`,
    marginBottom: 8,
    width: 139,
    height: 27,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  variants: {
    isOpen: {
      true: {
        padding: '12px 26px',
      },
      false: {
        padding: '12px 0',
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

export const icon = style({
  flexShrink: 0,
  width: 24,
  height: 24,
});

export const logoImage = style({
  aspectRatio: 7 / 8,
  flexShrink: 0,
  width: 28,
  height: 32,
});

export const logoTextImage = style({
  flexShrink: 0,
  width: 90,
  height: 14,
});

export const navLabel = style({
  lineHeight: '140%',
  letterSpacing: -0.3,
  fontSize: 14,
  fontWeight: 500,
});

export const footerLabel = style({
  lineHeight: '140%',
  letterSpacing: -0.3,
  fontSize: 14,
  fontWeight: 500,
});
