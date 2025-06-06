import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: lightThemeVars.color.white.main,
  paddingBottom: 70,
});

export const title = style({
  marginTop: 44,
  marginBottom: -4, // NOTE: gap 표현 대신 padding을 사용했고, 여백이 부족해서 minus margin으로 여기서 보정
  lineHeight: 1.4,
  letterSpacing: -0.6,
  color: lightThemeVars.color.black,
  fontSize: 24,
  fontWeight: 600,
  fontStyle: 'normal',
});

export const editViewRootContainer = style({
  display: 'flex',
  flex: 1,
  paddingTop: 24, // NOTE: 원래 gap으로 표현되어야 하지만, gap을 쓰면 자식 요소가 해당 영역에 뭔갈 표시할 수가 없음.
});
