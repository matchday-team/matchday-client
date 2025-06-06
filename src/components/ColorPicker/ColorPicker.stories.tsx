import type { Meta, StoryObj } from '@storybook/react';

import { ColorPicker } from './ColorPicker';

const meta = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: { layout: 'centered' },
  decorators: [
    Story => (
      <div style={{ padding: 32, background: '#f7f7fa', minHeight: 100 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '#2196F3',
    onChange: () => {},
  },
  render: args => <ColorPicker {...args} />,
};
