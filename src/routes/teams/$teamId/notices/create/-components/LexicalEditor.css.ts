import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const editorWrapper = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const editorContainer = style({
  position: 'relative',
  border: `1px solid ${lightThemeVars.color.gray[200]}`,
  borderRadius: 8,
  backgroundColor: lightThemeVars.color.white.main,
  width: '100%',
  height: '100%',
  minHeight: 300,
  overflow: 'hidden',
});

export const editorInner = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  minHeight: 300,
});

export const contentEditable = style({
  boxSizing: 'border-box',
  position: 'relative',
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

export const placeholder = style({
  position: 'absolute',
  top: 16,
  left: 16,
  pointerEvents: 'none',
  userSelect: 'none',
  lineHeight: 1.6,
  color: lightThemeVars.color.gray[300],
  fontSize: 16,
});
