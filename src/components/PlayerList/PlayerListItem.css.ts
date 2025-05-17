import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

import { teamColor } from './TeamColor.css';

export const rootContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',

    justifyContent: 'space-between',
    borderTop: `2px solid transparent`,
    borderBottom: `2px solid transparent`,
    boxShadow: `0 1px 0 0 ${lightThemeVars.color.primary[100]}`, // NOTE: border-width 변동이 있는 디자인이어서, boxShadow로 기본 border를 표현
    padding: '0 20px',
    height: 40,

    selectors: {
      '&:hover': {
        backgroundColor: lightThemeVars.color.white.hover,
      },
    },
  },
  variants: {
    isSelected: {
      true: {
        borderTop: `2px dashed ${teamColor}`,
        borderBottom: `2px dashed ${teamColor}`,
      },
    },
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
    isSelected: false,
    isDragOver: false,
    disabled: false,
  },
});

export const profileImage = style({
  borderRadius: '50%',
  objectFit: 'cover',
  pointerEvents: 'none', // NOTE: 드래그 할 때 텍스트 선택되는 문제를 방지하기 위함
  width: 24,
  height: 24,
});

export const infoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

// NOTE: 중복 제거 필요해보임 (Typography)
export const commonText = style({
  lineHeight: '140%',
  letterSpacing: '-0.35px',
  color: lightThemeVars.color.black,
  fontSize: '14px',
  fontWeight: 500,
  fontStyle: 'normal',
});

export const name = style([
  commonText,
  {
    width: 50,
    textAlign: 'center',
  },
]);

export const subInIcon = style({
  transform: 'rotate(180deg)',
  color: lightThemeVars.color.soccer.red,
});

export const position = style([
  commonText,
  {
    color: lightThemeVars.color.gray[500],
    fontWeight: 400,
  },
]);

export const number = style([
  commonText,
  {
    width: 17,
  },
]);

// NOTE: 디자인 상 폰트 고정 폭 미적용 상태이므로, 디자인 상 93px width로 우선 고정
export const statContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: 93,
  //gap: 36, // 원본 디자인
});

export const cautionContainer = style([
  number,
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
]);

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
