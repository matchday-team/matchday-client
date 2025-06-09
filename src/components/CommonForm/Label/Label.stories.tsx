import { lightThemeVars } from '@/styles/theme.css';

import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'CommonForm/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Label>;

const inputstyle = {
  marginTop: 12,
  padding: '9px 16px',
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 4,
  background: lightThemeVars.color.white.hover,
  color: lightThemeVars.color.gray[300],
  fontSize: 14,
  width: '100%',
};

export const Default: Story = {
  args: {
    label: '팀 이름',
    required: false,
  },
  render: args => (
    <div>
      <Label {...args} />
      <input
        type='text'
        placeholder='팀 이름을 입력해주세요'
        style={inputstyle}
      />
    </div>
  ),
};

export const Required: Story = {
  args: {
    label: '팀 이름',
    required: true,
  },
  render: args => (
    <div>
      <Label {...args} />
      <input
        type='text'
        placeholder='팀 이름을 입력해주세요'
        style={inputstyle}
      />
    </div>
  ),
};
