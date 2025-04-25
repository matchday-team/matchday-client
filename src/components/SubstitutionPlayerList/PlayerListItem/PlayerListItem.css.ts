import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 14,
  transition: 'background-color 0.3s ease',
  padding: '6px 24px',

  ':hover': {
    backgroundColor: lightThemeVars.color.white.hover,
  },
});

export const profileImage = style({
  borderRadius: 100,
  objectFit: 'cover',
  width: 32,
  height: 32,
});

export const textContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 152,
  height: 44,
});

export const textLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const commonTextStyle = {
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  color: lightThemeVars.color.black,
  fontWeight: 500,
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
    color: lightThemeVars.color.gray['500'],
    fontWeight: 400,
  },
]);
