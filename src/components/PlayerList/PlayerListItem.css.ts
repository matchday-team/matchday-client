import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  borderBottom: `1px solid ${lightThemeVars.color.primary[100]}`,
  padding: '0 20px',
  height: 40,

  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },

    '&:hover': {
      backgroundColor: lightThemeVars.color.white.hover,
    },
  },
});

export const profileImage = style({
  borderRadius: '50%',
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
    textAlign: 'center',
  },
]);

// NOTE: 디자인 상 폰트 고정 폭 미적용 상태이므로, 디자인 상 93px width로 우선 고정
export const statContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: 93,
  //gap: 36, // 원본 디자인
});
