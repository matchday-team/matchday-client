import type { Meta, StoryObj } from '@storybook/react';

import { SnackbarViewForDebug } from './SnackbarViewForDebug';

const meta: Meta<typeof SnackbarViewForDebug> = {
  title: 'Components/SnackbarViewForDebug',
  component: SnackbarViewForDebug,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['success', 'error', 'warning', 'info'],
      },
    },
    message: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SnackbarViewForDebug>;

export const Success: Story = {
  args: {
    variant: 'success',
    message: '성공적으로 저장되었습니다.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    message: '오류가 발생했습니다. 다시 시도해주세요.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: '경고: 저장하지 않은 변경사항이 있습니다.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    message: '새로운 기능이 추가되었습니다!',
  },
};

export const LongMessage: Story = {
  args: {
    variant: 'info',
    message:
      '이것은 매우 긴 메시지 예시입니다. 스낵바가 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다. 이 메시지는 두 줄 이상으로 표시될 수 있습니다.',
  },
};
