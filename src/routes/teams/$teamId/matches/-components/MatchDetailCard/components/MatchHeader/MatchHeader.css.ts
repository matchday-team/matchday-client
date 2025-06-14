import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 32,
  marginTop: 12,
  width: '100%',
});

export const teamContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 64,
});

export const teamLogoDoubleBorder = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: `3px solid ${lightThemeVars.color.white.main}`,
  border: `3px solid transparent`, // NOTE: 외부에서 색상 주입
  borderRadius: '50%',
  backgroundColor: lightThemeVars.color.white.main,
  width: 61,
  height: 61,
});

export const teamLogo = style({
  objectFit: 'cover',
  width: 36,
});

const teamTextCommon = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.white.main,
  fontSize: 14,
  fontWeight: 600,
});

export const teamInfoContainer = style([
  teamTextCommon,
  {
    marginTop: 8,
    height: 60, // NOTE: 팀명이 2줄일 경우를 대비한 높이 조절
    textAlign: 'center',
  },
  teamTextCommon,
]);

export const teamName = style([
  teamTextCommon,
  {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis', // 한글/일본어 등에서는 단어 중간에 줄 바꿈을 막음(띄어쓰기나 특수문자에서만 줄 바꿈)
    wordBreak: 'keep-all',
    color: lightThemeVars.color.white.main,
    fontWeight: 600,
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
]);

export const teamTypeLabel = style({
  color: lightThemeVars.color.primary[300],
  fontWeight: 400,
});

export const scoreSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  letterSpacing: -1,
  color: lightThemeVars.color.white.main,
  fontSize: 40,
  fontWeight: 600,
});

export const scoreDisplay = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const scoreCommon = style({
  lineHeight: 1.4,
  letterSpacing: -1,
  color: lightThemeVars.color.white.main,
  fontSize: 40,
  fontWeight: 600,
});

export const scoreNumber = style([
  scoreCommon,
  {
    lineHeight: 1.4,
    letterSpacing: -1,
    color: lightThemeVars.color.white.main,
    fontSize: 40,
    fontWeight: 600,
  },
]);

export const scoreColon = style([
  scoreCommon,
  {
    paddingBottom: 6,
  },
]);
