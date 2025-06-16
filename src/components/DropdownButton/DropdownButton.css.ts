import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const dropdown = style({
  position: 'relative',
  display: 'inline-block',
});

export const dropdownButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  transition: 'all 0.2s ease',
  outline: 'none',
  border: '1px solid #e0e0e0',
  borderRadius: '6px',
  backgroundColor: lightThemeVars.color.white.main,
  cursor: 'pointer',
  padding: '6px 12px',
  minWidth: '120px',
  color: '#333333',
  fontSize: '14px',

  ':hover': {
    borderColor: '#d0d7de',
    backgroundColor: '#f8f9fa',
  },

  ':focus': {
    borderColor: '#0969da',
    boxShadow: '0 0 0 3px rgba(9, 105, 218, 0.3)',
  },

  ':disabled': {
    opacity: 0.5,
    backgroundColor: '#f6f8fa',
    cursor: 'not-allowed',
  },
});

export const chevron = style({
  transition: 'transform 0.2s ease',
  color: lightThemeVars.color.gray[500],
  fontSize: '10px',

  selectors: {
    '[aria-expanded="true"] &': {
      transform: 'rotate(180deg)',
    },
  },
});

export const dropdownMenu = style({
  position: 'absolute',
  zIndex: 1000,
  top: '100%',
  right: '0',
  left: '0',
  marginTop: '2px',
  border: '1px solid #d0d7de',
  borderRadius: '8px',
  boxShadow: '0 8px 24px rgba(149, 157, 165, 0.2)',
  backgroundColor: lightThemeVars.color.white.main,
  padding: '4px 0',
  width: 'fit-content',
  minWidth: '100%',
  maxHeight: '300px',
  overflowY: 'auto',
});

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
