import { style } from '@vanilla-extract/css';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1, // NOTE: flex 부모일 때는 부모가 설정한 영역 사용
  alignItems: 'center',
  gap: 10,
  border: `1px solid ${lightThemeVars.color.primary['100']}`,
  borderRadius: 6,
  padding: 9,
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray['500'],
  fontSize: 14,
  fontWeight: 400,
});

export const value = style({
  width: 35,
  textAlign: 'center',
  lineHeight: '1',
  letterSpacing: -0.35,
  color: teamColor,
  fontSize: 32,
  fontWeight: 500,
});

export const groupContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease',
  border: `1px solid ${lightThemeVars.color.primary['300']}`,
  borderRadius: '50%',
  cursor: 'pointer',
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray['600'],

  ':hover': {
    backgroundColor: lightThemeVars.color.primary['300'],
  },

  // FIXME: Base Button에 들어갈 스타일로 보임.
  ':disabled': {
    backgroundColor: 'transparent',
    cursor: 'not-allowed',
  },
});
