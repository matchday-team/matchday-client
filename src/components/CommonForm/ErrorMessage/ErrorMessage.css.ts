import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const textFieldError = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0 4px',
  height: 17,
  lineHeight: 1.4,
  letterSpacing: -0.3,
  color: lightThemeVars.color.warning,
  fontSize: 12,
  fontWeight: 400,
});
