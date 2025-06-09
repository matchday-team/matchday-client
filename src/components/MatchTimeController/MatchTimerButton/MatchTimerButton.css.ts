import { lightThemeVars } from '@/styles/theme.css';

import { recipe } from '@vanilla-extract/recipes';

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
      backgroundColor: lightThemeVars.color.gray[100],
      cursor: 'not-allowed',
      color: lightThemeVars.color.gray[300],
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: lightThemeVars.color.primary[700],
        color: lightThemeVars.color.white.main,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: lightThemeVars.color.primary['700Darken'],
          },
        },
      },
      danger: {
        backgroundColor: lightThemeVars.color.white.main,
        color: lightThemeVars.color.black,
        selectors: {
          '&:not(:disabled):hover': {
            backgroundColor: lightThemeVars.color.white.hover, // NOTE: 임의 추가
          },
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
