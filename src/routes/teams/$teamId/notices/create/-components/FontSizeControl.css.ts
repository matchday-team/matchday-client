import { style } from '@vanilla-extract/css';

export const fontSizeControl = style({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #e0e0e0',
  borderRadius: '6px',
  backgroundColor: '#ffffff',
  overflow: 'hidden',
});

export const sizeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  width: '28px',
  height: '28px',
  color: '#333333',
  fontSize: '14px',
  fontWeight: 'bold',

  ':hover': {
    backgroundColor: '#f0f0f0',
  },

  ':disabled': {
    opacity: 0.4,
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },

  ':active': {
    backgroundColor: '#e0e0e0',
  },
});

export const sizeInput = style({
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'text',
  width: '50px',
  height: '28px',
  textAlign: 'center',
  fontSize: '14px',

  // Remove number input spinners
  selectors: {
    '&::-webkit-outer-spin-button': {
      margin: 0,
      WebkitAppearance: 'none',
    },
    '&::-webkit-inner-spin-button': {
      margin: 0,
      WebkitAppearance: 'none',
    },
    '&[type="number"]': {
      MozAppearance: 'textfield',
    },
  },
});
