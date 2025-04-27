import { globalStyle } from '@vanilla-extract/css';

globalStyle('ul', {
  margin: 0,
  padding: 0,
});

globalStyle('button', {
  backgroundColor: 'transparent',
});

globalStyle('button:disabled', {
  cursor: 'not-allowed',
});
