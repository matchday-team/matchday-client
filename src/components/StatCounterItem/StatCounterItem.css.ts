import { lightThemeVars } from '@/styles/theme.css';

import { recipe } from '@vanilla-extract/recipes';

import { commonGridLine } from '@/components/TeamStatCounterGrid/TeamStatCounterGrid.css';
import { selectedTeamColorVar } from '@/features/matchRecord/styles';

export const rootContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column', // NOTE: flex 부모일 때는 부모가 설정한 영역 사용
    flexGrow: 1,
    alignItems: 'center',
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: lightThemeVars.color.white.hover,
      },
    },
    type: {
      grid: {
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
          // NOTE: 컨테이너 쪽에서 padding을 하면 Item의 disabled 여부에 따라 대응을 해야 해서 Item에서 분기
          [`${commonGridLine} &:first-child`]: {
            paddingLeft: 10,
          },
          [`${commonGridLine} &:last-child`]: {
            paddingRight: 10,
          },
        },
      },
      standalone: {
        gap: 10,
        padding: '12px 16px',
        width: 127,
        height: 86,
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
    textAlign: 'center',
    lineHeight: 1,
    color: lightThemeVars.color.gray[600],

    fontSize: 20,
    fontWeight: 600,
  },
  variants: {
    colorIntegration: {
      true: {
        color: selectedTeamColorVar,
      },
    },
    type: {
      grid: {
        width: 25,
        letterSpacing: -0.5,
        fontSize: 20,
        fontWeight: 600,
      },
      standalone: {
        width: 35,
        lineHeight: 1,
        letterSpacing: -0.8,
        fontSize: 32,
        fontWeight: 500,
      },
    },
  },
  defaultVariants: {
    colorIntegration: true,
  },
});

export const groupContainer = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    type: {
      grid: {
        gap: 4,
      },
      standalone: {
        gap: 6,
      },
    },
  },
});

export const button = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    border: `1px solid ${lightThemeVars.color.primary['300']}`,
    borderRadius: '50%',
    cursor: 'pointer',
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
  },
  variants: {
    type: {
      grid: {
        width: 20,
        height: 20,
      },
      standalone: {
        width: 24,
        height: 24,
      },
    },
  },
});
