import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const dropdownItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: '8px 12px',
  width: '100%',
  textAlign: 'left',
  color: '#333333',
  fontSize: '14px',

  ':hover': {
    backgroundColor: '#f6f8fa',
  },

  ':focus': {
    outline: 'none',
    backgroundColor: '#f6f8fa',
  },
});

export const dropdownItemIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  fontSize: '16px',
});

export const dropdownItemText = style({
  flex: 1,
});

export const dropdownItemShortcut = style({
  marginLeft: 'auto',
  color: lightThemeVars.color.gray[500],
  fontSize: '12px',
});
