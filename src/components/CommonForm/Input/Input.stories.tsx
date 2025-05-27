import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'CommonForm/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          width: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '팀 이름을 입력해주세요',
    error: false,
  },
  render: args => <Input {...args} />,
};

export const Error: Story = {
  args: {
    placeholder: '팀 이름을 입력해주세요',
    error: true,
  },
  render: args => <Input {...args} />,
};

export const WithValue: Story = {
  args: {
    value: 'FC 바르셀로나',
    error: false,
  },
  render: args => <Input {...args} />,
};
