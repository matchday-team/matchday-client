import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column', // NOTE: flex 부모일 때는 부모가 설정한 영역 사용
    flexGrow: 1,
    alignItems: 'center',
    gap: 5,
    borderRight: `1px solid ${lightThemeVars.color.primary['100']}`,
    padding: '12px 7px',
    height: 73,

    selectors: {
      '&:nth-child(n+5)': {
        borderTop: `1px solid ${lightThemeVars.color.primary['100']}`,
      },
      // NOTE: 2*4 그리드 기준이므로 그리드 구성 변경 시마다 반영 필요
      '&:nth-child(4n)': {
        borderRight: 'none',
      },
    },
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: lightThemeVars.color.white.hover,
      },
    },
  },
});

export const title = recipe({
  base: {
    lineHeight: 1.4,
    letterSpacing: -0.35,
    color: lightThemeVars.color.gray['500'],
    fontSize: 14,
    fontWeight: 400,
  },
  variants: {
    disabled: {
      true: {
        color: lightThemeVars.color.gray['300'],
      },
    },
  },
});

export const value = recipe({
  base: {
    width: 25,
    textAlign: 'center',
    lineHeight: 1,
    letterSpacing: -0.5,
    color: lightThemeVars.color.gray[600],

    fontSize: 20,
    fontWeight: 600,
  },
  variants: {
    colorIntegration: {
      true: {
        color: teamColor,
      },
    },
  },
  defaultVariants: {
    colorIntegration: true,
  },
});

export const groupContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease',
  border: `1px solid ${lightThemeVars.color.primary['300']}`,
  borderRadius: '50%',
  cursor: 'pointer',
  width: 20,
  height: 20,
  color: lightThemeVars.color.gray['600'],

  ':hover': {
    backgroundColor: lightThemeVars.color.primary['300'],
  },

  // FIXME: Base Button에 들어갈 스타일로 보임.
  ':disabled': {
    border: 'none',
    backgroundColor: lightThemeVars.color.primary[100],
    cursor: 'not-allowed',
  },
});
