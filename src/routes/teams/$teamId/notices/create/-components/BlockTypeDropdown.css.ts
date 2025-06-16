import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const buttonContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const dropdownItemIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 20,
  height: 20,
  fontSize: 16,
});

export const dropdownItemShortcut = style({
  marginLeft: 'auto',
  color: lightThemeVars.color.gray[500],
  fontSize: 12,
});
