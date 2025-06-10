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
  transform: 'translateX(-14px)',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 4,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.white.main,
  padding: '12px 16px',
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});

export const tooltipArrowBorder = style({
  zIndex: 1000,
  width: 10,
  height: 10,
  fill: 'none',
  stroke: lightThemeVars.color.primary[100],
  strokeWidth: 2,
});

export const tooltipArrowFill = style({
  zIndex: 1001,
  transform: 'translateY(-1.5px)',
  width: 10,
  height: 10,
  fill: lightThemeVars.color.white.main,
  stroke: 'none',
});
