import { useState } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $patchStyleText } from '@lexical/selection';
import { $getSelection, $isRangeSelection } from 'lexical';

import { DropdownButton } from '@/components/DropdownButton';
import { PRESET_COLORS } from '@/constants/editor';

import * as styles from './TextColorPicker.css';

interface TextColorPickerProps {
  value?: string;
}

// FIXME: 추후 lexical 의존성 분리
export const TextColorPicker = ({
  value = '#000000',
}: TextColorPickerProps) => {
  const [editor] = useLexicalComposerContext();
  const [currentColor, setCurrentColor] = useState(value);

  const applyColor = (color: string) => {
    setCurrentColor(color);
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          color,
        });
      }
    });
  };

  const handleColorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    applyColor(e.target.value);
  };

  return (
    <DropdownButton
      buttonContent={
        <div className={styles.colorButtonContent}>
          <span>A</span>
          <div
            className={styles.colorPreview}
            style={{ backgroundColor: currentColor }}
          />
        </div>
      }
    >
      <div className={styles.colorPicker}>
        <div className={styles.hexInput}>
          <span>Hex</span>
          <input
            type='text'
            value={currentColor}
            onChange={e => applyColor(e.target.value)}
            className={styles.hexInputField}
            placeholder='#000000'
          />
        </div>

        <div className={styles.presetColors}>
          {PRESET_COLORS.map((color, index) => (
            <button
              key={index}
              type='button'
              className={styles.colorSwatch}
              style={{ backgroundColor: color }}
              onClick={() => applyColor(color)}
              title={color}
              aria-label={`Set color to ${color}`}
            />
          ))}
        </div>

        <div className={styles.customColorWrapper}>
          <input
            type='color'
            value={currentColor}
            onChange={handleColorInputChange}
            className={styles.customColorInput}
            aria-label='Custom color picker'
          />
          <span className={styles.customColorLabel}>사용자 정의 색상</span>
        </div>
      </div>
    </DropdownButton>
  );
};
