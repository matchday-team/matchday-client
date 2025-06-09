import { lightThemeVars } from 'src/styles/theme.css';

import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    transition: 'all 0.2s ease',
    borderRadius: 8,
    padding: '12px 20px',
    height: 44,
    lineHeight: 1.4,
    letterSpacing: -0.35,
    fontSize: 14,
    ':disabled': {
      // NOTE: 모든 variant의 disabled 상태가 동일 스타일
      border: `1px solid ${lightThemeVars.color.gray[100]}`,
      backgroundColor: lightThemeVars.color.white.hover,
      cursor: 'not-allowed',
      color: lightThemeVars.color.gray[300],
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: lightThemeVars.color.primary[700],
        color: lightThemeVars.color.white.main,
        fontWeight: 600,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: lightThemeVars.color.primary['700Darken'],
          },
        },
      },
      danger: {
        border: `1.5px solid ${lightThemeVars.color.warning}`,
        backgroundColor: lightThemeVars.color.white.main,
        color: lightThemeVars.color.black,
        fontWeight: 500,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: lightThemeVars.color.white.hover,
          },
        },
      },
      default: {
        border: `1px solid ${lightThemeVars.color.primary[100]}`,
        backgroundColor: lightThemeVars.color.white.main,
        color: lightThemeVars.color.gray[500],
        fontWeight: 600,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: lightThemeVars.color.white.hover,
          },
        },
      },
    },
  },
});
