import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const textFieldError = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '0 4px',
  lineHeight: '140%',
  letterSpacing: -0.3,
  color: lightThemeVars.color.warning,
  fontSize: 12,
  fontWeight: 400,
});
