import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { $getRoot, EditorState } from 'lexical';

import { EditorToolbar } from './EditorToolbar';
import { initialConfig } from './LexicalEditor.config';
import * as styles from './LexicalEditor.css';

interface LexicalEditorProps {
  placeholder: string;
  onChange: (content: string) => void;
}

export const LexicalEditor = ({
  placeholder,
  onChange,
}: LexicalEditorProps) => {
  const handleEditorChange = (editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();
      const textContent = root.getTextContent();
      onChange(textContent);
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={styles.editorRootContainer}>
        <EditorToolbar />
        <div className={styles.editorBodyContainer}>
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className={styles.editorBody}
                ariaLabel='공지사항 작성 내용'
              />
            }
            placeholder={
              <div className={styles.editorBodyPlaceholderText}>
                {placeholder}
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin onChange={handleEditorChange} />
          <HistoryPlugin />
          <ListPlugin />
          <CheckListPlugin />
          <LinkPlugin />
          <TabIndentationPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
};
