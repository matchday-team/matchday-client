import { style } from '@vanilla-extract/css';

export const layoutContainer = style({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
});

export const mainContent = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
});

export const contentArea = style({
  flex: 1,
  backgroundColor: '#f5f5f5',
  padding: 16,
  overflow: 'auto',
});
