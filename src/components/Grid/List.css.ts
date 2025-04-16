import { style } from '@vanilla-extract/css';

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
  padding: '16px',
  minWidth: '200px',
  maxHeight: '400px',
  overflowY: 'auto',
});

export const listTitle = style({
  marginBottom: '8px',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
});

export const listItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  transition: 'transform 0.2s ease-in-out',
  borderRadius: '4px',
  backgroundColor: 'white',
  cursor: 'move',
  padding: '8px',
  ':hover': {
    transform: 'scale(1.02)',
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
  flexDirection: 'column',
  gap: '4px',
  fontSize: '14px',
  fontWeight: 'bold',
});
