import { globalStyle } from '@vanilla-extract/css';

globalStyle('ul', {
  margin: 0,
  padding: 0,
});

globalStyle('button', {
  border: 'none',
  backgroundColor: 'transparent',
});

globalStyle('button:disabled', {
  cursor: 'not-allowed',
});

globalStyle('h2', {
  margin: 0,
});
