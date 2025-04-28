import { style } from '@vanilla-extract/css';

import { commonPaper } from '@/styles/paper.css';
import { lightThemeVars } from '@/styles/theme.css';

export const container = style([
  commonPaper,
  {
    border: '4px solid #FFFFFF',
    height: 204,
  },
]);

export const header = style({
  background: '#FFFFFF',
  padding: '6px 16px',
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});

export const textarea = style({
  boxSizing: 'border-box',
  border: 'none',
  background: lightThemeVars.color.white.background,
  padding: '8px 12px',
  width: '100%',
  height: 'calc(100% - 32px)', // NOTE: calc를 사용하지 않는 방법 = ?
  resize: 'none',
  lineHeight: 1.5,
  ':focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.1)', // NOTE: 디자인에 없지만 임시로 표시
  },
  '::placeholder': {
    color: lightThemeVars.color.gray[500], // NOTE: 색상 수정 필요
  },
  fontSize: 14,
});
