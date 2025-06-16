import { useState } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $patchStyleText } from '@lexical/selection';
import { $getSelection, $isRangeSelection } from 'lexical';

import * as styles from './FontSizeControl.css';

interface FontSizeControlProps {
  value?: number;
}

export const FontSizeControl = ({ value = 15 }: FontSizeControlProps) => {
  const [editor] = useLexicalComposerContext();
  const [fontSize, setFontSize] = useState(value);

  const updateFontSize = (newSize: number) => {
    const size = Math.max(8, Math.min(72, newSize)); // 8px ~ 72px 범위로 제한
    setFontSize(size);

    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          'font-size': `${size}px`,
        });
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || fontSize;
    updateFontSize(newValue);
  };

  const incrementSize = () => {
    updateFontSize(fontSize + 1);
  };

  const decrementSize = () => {
    updateFontSize(fontSize - 1);
  };

  return (
    <div className={styles.rootContainer}>
      <button
        type='button'
        className={styles.sizeAdjustButton}
        onClick={decrementSize}
        disabled={fontSize <= 8}
        aria-label='폰트 크기 줄이기'
      >
        −
      </button>
      <input
        type='number'
        value={fontSize}
        onChange={handleInputChange}
        className={styles.sizeInput}
        min='8'
        max='72'
        aria-label='현재 폰트 크기'
      />
      <button
        type='button'
        className={styles.sizeAdjustButton}
        onClick={incrementSize}
        disabled={fontSize >= 72}
        aria-label='폰트 크기 늘리기'
      >
        +
      </button>
    </div>
  );
};
