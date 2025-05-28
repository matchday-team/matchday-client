import { style } from '@vanilla-extract/css';
import { lightThemeVars } from 'src/styles/theme.css';

export const timeContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 25,
});

export const timeInput = style({
  position: 'relative',
  width: 120,
});

export const timeSeparator = style({
  lineHeight: '140%',
  letterSpacing: '-0.35px',
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});
