import { style } from '@vanilla-extract/css';

import { commonPageRoot } from '@/styles/page.css';
import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style([
  commonPageRoot,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 60,
    minWidth: 1100,
  },
]);

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: 52,
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.primary[800],
  padding: 20,
  height: 138,
});

export const team = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
  padding: '0 12px',
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${lightThemeVars.color.gray[500]}`,
  borderRadius: '50%',
  backgroundColor: lightThemeVars.color.white.main,
  objectFit: 'cover',
  width: 64,
  height: 64,
});

export const logo = style({
  width: 39,
});

export const headerTitle = style({
  lineHeight: 1.4,
  letterSpacing: -0.6,
  color: lightThemeVars.color.white.main,
  fontSize: 24,
  fontWeight: 600,
});

export const headerListContainer = style({
  display: 'flex',
  gap: 50,
});

export const headerListItemContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const headerListHeader = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.primary[300],
  fontSize: 16,
  fontWeight: 600,
});

export const headerListItem = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.white.main,
  fontSize: 16,
  fontWeight: 500,
});

export const listContainer = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: 16,
});
