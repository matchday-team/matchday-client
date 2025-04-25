import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `1px solid ${lightThemeVars.color.primary[100]}`, // NOTE: 고정 폭 사용
  borderRadius: 10,
  paddingBottom: 4,
  height: 228,
  overflow: 'hidden',
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${lightThemeVars.color.primary[100]}`,
  padding: '10px 20px',
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 600,
  fontStyle: 'normal',
});

export const logListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',

  // FIXME: 디자인과 일치하지는 않는데 - 우선 진행
  maskImage: `linear-gradient(
    to top,
    #fff 30%,
    rgba(255,255,255,0.70) 75%,
    rgba(255,255,255,0.3) 100%
  )`,
});
