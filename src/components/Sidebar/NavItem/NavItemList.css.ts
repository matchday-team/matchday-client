import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

import {
  label,
  navItem,
  navItemIcon,
} from '@/components/Sidebar/SidebarCommon.css';

export { navItem, navItemIcon, label };

export const tooltipContent = style({
  zIndex: 1000,
  borderRadius: 6,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  backgroundColor: lightThemeVars.color.primary[800],
  padding: '8px 12px',
  maxWidth: 200,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.white.main,
  fontSize: 12,
  fontWeight: 500,
});

export const tooltipArrow = style({
  fill: lightThemeVars.color.primary[800],
});
