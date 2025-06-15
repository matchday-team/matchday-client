import type { Meta, StoryObj } from '@storybook/react';

import ScheduleItem from './ScheduleItem';

const meta = {
  title: 'Routes/Teams/Schedules/ScheduleItem',
  component: ScheduleItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '개별 일정을 표시하는 컴포넌트입니다. 일정의 제목, 위치, 시간, 카테고리를 보여줍니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    schedule: { control: 'object' },
    onEdit: { action: 'edit clicked' },
  },
  decorators: [
    Story => (
      <div style={{ width: '330px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScheduleItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const League: Story = {
  args: {
    schedule: {
      id: '1',
      title:
        '2025 제1차 경기도 꿈나무 축구대회 2025 제1차 경기도 꿈나무 축구대회',
      location: '서울 성동구 왕십리로 22',
      startTime: '오전 09:00',
      endTime: '오전 11:00',
      category: '대회/리그',
      date: '2025-02-11',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '대회/리그 카테고리의 일정입니다.',
      },
    },
  },
};

export const Friendly: Story = {
  args: {
    schedule: {
      id: '2',
      title: '강남FC vs 서초FC 친선경기',
      location: '강남구민체육센터',
      startTime: '오후 01:00',
      endTime: '오후 03:00',
      category: '친선 매치',
      date: '2025-02-11',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '친선 매치 카테고리의 일정입니다.',
      },
    },
  },
};
