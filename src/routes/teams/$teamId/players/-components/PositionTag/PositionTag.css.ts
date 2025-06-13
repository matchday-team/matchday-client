import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const positionTag = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  padding: '4px 8px',
});

export const positionTagFW = style({
  backgroundColor: '#FFECEC',
  color: '#FF0000',
});

export const positionTagMF = style({
  backgroundColor: '#E1FEE8',
  color: '#009824',
});

export const positionTagDF = style({
  backgroundColor: lightThemeVars.color.primary[300],
  color: lightThemeVars.color.primary[700],
});

export const positionTagGK = style({
  backgroundColor: '#FFF4CB',
  color: '#B77D00',
});

export const positionText = style({
  fontSize: '14px',
  fontWeight: 500,
});
