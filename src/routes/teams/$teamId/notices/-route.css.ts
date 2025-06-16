import { commonPageRoot } from '@/styles/page.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPageRoot,
  {
    display: 'flex',
    backgroundColor: '#F2F3F7',
    overflow: 'hidden',
  },
]);

export const pageContainer = style({
  flexBasis: '0',
  flexGrow: 1,
  flexShrink: 0,
  width: 'fit-content',
});

export const tableContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 59,
  marginRight: 22,
  marginLeft: 21,
});

export const scrollbar = style({
  display: 'flex',
  flexShrink: 0,
  marginTop: 155,
  borderRadius: 100,
  backgroundColor: '#E5E5EC',
  width: 4,
  height: 195,
});
