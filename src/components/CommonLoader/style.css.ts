import { keyframes } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const loaderContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  height: '100%',
});

export const spinner = style({
  border: '4px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '50%',
  borderTopColor: '#3498db',
  width: '20px',
  height: '20px',
  animation: `${spin} 1s ease-in-out infinite`,
});
