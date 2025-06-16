import type { Meta, StoryObj } from '@storybook/react';

import { NoticeSearchFilter } from './NoticeSearchFilter';

const meta = {
  title: 'Routes/Teams/Notices/NoticeSearchFilter',
  component: NoticeSearchFilter,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: '100%',
          minWidth: 800,
          backgroundColor: '#FFF',
          padding: 20,
          borderRadius: 10,
          boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof NoticeSearchFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBackground: Story = {
  decorators: [
    Story => (
      <div
        style={{
          width: '100%',
          minWidth: 800,
          backgroundColor: '#F2F3F7',
          padding: 40,
        }}
      >
        <div
          style={{
            backgroundColor: '#FFF',
            borderRadius: 10,
            boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};
