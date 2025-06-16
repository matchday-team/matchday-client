import { style } from '@vanilla-extract/css';

export const colorButtonContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2px',
});

export const colorPreview = style({
  borderRadius: '1px',
  width: '20px',
  height: '3px',
});

export const colorPicker = style({
  padding: '12px',
  width: '240px',
});

export const hexInput = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '12px',
});

export const hexInputField = style({
  flex: 1,
  outline: 'none',
  border: '1px solid #e0e0e0',
  borderRadius: '4px',
  cursor: 'text',
  padding: '4px 8px',
  fontSize: '14px',

  ':focus': {
    borderColor: '#0969da',
  },
});

export const presetColors = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gap: '4px',
  marginBottom: '12px',
});

export const colorSwatch = style({
  transition: 'transform 0.1s ease',
  border: '1px solid #d0d7de',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '24px',
  height: '24px',

  ':hover': {
    transform: 'scale(1.1)',
  },

  ':active': {
    transform: 'scale(0.95)',
  },
});

export const customColorWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  borderTop: '1px solid #e0e0e0',
  paddingTop: '8px',
});

export const customColorInput = style({
  outline: 'none',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '40px',
  height: '24px',
});

export const customColorLabel = style({
  color: '#656d76',
  fontSize: '12px',
});
