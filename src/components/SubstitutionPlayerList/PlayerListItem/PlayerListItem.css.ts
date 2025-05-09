import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    transition: 'background-color 0.3s ease',
    padding: '6px 24px',
    userSelect: 'none', // NOTE: 드래그 할 때 텍스트 선택되는 문제를 방지하기 위함

    ':hover': {
      backgroundColor: lightThemeVars.color.white.hover,
    },
  },
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
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

export const number = recipe({
  base: [
    commonTextStyle,
    {
      width: 17,
      textAlign: 'center',
    },
  ],
  variants: {
    disabled: {
      true: {
        color: lightThemeVars.color.gray[300],
      },
    },
  },
});

export const name = recipe({
  base: [commonTextStyle],
  variants: {
    disabled: {
      true: {
        color: lightThemeVars.color.gray[300],
      },
    },
  },
});

export const position = recipe({
  base: [
    commonTextStyle,
    {
      color: lightThemeVars.color.gray['500'],
      fontWeight: 400,
    },
  ],
  variants: {
    disabled: {
      true: {
        color: lightThemeVars.color.gray[300],
      },
    },
  },
});
