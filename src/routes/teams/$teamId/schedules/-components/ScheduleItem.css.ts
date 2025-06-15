import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.primary[300],
  padding: '12px 20px 24px',
  width: '100%',
  maxWidth: 330,
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const editButton = style({
  border: 'none',
  cursor: 'pointer',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
  ':hover': {
    color: lightThemeVars.color.gray[600],
  },
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  wordBreak: 'break-word',
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 600,
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});

export const location = style({
  color: lightThemeVars.color.gray[500],
});

export const timeContainer = style({
  display: 'flex',
  gap: 8,
});

export const timeText = style({
  color: lightThemeVars.color.gray[500],
});

export const categoryTag = style({
  alignSelf: 'flex-start', // NOTE: flex 안에서 alignItems: stretch 가 기본값이어서, 본인 크기만큼만 갖도록 명시적으로 설정
  marginTop: 12,
  borderRadius: 90,
  backgroundColor: lightThemeVars.color.white.main,
  padding: '6px 10px',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.primary[700],
  fontSize: 14,
  fontWeight: 500,
});
