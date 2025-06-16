import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const editorRootContainer = style({
  position: 'relative',
  border: `1px solid ${lightThemeVars.color.gray[200]}`,
  borderRadius: 8,
  backgroundColor: lightThemeVars.color.white.main,
  width: '100%',
  height: '100%',
  minHeight: 300,
});

export const editorBodyContainer = style({
  position: 'relative', // NOTE: placeholder 위치 조정을 위해 필요
  minHeight: 300,
});

export const editorBody = style({
  boxSizing: 'border-box',
  position: 'relative',
  borderBottomLeftRadius: 8, // NOTE: 바깥 영역에서 border가 있어서 outline이 잘려 보이는 문제 해소
  borderBottomRightRadius: 8,
  padding: 16,
  width: '100%',
  height: 500,
  minHeight: 300,
  overflow: 'auto',
  resize: 'none',
  lineHeight: 1.6,
  color: lightThemeVars.color.black,
  fontSize: 16,
});

export const editorBodyPlaceholderText = style({
  position: 'absolute',
  top: 16,
  left: 16,
  pointerEvents: 'none',
  userSelect: 'none',
  lineHeight: 1.6,
  color: lightThemeVars.color.gray[300],
  fontSize: 16,
});
