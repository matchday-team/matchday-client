import type { Meta, StoryObj } from '@storybook/react';

import { GridListToggleView } from './GridListToggleView';

const meta = {
  title: 'Components/GridListToggleView',
  component: GridListToggleView,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div style={{ width: 354, height: 462 }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof GridListToggleView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    render: (isGridView: boolean) => (
      <div
        style={{
          display: 'flex',
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          backgroundColor: isGridView ? 'green' : 'darkgreen',
        }}
      >
        {isGridView ? 'gridView' : 'listView'}
      </div>
    ),
  },
};
