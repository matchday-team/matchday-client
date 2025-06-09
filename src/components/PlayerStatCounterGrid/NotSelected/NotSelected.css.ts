import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: `2px dashed ${lightThemeVars.color.primary['100']}`,
  borderRadius: 10,
  height: 302,
});

export const text = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray['500'],
  fontSize: 14,
  fontWeight: 500,
});
