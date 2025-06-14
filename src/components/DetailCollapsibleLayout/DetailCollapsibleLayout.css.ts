import { style } from '@vanilla-extract/css';

export const collapsibleContainer = style({
  display: 'flex',
  gap: 20,
});

export const defaultContainer = style({
  display: 'flex',
  flex: 1, // NOTE: shrink로 자연스럽게 줄어들게. 추후 transition 시에는 명확한 width가 있어야 할 수도.
  flexDirection: 'column',
  gap: 20,
});

export const detailContainer = style({
  flexShrink: 0,
  width: 354,
  height: '100%',
});
