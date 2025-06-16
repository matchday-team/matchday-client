import type { Meta, StoryObj } from '@storybook/react';

import { NoticeCreateForm } from './NoticeCreateForm';

const meta = {
  title: 'Routes/Teams/Notices/Create/NoticeCreateForm',
  component: NoticeCreateForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NoticeCreateForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
