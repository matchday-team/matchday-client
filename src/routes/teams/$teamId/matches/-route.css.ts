import { commonPageRoot } from '@/styles/page.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPageRoot,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    paddingTop: 60,
    paddingBottom: 60,
    width: 1336,
  },
]);

export const tableContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});
