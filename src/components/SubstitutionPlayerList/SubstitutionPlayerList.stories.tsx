import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { SubstitutionPlayerList } from './SubstitutionPlayerList';
import * as styles from './SubstitutionPlayerList.stories.css';

const meta = {
  title: 'Components/SubstitutionPlayerList',
  component: SubstitutionPlayerList,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div className={styles.container}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SubstitutionPlayerList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockSubPlayersByTeamType('home'),
    onSwap: () => {},
  },
};

// FIXME: Query 연동 후 msw 활용한 mock 필요
export const Empty: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    players: [],
    onSwap: () => {},
  },
};

export const DisabledPlayers: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockSubPlayersByTeamType('home').map(player => ({
      ...player,
      sentOff: true,
    })),
    onSwap: () => {},
  },
};
