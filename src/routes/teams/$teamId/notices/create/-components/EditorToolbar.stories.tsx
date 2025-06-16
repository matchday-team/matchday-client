import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import type { Meta, StoryObj } from '@storybook/react';

import { EditorToolbar } from './EditorToolbar';

const initialConfig = {
  namespace: 'StoryEditor',
  theme: {},
  nodes: [
    HeadingNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    CodeNode,
    CodeHighlightNode,
    LinkNode,
    AutoLinkNode,
  ],
  onError: (error: Error) => {
    console.error('Lexical Editor Error:', error);
  },
};

const meta = {
  title: 'Routes/Teams/Notices/Create/EditorToolbar',
  component: EditorToolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <LexicalComposer initialConfig={initialConfig}>
        <Story />
      </LexicalComposer>
    ),
  ],
} satisfies Meta<typeof EditorToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
