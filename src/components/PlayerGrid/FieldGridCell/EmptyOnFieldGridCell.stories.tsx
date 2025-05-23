import type { Meta, StoryObj } from '@storybook/react';

import { lightThemeVars } from '@/styles/theme.css';

import { EmptyOnFieldGridCell } from './EmptyOnFieldGridCell';

const meta = {
  title: 'Components/PlayerGrid/EmptyOnFieldGridCell',
  component: EmptyOnFieldGridCell,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: lightThemeVars.color.field.background,
          width: 70,
          height: 77,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyOnFieldGridCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
