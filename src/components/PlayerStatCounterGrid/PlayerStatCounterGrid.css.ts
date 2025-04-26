import { style } from '@vanilla-extract/css';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: `2px solid ${teamColor}`,
  borderRadius: 10,
});

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  paddingTop: 36,
  paddingRight: 15,
  paddingBottom: 24,
  paddingLeft: 15,
});

export const statContainer = style({
  display: 'flex',
  gap: 6,
});

export const cautionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 9,
  border: `1px solid ${lightThemeVars.color.primary['100']}`,
  borderRadius: 6,
  padding: '8.5px 7px',
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray['600'],
  fontSize: 14,
  fontWeight: 400,
});

export const cardBlockContainer = style({
  display: 'flex',
  alignSelf: 'stretch', // 부모가 alignItems: center 이면 자식이 자동으로 100% 할당x
  justifyContent: 'center',
  gap: 8,
});
