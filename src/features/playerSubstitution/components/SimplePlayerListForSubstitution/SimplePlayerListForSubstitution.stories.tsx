import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { SimplePlayerListForSubstitution } from './SimplePlayerListForSubstitution';
import * as styles from './SimplePlayerListForSubstitution.stories.css';

const meta = {
  title: 'Components/SimplePlayerListForSubstitution',
  component: SimplePlayerListForSubstitution,
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
} satisfies Meta<typeof SimplePlayerListForSubstitution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'bench',
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockSubPlayersByTeamType('home'),
  },
};

// FIXME: Query 연동 후 msw 활용한 mock 필요
export const Empty: Story = {
  args: {
    mode: 'bench',
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: [],
  },
};

export const DisabledPlayers: Story = {
  args: {
    mode: 'bench',
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockSubPlayersByTeamType('home').map(player => ({
      ...player,
      sentOff: true,
    })),
  },
};
