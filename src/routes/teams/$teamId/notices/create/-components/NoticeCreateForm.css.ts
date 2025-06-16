import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  margin: '0 auto',
  width: '100%',
  maxWidth: 800,
});

export const headerSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
});

export const titleInput = style({
  flex: 1,
  border: `1px solid ${lightThemeVars.color.gray[200]}`,
  borderRadius: 8,
  padding: '12px 16px',
  fontSize: 16,
  fontWeight: 500,

  ':focus': {
    borderColor: lightThemeVars.color.primary[700],
    boxShadow: `0 0 0 3px ${lightThemeVars.color.primary[300]}`,
  },
});

export const importantCheckbox = style({
  flexBasis: 50,
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
  paddingTop: 16,
});

export const submitButton = style({
  borderRadius: 8,
  backgroundColor: lightThemeVars.color.primary[700],
  cursor: 'pointer',
  padding: '12px 24px',
  color: lightThemeVars.color.white.main,
  fontSize: 16,
  fontWeight: 600,

  ':hover': {
    backgroundColor: lightThemeVars.color.primary['700Darken'],
  },

  ':disabled': {
    backgroundColor: lightThemeVars.color.gray[200],
    cursor: 'not-allowed',
  },
});
