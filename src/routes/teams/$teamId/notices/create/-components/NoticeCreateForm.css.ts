import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: '0 auto',
  width: '100%',
  maxWidth: '800px',
});

export const headerSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const titleInput = style({
  flex: 1,
  outline: 'none',
  border: '1px solid #E0E4E7',
  borderRadius: '8px',
  cursor: 'text',
  padding: '12px 16px',
  fontSize: '16px',
  fontWeight: '500',

  ':focus': {
    borderColor: '#2196F3',
    boxShadow: '0 0 0 3px rgba(33, 150, 243, 0.1)',
  },
});

export const importantCheckbox = style({
  flexShrink: 0,
  cursor: 'pointer',
});

export const editorSection = style({
  display: 'flex',
  flexDirection: 'column',
});

export const actionSection = style({
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: '16px',
});

export const submitButton = style({
  border: 'none',
  borderRadius: '8px',
  backgroundColor: lightThemeVars.color.primary[700],
  cursor: 'pointer',
  padding: '12px 24px',
  color: lightThemeVars.color.white.main,
  fontSize: '16px',
  fontWeight: '600',

  ':hover': {
    backgroundColor: lightThemeVars.color.primary['700Darken'],
  },

  ':disabled': {
    backgroundColor: '#E0E4E7',
    cursor: 'not-allowed',
  },
});
