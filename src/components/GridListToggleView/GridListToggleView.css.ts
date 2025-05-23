import { style } from '@vanilla-extract/css';

import { commonPaper } from '@/styles/paper.css';
import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style([
  commonPaper,
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 5,
    width: '100%',
    height: 462,
  },
]);

export const toggleButton = style({
  position: 'absolute',
  top: -26,
  right: 0,
  border: 'none',
  cursor: 'pointer',
  textDecorationLine: 'underline',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});
