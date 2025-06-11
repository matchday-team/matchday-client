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
  argTypes: {
    variant: {
      control: 'radio',
      options: ['gray-small', 'white-large'],
    },
    isError: {
      control: 'boolean',
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          width: '300px',
          height: '300px',
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

const filterPositionOptions = [
  { value: '', label: '포지션' },
  { value: 'FW', label: 'FW' },
  { value: 'MF', label: 'MF' },
  { value: 'DF', label: 'DF' },
  { value: 'GK', label: 'GK' },
];

const footOptions = [
  { value: '', label: '주발' },
  { value: '왼발', label: '왼발' },
  { value: '오른발', label: '오른발' },
  { value: '양발', label: '양발' },
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

    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    options: positionOptions,
    placeholder: '포지션을 선택해주세요',
    isError: false,
  },
};

export const WhiteLarge: Story = {
  args: {
    options: filterPositionOptions,
    variant: 'white-large',
  },
};

export const WhiteLargeWithValue: Story = {
  args: {
    options: filterPositionOptions,
    value: 'FW',
    variant: 'white-large',
  },
};

export const WhiteLargeError: Story = {
  args: {
    options: filterPositionOptions,
    variant: 'white-large',
    isError: true,
  },
};

export const VariantComparison: Story = {
  render: () => {
    const [defaultValue, setDefaultValue] = useState('');
    const [filterValue, setFilterValue] = useState('');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          width: '250px',
        }}
      >
        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Gray Small Variant
          </label>
          <Select
            options={sampleOptions}
            value={defaultValue}
            onChange={setDefaultValue}
            variant='gray-small'
            placeholder='기본 스타일'
          />
        </div>
        <div>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            White Large Variant
          </label>
          <Select
            options={filterPositionOptions}
            value={filterValue}
            onChange={setFilterValue}
            variant='white-large'
          />
        </div>
      </div>
    );
  },
  decorators: [
    Story => (
      <div style={{ width: '300px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MemberFiltersExample: Story = {
  render: () => {
    const [position, setPosition] = useState('');
    const [foot, setFoot] = useState('');

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Select
          options={filterPositionOptions}
          value={position}
          onChange={setPosition}
          variant='white-large'
        />
        <Select
          options={footOptions}
          value={foot}
          onChange={setFoot}
          variant='white-large'
        />
      </div>
    );
  },
  decorators: [
    Story => (
      <div style={{ width: '400px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};
