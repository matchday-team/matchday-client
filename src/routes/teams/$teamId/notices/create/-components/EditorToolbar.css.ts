import { style } from '@vanilla-extract/css';

export const toolbar = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '4px',
  borderBottom: '1px solid #e0e0e0',
  backgroundColor: '#ffffff',
  padding: '8px 12px',
});

export const toolbarItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  outline: 'none',
  border: '1px solid transparent',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: '6px 8px',
  minWidth: '28px',
  height: '28px',
  color: '#333',
  fontSize: '14px',

  ':hover': {
    borderColor: '#ddd',
    backgroundColor: '#f0f0f0',
  },

  ':focus': {
    borderColor: '#4285f4',
    boxShadow: '0 0 0 2px rgba(66, 133, 244, 0.2)',
  },

  ':disabled': {
    opacity: 0.4,
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },

  selectors: {
    '&[type="button"]': {
      fontFamily: 'inherit',
    },
    'select&': {
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: '#fff',
      padding: '4px 8px',
      minWidth: '120px',
      fontSize: '13px',
    },
  },
});

export const active = style({
  borderColor: '#2196f3',
  backgroundColor: '#e3f2fd',
  color: '#1976d2',
});

export const spaced = style({
  marginRight: '2px',
});

export const format = style({
  lineHeight: 1,
  fontSize: '14px',
  fontWeight: 'bold',
  fontStyle: 'normal',
});

export const divider = style({
  margin: '0 4px',
  backgroundColor: '#e0e0e0',
  width: '1px',
  height: '20px',
});

export const iconSize = style({
  width: '24px',
  height: '24px',
});
