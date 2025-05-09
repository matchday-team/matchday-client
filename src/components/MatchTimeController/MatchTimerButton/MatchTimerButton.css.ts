import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = recipe({
  base: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4, // NOTE: 좌측 아이콘 추가 시에만 적용
    border: 'none',
    cursor: 'pointer',
    lineHeight: 1.4,
    letterSpacing: -0.35,
    fontSize: 14,
    fontWeight: 600,

    ':disabled': {
      cursor: 'not-allowed',
    },
  },
  variants: {
    variant: {
      primary: {
        background: lightThemeVars.color.primary[700],
        color: lightThemeVars.color.white.main,
        ':hover': {
          background: lightThemeVars.color.primary['700Darken'],
        },
        ':disabled': {
          borderBottom: `1px solid ${lightThemeVars.color.primary[100]}`,
          background: lightThemeVars.color.white.main,
          color: lightThemeVars.color.primary[100],
        },
      },
      danger: {
        backgroundColor: lightThemeVars.color.white.main,
        color: lightThemeVars.color.black,
        ':hover': {
          background: lightThemeVars.color.white.hover, // NOTE: 임의 추가
        },
        ':disabled': {
          background: lightThemeVars.color.gray[100],
          color: lightThemeVars.color.gray[300],
        },
      },
    },
  },
});

export const dangerIcon = recipe({
  variants: {
    disabled: {
      true: { color: lightThemeVars.color.gray[300] },
      false: { color: lightThemeVars.color.warning },
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
