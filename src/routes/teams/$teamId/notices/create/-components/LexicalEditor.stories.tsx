import type { Meta, StoryObj } from '@storybook/react';

import { LexicalEditor } from './LexicalEditor';

const meta = {
  title: 'Routes/Teams/Notices/Create/LexicalEditor',
  component: LexicalEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof LexicalEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '내용을 입력해주세요',
    onChange: (content: string) => console.log('Content changed:', content),
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: '여기에 공지사항 내용을 작성하세요...',
    onChange: (content: string) => console.log('Content changed:', content),
  },
};
