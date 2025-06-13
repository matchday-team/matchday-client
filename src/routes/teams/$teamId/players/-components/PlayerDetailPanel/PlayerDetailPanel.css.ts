import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 auto',
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)', // NOTE: 현재 디자인에 없는데 임시로 추가
  backgroundColor: lightThemeVars.color.white.main,
  width: '100%',
  maxWidth: 480, // NOTE: 디자인에서는 100px fixed padding top 인데, between 확장성이 더 낫다고 보임
  height: '100%',
});
