import type { Meta, StoryObj } from '@storybook/react';

import { ErrorMessage } from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'CommonForm/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    children: '필수 입력 항목입니다.',
  },
};

export const Empty: Story = {
  args: {
    children: '',
  },
};
