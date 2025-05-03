import type { Meta, StoryObj } from '@storybook/react';

import { PlayerOnFieldGrid } from './PlayerOnFieldGrid';

const meta = {
  title: 'Components/PlayerOnFieldGrid',
  component: PlayerOnFieldGrid,
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
} satisfies Meta<typeof PlayerOnFieldGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    teamType: 'home',
  },
};
