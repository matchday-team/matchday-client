import { style } from '@vanilla-extract/css';

export const gridContainer = style({
  display: 'grid',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '2px',
  border: '1px solid #ccc',
  width: '300px',
  height: '300px',
});

export const gridCell = style({
  transition: 'background-color 0.2s',
  border: '1px solid #ddd',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
});

export const filledCell = style({
  backgroundColor: '#4CAF50',
  selectors: {
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
});

export const draggableElements = style({
  display: 'flex',
  gap: '20px',
  marginBottom: '20px',
});

export const draggableElement1 = style({
  backgroundColor: '#4CAF50',
  cursor: 'grab',
  width: '50px',
  height: '50px',
});

export const draggableElement2 = style({
  backgroundColor: '#2196F3',
  cursor: 'grab',
  width: '50px',
  height: '50px',
});

export const draggableElement3 = style({
  backgroundColor: '#FF9800',
  cursor: 'grab',
  width: '50px',
  height: '50px',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

export const highlightCell = style({
  position: 'relative',
  border: '2px solid #2196F3',
  '::after': {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.2,
    backgroundColor: '#2196F3',
    content: '',
  },
});

export const inputContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const numberInput = style({
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '5px',
  width: '60px',
  textAlign: 'center',
});
