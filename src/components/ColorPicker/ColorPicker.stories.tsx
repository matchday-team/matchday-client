import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import { ColorPicker } from './ColorPicker';

const meta = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: { layout: 'centered' },
  argTypes: {
    value: { control: 'color' },
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '#03A9F4',
  },
  render: args => {
    const [{ value }, updateArgs] = useArgs();

    return (
      <div>
        <ColorPicker
          {...args}
          value={value}
          onChange={color => updateArgs({ value: color })}
        />
      </div>
    );
  },
};
