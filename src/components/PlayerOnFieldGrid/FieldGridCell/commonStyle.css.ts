import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const commonCellContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // NOTE: border width 변동 시 이상한 Layout Shift가 발생함 - 항상 동일 width를 사용하고, 대신 boxShadow로 기본 border를 대체함
    border: '3px solid transparent',
    boxShadow: `0 0 0 1px ${lightThemeVars.color.field.lineLight}`,
    height: '100%',
    color: lightThemeVars.color.white.main,
  },
  variants: {
    isSelected: {
      true: {
        border: `3px dashed ${lightThemeVars.color.white.main}`,
      },
    },
  },
  defaultVariants: {
    isSelected: false,
  },
});
