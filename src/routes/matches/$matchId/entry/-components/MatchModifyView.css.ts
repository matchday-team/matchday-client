import { style } from '@vanilla-extract/css';

import { commonContainer } from './commonStyle.css';

export const rootContainer = style([
  commonContainer,
  {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    gap: 16,
    width: 1240,
  },
]);

export const fieldContainer = style({
  flexShrink: 0,
  width: 354,
});
