import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $patchStyleText } from '@lexical/selection';
import { $getSelection, $isRangeSelection } from 'lexical';

import { DropdownButton } from '@/components/DropdownButton';
import { FONT_FAMILY_OPTIONS } from '@/constants/editor';

import * as commonStyles from './CommonDropdown.css';
import * as styles from './FontFamilyDropdown.css';

interface FontFamilyDropdownProps {
  value?: string;
}

export function FontFamilyDropdown({
  value = 'Arial',
}: FontFamilyDropdownProps) {
  const [editor] = useLexicalComposerContext();

  const handleFontFamilyChange = (fontFamily: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          'font-family': fontFamily,
        });
      }
    });
  };

  const currentFont =
    FONT_FAMILY_OPTIONS.find(option => option.key === value) ||
    FONT_FAMILY_OPTIONS[0];

  return (
    <DropdownButton
      buttonContent={
        <div className={styles.buttonContent}>
          <span style={{ fontFamily: currentFont.style }}>
            {currentFont.name}
          </span>
        </div>
      }
    >
      {FONT_FAMILY_OPTIONS.map(option => (
        <button
          key={option.key}
          type='button'
          className={commonStyles.dropdownItem}
          onClick={() => handleFontFamilyChange(option.style)}
          style={{ fontFamily: option.style }}
        >
          <span className={commonStyles.dropdownItemText}>{option.name}</span>
        </button>
      ))}
    </DropdownButton>
  );
}
