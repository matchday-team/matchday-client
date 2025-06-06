import { useState } from 'react';

import * as styles from './ColorPicker.css';

const presetColors = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#795548',
  '#607D8B',
  '#FFFFFF',
  '#000000',
];

interface ColorPickerProps {
  value?: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ value, onChange }: ColorPickerProps) => {
  const [selected, setSelected] = useState(value);

  const handleSelect = (color: string) => {
    setSelected(color);
    onChange(color);
  };

  return (
    <div className={styles.container}>
      {presetColors.map(color => (
        <div key={color} className={styles.colorContainer}>
          <button
            type='button'
            className={styles.selectedColor({
              selected: selected === color,
              isWhite: color === '#FFFFFF',
            })}
            style={{ backgroundColor: color }}
            onClick={() => handleSelect(color)}
            aria-label={color}
          ></button>
        </div>
      ))}
    </div>
  );
};
