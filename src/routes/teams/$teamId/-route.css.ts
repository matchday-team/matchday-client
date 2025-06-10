import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  backgroundColor: '#F9FAFB',
  minHeight: '100vh',
});

export const outerContainer = style({
  margin: '0 auto',
  padding: '52px 52px 90px',
  maxWidth: 1440,
});

export const mainCard = style({
  margin: '0 auto',
  borderRadius: 8,
  boxShadow: '4px 4px 8px 0px rgba(0,0,0,0.05)',
  backgroundColor: lightThemeVars.color.white.main,
  width: '100%',
  maxWidth: 1336,
});

export const contentContainer = style({
  padding: '24px 40px',
});

export const topSection = style({
  position: 'relative',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '776px 1fr',
  gap: 0,
});

export const recordsSection = style({
  paddingRight: 40,
});

export const verticalDivider = style({
  position: 'absolute',
  top: 24,
  left: 807,
  display: 'block',
  backgroundColor: lightThemeVars.color.primary[100],
  width: 1,
  height: 444,
});

export const scheduleSection = style({
  marginTop: 0,
  paddingLeft: 40,
});

export const horizontalDivider = style({
  margin: '24px 0',
  backgroundColor: lightThemeVars.color.primary[100],
  width: '100%',
  height: 1,
});
