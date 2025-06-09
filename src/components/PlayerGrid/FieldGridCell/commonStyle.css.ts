import { lightThemeVars } from '@/styles/theme.css';

import { recipe } from '@vanilla-extract/recipes';

export const commonCellContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid transparent',
    boxShadow: `0 0 0 1px ${lightThemeVars.color.field.lineLight}`,
    // NOTE: border width 변동 시 이상한 Layout Shift가 발생함 - 항상 동일 width를 사용하고, 대신 boxShadow로 기본 border를 대체함
    height: '100%',
    userSelect: 'none', // FIXME: 겹치는 모서리 부분에는 더 색이 진한 문제가 존재함
    color: lightThemeVars.color.white.main,

    ':hover': {
      backgroundColor: lightThemeVars.color.field.backgroundDarken,
    },
  },
  variants: {
    isSelected: {
      true: {
        border: `2px dashed ${lightThemeVars.color.white.main}`,

        ':hover': {
          border: `2px dashed ${lightThemeVars.color.white.main}`,
        },
      },
    },
    isDragOver: {
      true: {
        backgroundColor: lightThemeVars.color.field.backgroundDarken,
        userSelect: 'none',
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
    isSelected: false,
    isDragOver: false,
    disabled: false,
  },
});
