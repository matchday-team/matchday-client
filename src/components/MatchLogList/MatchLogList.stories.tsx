import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { MatchLogList } from './MatchLogList';
import * as styles from './MatchLogList.stories.css';

const meta = {
  title: 'Components/MatchLogList',
  component: MatchLogList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={styles.rootContainer}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MatchLogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    teams: {
      home: matchRecordMocks.mockHomeTeam,
      away: matchRecordMocks.mockAwayTeam,
    },
    matchLength: {
      first: 45,
      second: 45,
    },
    logs: matchRecordMocks.mockLogs,
  },
};

export const EmptyPlayers: Story = {
  name: '빈 경기 로그',
  args: {
    teams: {
      home: matchRecordMocks.mockHomeTeam,
      away: matchRecordMocks.mockAwayTeam,
    },
    matchLength: {
      first: 45,
      second: 45,
    },
    logs: [],
  },
};
