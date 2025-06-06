import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'CommonForm/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          width: '300px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

const sampleOptions = [
  { value: 'football', label: '축구' },
  { value: 'basketball', label: '농구' },
  { value: 'volleyball', label: '배구' },
  { value: 'tennis', label: '테니스' },
  { value: 'baseball', label: '야구' },
];

const positionOptions = [
  { value: 'forward', label: '공격수' },
  { value: 'midfielder', label: '미드필더' },
  { value: 'defender', label: '수비수' },
  { value: 'goalkeeper', label: '골키퍼' },
];

export const DefaultWithPlaceholder: Story = {
  args: {
    options: sampleOptions,
    placeholder: '종목을 선택해주세요',
    isError: false,
  },
};

export const DefaultWithValue: Story = {
  args: {
    options: sampleOptions,
    placeholder: '종목을 선택해주세요',
    value: 'football',
    isError: false,
  },
};

export const ErrorWithPlaceholder: Story = {
  args: {
    options: sampleOptions,
    placeholder: '종목을 선택해주세요',
    isError: true,
  },
};

export const ErrorWithValue: Story = {
  args: {
    options: sampleOptions,
    placeholder: '종목을 선택해주세요',
    value: 'football',
    isError: true,
  },
};

export const Interactive: Story = {
  render: args => {
    const [value, setValue] = useState(args.value);

    return (
      <Select
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
  args: {
    options: positionOptions,
    placeholder: '포지션을 선택해주세요',
    isError: false,
  },
};
