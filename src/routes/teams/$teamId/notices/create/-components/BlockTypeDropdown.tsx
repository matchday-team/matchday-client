import { $createCodeNode } from '@lexical/code';
import {
  INSERT_CHECK_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
} from 'lexical';

import { DropdownButton } from '@/components/DropdownButton';

import * as styles from './CommonDropdown.css';

interface BlockTypeOption {
  key: string;
  name: string;
  icon: string;
  shortcut?: string;
}

const blockTypeOptions: BlockTypeOption[] = [
  { key: 'paragraph', name: 'Normal', icon: '≡' },
  { key: 'h1', name: 'Heading 1', icon: 'H1', shortcut: '⌘+Opt+1' },
  { key: 'h2', name: 'Heading 2', icon: 'H2', shortcut: '⌘+Opt+2' },
  { key: 'h3', name: 'Heading 3', icon: 'H3', shortcut: '⌘+Opt+3' },
  { key: 'ul', name: 'Bullet List', icon: '•', shortcut: '⌘+Shift+8' },
  { key: 'ol', name: 'Numbered List', icon: '1.', shortcut: '⌘+Shift+7' },
  { key: 'check', name: 'Check List', icon: '☑', shortcut: '⌘+Shift+9' },
  { key: 'quote', name: 'Quote', icon: '❝', shortcut: '^+Shift+Q' },
  { key: 'code', name: 'Code Block', icon: '</>', shortcut: '⌘+Opt+C' },
];

interface BlockTypeDropdownProps {
  blockType: string;
}

export function BlockTypeDropdown({ blockType }: BlockTypeDropdownProps) {
  const [editor] = useLexicalComposerContext();

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const formatHeading = (
    headingSize: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  ) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(headingSize));
      }
    });
  };

  const formatBulletList = () => {
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };

  const formatNumberedList = () => {
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
  };

  const formatCheckList = () => {
    editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
  };

  const formatQuote = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  };

  const formatCode = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createCodeNode());
      }
    });
  };

  const handleBlockTypeChange = (option: BlockTypeOption) => {
    switch (option.key) {
      case 'paragraph':
        formatParagraph();
        break;
      case 'h1':
        formatHeading('h1');
        break;
      case 'h2':
        formatHeading('h2');
        break;
      case 'h3':
        formatHeading('h3');
        break;
      case 'ul':
        formatBulletList();
        break;
      case 'ol':
        formatNumberedList();
        break;
      case 'check':
        formatCheckList();
        break;
      case 'quote':
        formatQuote();
        break;
      case 'code':
        formatCode();
        break;
    }
  };

  const getCurrentBlockType = () => {
    return (
      blockTypeOptions.find(option => option.key === blockType) ||
      blockTypeOptions[0]
    );
  };

  const currentBlockType = getCurrentBlockType();

  return (
    <DropdownButton
      buttonContent={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>{currentBlockType.icon}</span>
          <span>{currentBlockType.name}</span>
        </div>
      }
    >
      {blockTypeOptions.map(option => (
        <button
          key={option.key}
          type='button'
          className={styles.dropdownItem}
          onClick={() => handleBlockTypeChange(option)}
        >
          <span className={styles.dropdownItemIcon}>{option.icon}</span>
          <span className={styles.dropdownItemText}>{option.name}</span>
          {option.shortcut && (
            <span className={styles.dropdownItemShortcut}>
              {option.shortcut}
            </span>
          )}
        </button>
      ))}
    </DropdownButton>
  );
}
