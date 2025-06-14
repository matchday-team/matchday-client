import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_SMALL } from '@/constants';

export const transitionTiming = 'cubic-bezier(0.4, 0, 0.2, 1)';

export const nav = recipe({
  base: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
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

export const navItem = recipe({
  base: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    gap: 16,
    transition: `background-color 0.3s ${transitionTiming}`,
    padding: '4px 0',
    width: '100%',
    height: 44,
    overflow: 'hidden',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    color: lightThemeVars.color.gray[500],
    fontSize: 14,
    fontWeight: 500,
    selectors: {
      '&:hover': {
        backgroundColor: lightThemeVars.color.white.hover,
      },
      '&:focus-visible': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${lightThemeVars.color.primary[300]}`,
        backgroundColor: lightThemeVars.color.white.hover,
      },
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

export const navItemIcon = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginLeft: 18,
  },
  variants: {
    isOpen: {
      false: {
        justifyContent: 'flex-start',
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
    gap: 16,
    marginLeft: 18,
  },
  variants: {
    isOpen: {
      false: {
        justifyContent: 'flex-start',
      },
    },
  },
  defaultVariants: {
    isOpen: true,
  },
});

export const footer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
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

export const label = style({
  lineHeight: 1.4,
  letterSpacing: -0.3,
  fontSize: 14,
  fontWeight: 500,
});

export const icon = style({
  flexShrink: 0,
  width: 24,
  height: 24,
});
