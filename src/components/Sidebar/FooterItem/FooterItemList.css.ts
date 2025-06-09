import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import {
  footer,
  footerItemIcon,
  label,
  transitionTiming,
} from '@/components/Sidebar/SidebarCommon.css';

export { footer, footerItemIcon, label, transitionTiming };

export const footerItem = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: `background-color 0.3s ${transitionTiming}`,
    width: '100%',
    height: 44,
    overflow: 'hidden',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    color: lightThemeVars.color.gray[500],
    fontSize: 14,
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
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
      false: {
        cursor: 'pointer',
      },
    },
  },
});

export const footerRightIcon = style({
  position: 'relative',
  right: 34,
  flexShrink: 0,
  width: 24,
  height: 24,
});
