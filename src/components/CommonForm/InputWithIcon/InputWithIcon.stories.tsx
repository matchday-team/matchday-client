import type { Meta, StoryObj } from '@storybook/react';

import { CalendarIcon, MagnifyingGlassIcon, UserIcon } from '@/assets/icons';

import { InputWithIcon } from './InputWithIcon';

const meta: Meta<typeof InputWithIcon> = {
  title: 'CommonForm/InputWithIcon',
  component: InputWithIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['gray-small', 'white-large'],
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    isError: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    icon: <MagnifyingGlassIcon />,
    iconPosition: 'left',
  },
};

export const IconRight: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    icon: <MagnifyingGlassIcon />,
    iconPosition: 'right',
  },
};

export const WithUserIcon: Story = {
  args: {
    placeholder: '사용자 이름을 입력하세요',
    icon: <UserIcon />,
    iconPosition: 'left',
  },
};

// 날짜 입력
export const DateInput: Story = {
  args: {
    type: 'date',
    icon: <CalendarIcon />,
    iconPosition: 'right',
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    icon: <MagnifyingGlassIcon />,
    isError: true,
    iconPosition: 'left',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    icon: <MagnifyingGlassIcon />,
    disabled: true,
    iconPosition: 'left',
  },
};

// White-Large Variant 스토리들
export const WhiteLarge: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    icon: <MagnifyingGlassIcon />,
    variant: 'white-large',
    iconPosition: 'left',
  },
};

export const WhiteLargeRight: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    icon: <MagnifyingGlassIcon />,
    variant: 'white-large',
    iconPosition: 'right',
  },
};

export const WhiteLargeError: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    icon: <MagnifyingGlassIcon />,
    variant: 'white-large',
    isError: true,
    iconPosition: 'left',
  },
};

export const CompareAllVariants: Story = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '300px',
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
          <InputWithIcon
            placeholder='기본 스타일'
            icon={<MagnifyingGlassIcon />}
            variant='gray-small'
            iconPosition='left'
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
          <InputWithIcon
            placeholder='검색 스타일'
            icon={<MagnifyingGlassIcon />}
            variant='white-large'
            iconPosition='left'
          />
        </div>
      </div>
    );
  },
};
