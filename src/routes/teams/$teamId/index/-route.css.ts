import { commonPageRoot } from '@/styles/page.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPageRoot,
  {
    backgroundColor: lightThemeVars.color.white.background,
    paddingTop: 60,
    paddingBottom: 60,
  },
]);

export const mainCard = style({
  borderRadius: 8,
  boxShadow: '4px 4px 8px 0px rgba(0,0,0,0.05)',
  backgroundColor: lightThemeVars.color.white.main,
  width: 1336,
});

export const bodyContainer = style({
  display: 'flex',
  gap: 11,
  padding: '19px 40px',
});

export const leftContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const rightContainer = style({
  paddingLeft: 31,
});

export const horizontalDivider = style({
  marginLeft: 20,
  backgroundColor: lightThemeVars.color.primary[100],
  width: 787,
  height: 1,
});

export const verticalDivider = style({
  display: 'block',
  flexShrink: 0,
  marginTop: 25,
  marginLeft: -11,
  backgroundColor: lightThemeVars.color.primary[100],
  width: 1,
  height: 444,
});
