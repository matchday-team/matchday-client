import { useCallback, useEffect, useState } from 'react';

import { $createLinkNode } from '@lexical/link';
import { $isListNode, ListNode } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $isHeadingNode } from '@lexical/rich-text';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import clsx from 'clsx';
import {
  $createTextNode,
  $getSelection,
  $insertNodes,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  UNDO_COMMAND,
} from 'lexical';

import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  TableIcon,
  UnderlineIcon,
} from '@/assets/icons';
import { BLOCK_TYPE_TO_BLOCK_NAME, LOW_PRIORITY } from '@/constants/editor';

import { BlockTypeDropdown } from './BlockTypeDropdown';
import * as styles from './EditorToolbar.css';
import { FontFamilyDropdown } from './FontFamilyDropdown';
import { FontSizeControl } from './FontSizeControl';
import { TextColorPicker } from './TextColorPicker';

export const EditorToolbar = () => {
  const [editor] = useLexicalComposerContext();
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [blockType, setBlockType] = useState('paragraph');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();

      // NOTE: Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));

      // NOTE: Update links
      const node = anchorNode.getParent();
      if ($isListNode(node)) {
        const parentList = $getNearestNodeOfType(anchorNode, ListNode);
        const type = parentList ? parentList.getListType() : node.getListType();
        setBlockType(type);
      } else {
        if ($isHeadingNode(element)) {
          const tag = element.getTag();
          setBlockType(tag);
        } else {
          const type = element.getType();
          if (type in BLOCK_TYPE_TO_BLOCK_NAME) {
            setBlockType(type);
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        LOW_PRIORITY,
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        payload => {
          setCanUndo(payload);
          return false;
        },
        LOW_PRIORITY,
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        payload => {
          setCanRedo(payload);
          return false;
        },
        LOW_PRIORITY,
      ),
    );
  }, [editor, updateToolbar]);

  const insertLink = () => {
    const url = prompt('링크 URL을 입력하세요:');
    if (url) {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const linkNode = $createLinkNode(url);
          linkNode.append($createTextNode(url));
          $insertNodes([linkNode]);
        }
      });
    }
  };

  const insertImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = event => {
          const src = event.target?.result as string;
          console.log('이미지 업로드:', src);
          // 이후 이미지 노드 삽입 로직 추가 예정
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const insertTable = () => {
    alert('표 삽입 기능은 추후 구현 예정');
  };

  const insertHorizontalRule = () => {
    console.log('구분선 삽입 기능은 추후 구현 예정');
  };

  return (
    <div className={styles.toolbar}>
      <button
        className={clsx(styles.toolbarItem, styles.spaced)}
        disabled={!canUndo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        title='Undo (Ctrl+Z)'
        aria-label='Undo'
      >
        <i className={styles.format}>↶</i>
      </button>
      <button
        disabled={!canRedo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        title='Redo (Ctrl+Y)'
        className={styles.toolbarItem}
        aria-label='Redo'
      >
        <i className={styles.format}>↷</i>
      </button>

      <div className={styles.divider} />

      <BlockTypeDropdown blockType={blockType} />

      <div className={styles.divider} />

      <FontFamilyDropdown />
      <FontSizeControl />

      <div className={styles.divider} />

      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
        className={clsx(styles.toolbarItem, styles.spaced, {
          [styles.active]: isBold,
        })}
        title='Bold (Ctrl+B)'
        aria-label='Format Bold'
      >
        <BoldIcon className={styles.iconSize} />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
        className={clsx(styles.toolbarItem, styles.spaced, {
          [styles.active]: isItalic,
        })}
        title='Italic (Ctrl+I)'
        aria-label='Format Italics'
      >
        <ItalicIcon className={styles.iconSize} />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
        className={clsx(styles.toolbarItem, styles.spaced, {
          [styles.active]: isUnderline,
        })}
        title='Underline (Ctrl+U)'
        aria-label='Format Underline'
      >
        <UnderlineIcon className={styles.iconSize} />
      </button>

      <div className={styles.divider} />

      <TextColorPicker />

      <div className={styles.divider} />

      <button
        onClick={insertLink}
        className={styles.toolbarItem}
        title='링크 삽입'
        aria-label='Insert Link'
      >
        <LinkIcon className={styles.iconSize} />
      </button>
      <button
        onClick={insertImage}
        className={styles.toolbarItem}
        title='이미지 삽입'
        aria-label='Insert Image'
      >
        <ImageIcon className={styles.iconSize} />
      </button>
      <button
        onClick={insertTable}
        className={styles.toolbarItem}
        title='표 삽입'
        aria-label='Insert Table'
      >
        <TableIcon className={styles.iconSize} />
      </button>
      <button
        onClick={insertHorizontalRule}
        className={styles.toolbarItem}
        title='구분선 삽입'
        aria-label='Insert Horizontal Rule'
      >
        <i className={styles.format}>―</i>
      </button>

      <div className={styles.divider} />

      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
        className={styles.toolbarItem}
        title='Left Align'
        aria-label='Left Align'
      >
        <AlignLeftIcon className={styles.iconSize} />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
        className={styles.toolbarItem}
        title='Center Align'
        aria-label='Center Align'
      >
        <AlignCenterIcon className={styles.iconSize} />
      </button>
      <button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
        className={styles.toolbarItem}
        title='Right Align'
        aria-label='Right Align'
      >
        <AlignRightIcon className={styles.iconSize} />
      </button>
    </div>
  );
};
