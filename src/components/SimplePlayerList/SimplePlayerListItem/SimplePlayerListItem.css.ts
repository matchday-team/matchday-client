import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const rootContainer = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 24,
    userSelect: 'none',

    ':hover': {
      backgroundColor: lightThemeVars.color.white.hover,
    },
  },
  variants: {
    isDragOver: {
      true: {
        backgroundColor: lightThemeVars.color.gray[100], // NOTE: 일반 hover보다 조금 더 명확히 보이게
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        ':hover': {
          backgroundColor: 'transparent',
        },
      },
      false: {
        cursor: 'grab',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        disabled: true,
        isDragOver: true,
      },
      style: {
        backgroundColor: lightThemeVars.color.warning, // NOTE: 교체할 수 없음을 표시
      },
    },
  ],
  defaultVariants: {
    disabled: false,
    isDragOver: false,
  },
});

export const profileImage = style({
  borderRadius: '50%',
  objectFit: 'cover',
  pointerEvents: 'none', // NOTE: 드래그 할 때 텍스트 선택되는 문제를 방지하기 위함
  width: 28,
  height: 28,
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
      marginLeft: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 136,
      height: 20,
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
    marginLeft: 33,
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
