export const LOW_PRIORITY = 1;

export const BLOCK_TYPE_TO_BLOCK_NAME = {
  code: 'Code Block',
  h1: 'Large Heading',
  h2: 'Medium Heading',
  h3: 'Small Heading',
  h4: 'Heading',
  h5: 'Heading',
  ol: 'Numbered List',
  paragraph: 'Normal',
  quote: 'Quote',
  ul: 'Bulleted List',
} as const;

export const FONT_FAMILY_OPTIONS = [
  { key: 'Arial', name: 'Arial', style: 'Arial, sans-serif' },
  { key: 'Courier New', name: 'Courier New', style: 'Courier New, monospace' },
  { key: 'Georgia', name: 'Georgia', style: 'Georgia, serif' },
  {
    key: 'Times New Roman',
    name: 'Times New Roman',
    style: 'Times New Roman, serif',
  },
  {
    key: 'Trebuchet MS',
    name: 'Trebuchet MS',
    style: 'Trebuchet MS, sans-serif',
  },
  { key: 'Verdana', name: 'Verdana', style: 'Verdana, sans-serif' },
] as const;

export const PRESET_COLORS = [
  '#d73027',
  '#fc8d59',
  '#fee08b',
  '#8c510a',
  '#91cf60',
  '#41ab5d',
  '#9970ab',
  '#8073ac',
  '#4575b4',
  '#74add1',
  '#abd9e9',
  '#000000',
  '#404040',
  '#808080',
  '#c0c0c0',
  '#ffffff',
] as const;
