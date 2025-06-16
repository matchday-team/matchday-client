import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const colorButtonContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
});

export const colorPreview = style({
  borderRadius: 1,
  width: 20,
  height: 3,
});

export const colorPicker = style({
  padding: 12,
  width: 240,
});

export const hexInput = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginBottom: 12,
});

export const hexInputField = style({
  outline: 'none',
  border: `1px solid ${lightThemeVars.color.gray[200]}`,
  borderRadius: 4,
  cursor: 'text',
  padding: '4px 8px',
  fontSize: 14,

  ':focus': {
    borderColor: lightThemeVars.color.primary[700],
  },
});

export const presetColors = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gap: 4,
  marginBottom: 12,
});

export const colorSwatch = style({
  transition: 'transform 0.1s ease',
  border: `1px solid ${lightThemeVars.color.gray[200]}`,
  borderRadius: 4,
  cursor: 'pointer',
  width: 24,
  height: 24,

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
  gap: 8,
  borderTop: `1px solid ${lightThemeVars.color.gray[200]}`,
  paddingTop: 8,
});

export const customColorInput = style({
  outline: 'none',
  border: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  width: 40,
  height: 24,
});

export const customColorLabel = style({
  color: lightThemeVars.color.gray[500],
  fontSize: 12,
});
