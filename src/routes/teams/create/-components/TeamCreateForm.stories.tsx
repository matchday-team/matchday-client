import type { Meta, StoryObj } from '@storybook/react';

import { TeamCreateForm } from './TeamCreateForm';

const meta = {
  title: 'Routes/Teams/Create/TeamCreateForm',
  component: TeamCreateForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '팀 생성을 위한 폼 컴포넌트',
      },
    },
  },
  argTypes: {
    onSubmit: {
      description: '폼 제출 시 호출되는 함수',
      action: 'submitted',
    },
  },
} satisfies Meta<typeof TeamCreateForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: async () => {},
    onSuccess: () => {},
  },
};
