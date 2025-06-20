import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const textFieldError = style({
  display: 'flex',
  marginBottom: 8,
  padding: '0 4px',
  height: 17,
  lineHeight: 1.4,
  letterSpacing: -0.3,
  color: lightThemeVars.color.warning,
  fontSize: 12,
  fontWeight: 400,
});
