import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.white.main,
  width: '100%',
  height: '100%',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  backgroundColor: lightThemeVars.color.primary[800],
  padding: '25px 20px',
});

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const titleSection = style({
  display: 'flex',
  alignItems: 'center',
});

export const title = style({
  margin: 0,
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.white.main,
  fontSize: 16,
  fontWeight: 600,
});

export const cancelButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  border: 'none',
  borderRadius: 8,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: 0,
});

export const cancelIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  color: lightThemeVars.color.primary[400],
});

export const cancelText = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.primary[400],
  fontSize: 14,
  fontWeight: 600,
});

export const content = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: 8,
  marginTop: 20,
  padding: '20px 16px',
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

export const textarea = style({
  boxSizing: 'border-box',
  outline: 'none',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 6,
  backgroundColor: lightThemeVars.color.white.hover,
  padding: '9px 16px',
  width: '100%',
  minHeight: 200,
  resize: 'none',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 400,
  '::placeholder': {
    color: lightThemeVars.color.gray[300],
  },
});

export const submitButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  border: 'none',
  borderRadius: 8,
  boxShadow: '4px 4px 8px 0px rgba(0,0,0,0.05)',
  backgroundColor: lightThemeVars.color.primary[700],
  height: 44,
  letterSpacing: -0.35,
  color: lightThemeVars.color.white.main,
  fontSize: 14,
  fontWeight: 600,
  ':hover': {
    backgroundColor: lightThemeVars.color.primary['700Darken'],
  },
});

export const submitIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  color: lightThemeVars.color.white.main,
});

export const submitText = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.white.main,
  fontSize: 14,
  fontWeight: 600,
});
