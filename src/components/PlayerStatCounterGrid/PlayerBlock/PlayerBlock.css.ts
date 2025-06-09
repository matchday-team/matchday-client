import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${lightThemeVars.color.primary['100']}`,
  padding: '0 20px',
  height: 69,
});

export const profileImage = style({
  borderRadius: 100,
  objectFit: 'cover',
  width: 42,
  height: 42,
});

export const leftContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const rightContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 44,
});

const commonTextStyle = {
  lineHeight: 1.4,
  letterSpacing: -0.4,
  fontSize: 16,
  color: lightThemeVars.color.black,
  fontWeight: 600,
};

export const number = style([
  commonTextStyle,
  {
    width: 17,
    textAlign: 'center',
  },
]);

export const name = style(commonTextStyle);

export const position = style([
  commonTextStyle,
  {
    letterSpacing: -0.35,
    color: lightThemeVars.color.gray['500'],
    fontSize: 14,
    fontWeight: 500,
  },
]);

export const teamLogo = style({
  objectFit: 'cover',
  width: 24,
  height: 24,
});
