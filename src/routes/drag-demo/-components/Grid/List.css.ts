import { style } from '@vanilla-extract/css';

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #ccc',
  borderRadius: '8px',
  width: '300px',
  height: '600px',
  overflow: 'hidden',
});

export const listTitle = style({
  position: 'sticky',
  zIndex: 1,
  top: 0,
  borderBottom: '1px solid #eee',
  backgroundColor: 'white',
  padding: '16px',
  fontWeight: 'bold',
});

export const listContent = style({
  flex: 1,
  padding: '8px',
  overflowY: 'auto',
});

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '8px',
  border: '1px solid #eee',
  borderRadius: '8px',
  backgroundColor: 'white',
  cursor: 'move',
  padding: '8px',
  ':hover': {
    backgroundColor: '#f5f5f5',
  },
});

export const playerImage = style({
  borderRadius: '50%',
  objectFit: 'cover',
  width: '48px',
  height: '48px',
});

export const playerInfo = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: '4px',
});
