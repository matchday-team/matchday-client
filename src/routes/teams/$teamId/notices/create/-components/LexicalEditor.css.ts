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
  outline: 'none',
  border: 'none',
  cursor: 'text',
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

export const textBold = style({
  fontWeight: 'bold',
});

export const textItalic = style({
  fontStyle: 'italic',
});

export const textUnderline = style({
  textDecoration: 'underline',
});

export const textStrikethrough = style({
  textDecoration: 'line-through',
});

export const textSubscript = style({
  verticalAlign: 'sub',
  fontSize: '0.8em',
});

export const textSuperscript = style({
  verticalAlign: 'super',
  fontSize: '0.8em',
});

export const textCode = style({
  borderRadius: 3,
  backgroundColor: lightThemeVars.color.white.background,
  padding: '1px 0.25rem',
  fontFamily: 'Menlo, Consolas, Monaco, monospace',
  fontSize: '94%',
});

// Headings
export const h1 = style({
  margin: '0.67em 0',
  fontSize: '2em',
  fontWeight: 'bold',
});

export const h2 = style({
  margin: '0.75em 0',
  fontSize: '1.5em',
  fontWeight: 'bold',
});

export const h3 = style({
  margin: '0.83em 0',
  fontSize: '1.17em',
  fontWeight: 'bold',
});

export const h4 = style({
  margin: '1.12em 0',
  fontSize: '1em',
  fontWeight: 'bold',
});

export const h5 = style({
  margin: '1.5em 0',
  fontSize: '0.83em',
  fontWeight: 'bold',
});

export const h6 = style({
  margin: '1.67em 0',
  fontSize: '0.75em',
  fontWeight: 'bold',
});

// Lists
export const ol = style({
  margin: 0,
  marginLeft: 16,
  padding: 0,
});

export const ul = style({
  margin: 0,
  marginLeft: 16,
  padding: 0,
});

export const listItem = style({
  margin: '8px 32px 8px 32px',
});

export const nestedListItem = style({
  listStyleType: 'none',
});

// Quote
export const quote = style({
  margin: 0,
  marginBottom: 10,
  marginLeft: 20,
  borderLeft: `4px solid ${lightThemeVars.color.gray[300]}`,
  paddingLeft: 16,
  fontStyle: 'italic',
});

// Code block
export const code = style({
  position: 'relative',
  display: 'block',
  margin: 0,
  marginTop: 8,
  marginBottom: 8,
  backgroundColor: lightThemeVars.color.white.background,
  padding: '8px 8px 8px 52px',
  overflow: 'auto',
  tabSize: 2,
  lineHeight: 1.53,
  fontFamily: 'Menlo, Consolas, Monaco, monospace',
  fontSize: 13,
});

// Code highlighting
export const tokenComment = style({
  color: '#999',
});

export const tokenPunctuation = style({
  color: '#999',
});

export const tokenProperty = style({
  color: '#905',
});

export const tokenSelector = style({
  color: '#690',
});

export const tokenOperator = style({
  color: '#9a6e3a',
});

export const tokenAttr = style({
  color: '#07a',
});

export const tokenVariable = style({
  color: '#e90',
});

export const tokenFunction = style({
  color: '#dd4a68',
});

// Link
export const link = style({
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#3578e5',
  ':hover': {
    textDecoration: 'underline',
  },
});

// Paragraph
export const paragraph = style({
  position: 'relative',
  margin: 0,
  marginBottom: 8,
  ':last-child': {
    marginBottom: 0,
  },
});
