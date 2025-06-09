import { lightThemeRawValues, lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { hexColorAlpha } from '@/styles/colorUtils';

export const radioGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: 24,
});

export const radioOption = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  cursor: 'pointer',
});

export const hiddenInput = style({
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
});

export const radioButton = recipe({
  base: {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    alignItems: 'center', // NOTE: 자식 요소를 중앙에 정렬해 RadioButton 모양을 재현
    justifyContent: 'center',
    border: `1px solid ${lightThemeVars.color.gray[300]}`,
    borderRadius: '50%',
    width: 16,
    height: 16,

    selectors: {
      // NOTE: input의 focus 이벤트에 의존
      [`${hiddenInput}:focus + &`]: {
        outline: `1px solid ${lightThemeVars.color.primary[700]}`,
        outlineOffset: 2,
      },
    },
  },
  variants: {
    selected: {
      true: {
        border: `1px solid ${lightThemeVars.color.primary[700]}`,
        // NOTE: after는 자식 요소로 동작
        '::after': {
          borderRadius: '50%',
          backgroundColor: lightThemeVars.color.primary[700],
          width: 8,
          height: 8,
          content: '""',
        },
      },
    },
    isError: {
      true: {
        outline: `1px solid ${hexColorAlpha(lightThemeRawValues.color.warning, 80)}`,
        borderColor: lightThemeRawValues.color.warning,
      },
    },
  },
});

export const radioLabel = style({
  lineHeight: '140%',
  letterSpacing: '-0.35px',
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});
