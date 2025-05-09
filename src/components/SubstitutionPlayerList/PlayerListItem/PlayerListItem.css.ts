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

const commonTextStyle = {
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
};

export const textContainer = recipe({
  base: [
    commonTextStyle,
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 136,
      height: 44,
    },
  ],
  variants: {
    disabled: {
      true: {
        color: lightThemeVars.color.gray[300],
      },
      false: {
        color: lightThemeVars.color.black,
      },
    },
  },
});

export const textLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

// NOTE: 디자인 상 폰트 고정 폭 미적용 상태이므로, 디자인 상 93px width로 우선 고정
export const statContainer = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 16,
  },
  variants: {
    disabled: {
      true: {
        color: lightThemeVars.color.gray[300],
      },
      false: {
        color: lightThemeVars.color.black,
      },
    },
  },
});

export const number = style([
  commonTextStyle,
  {
    width: 18,
    textAlign: 'center',
  },
]);

export const name = style([
  commonTextStyle,
  {
    width: 50,
    textAlign: 'center',
  },
]);

export const sentOffIcon = style({
  color: lightThemeVars.color.primary[700],
});

export const position = style([
  commonTextStyle,
  {
    color: lightThemeVars.color.gray['500'],
    fontWeight: 400,
  },
]);

export const cautionContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  width: 17,
});

export const playerCautionCard = recipe({
  base: {
    borderRadius: 2,
    width: 8,
    height: 10,
  },
  variants: {
    variant: {
      empty: {
        backgroundColor: lightThemeVars.color.white.background,
      },
      yellow: {
        backgroundColor: lightThemeVars.color.soccer.yellow,
      },
      red: {
        backgroundColor: lightThemeVars.color.soccer.red,
      },
    },
  },
});
