import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  margin: '0 auto',
  width: '100%',
  maxWidth: 800,
});

export const headerContainer = style({
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
  flexShrink: 0,
  cursor: 'pointer',
});

export const editorSection = style({
  display: 'flex',
  flexDirection: 'column',
});
