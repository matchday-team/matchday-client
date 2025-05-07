import { style } from '@vanilla-extract/css';

import { commonContainer } from './commonStyle.css';

export const rootContainer = style([
  commonContainer,
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumn: 'span 3',
    gap: 16,
  },
]);
