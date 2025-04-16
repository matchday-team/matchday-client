import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '16px',
});

export const inputContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const numberInput = style({
  border: '1px solid rgba(0,0,0,0.2)',
  padding: '4px 8px',
  width: '60px',
  textAlign: 'center',
});

export const gridContainer = style({
  display: 'grid',
  gridTemplateRows: 'repeat(6, 60px)',
  gridTemplateColumns: 'repeat(5, 60px)',
  gap: '0',
  backgroundColor: '#34a853',
  height: '360px', // 하드코딩 없이도 가능한 방법 child 크기로만?
});

export const gridCell = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  transition: 'background-color 0.2s',
  border: '1px solid rgba(0,0,0,0.2)',
  cursor: 'pointer',

  width: '60px',
  height: '60px',
  ':hover': {
    backgroundColor: '#226e36',
  },
});

export const filledCell = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  transition: 'background-color 0.2s',
  border: '1px solid rgba(0,0,0,0.2)',
  cursor: 'move',

  width: '60px',
  height: '60px',
  ':hover': {
    backgroundColor: '#226e36',
  },
});

export const highlightCell = style({
  position: 'relative',
  '::after': {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.2,
    backgroundColor: '#226e36',
    content: '',
  },
});

export const playerImage = style({
  borderRadius: '50%',
  objectFit: 'cover',
  width: '24px',
  height: '24px',
});

export const playerInfo = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  fontSize: '12px',
});
