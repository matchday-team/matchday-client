import type { Meta, StoryObj } from '@storybook/react';

import { PlayerList } from './PlayerList';
import * as styles from './PlayerList.stories.css';

const meta = {
  title: 'Components/PlayerList',
  component: PlayerList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={styles.containerStyle}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PlayerList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockPlayer = {
  name: '김철수',
  number: 7,
  position: 'FW',
  profileImageUrl: 'https://example.com/player1.png',
  goals: 2,
  assists: 1,
  fouls: 0,
  yellowCards: 0,
  redCards: 0,
};

const createMockPlayers = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    ...mockPlayer,
    id: index + 1,
  }));
};

export const Default: Story = {
  args: {
    team: {
      id: 1,
      name: 'FC 서울',
      teamColor: '#FF0000',
      logoImageUrl: 'https://example.com/logo.png',
    },
    players: createMockPlayers(2),
    selectedPlayerId: 1,
    onPlayerSelect: () => {},
  },
};

export const FullPlayers: Story = {
  args: {
    team: {
      id: 2,
      name: '수원 삼성',
      teamColor: '#0000FF',
      logoImageUrl: 'https://example.com/logo2.png',
    },
    players: createMockPlayers(20),
    selectedPlayerId: 1,
    onPlayerSelect: () => {},
  },
};

export const EmptyPlayers: Story = {
  args: {
    team: {
      id: 2,
      name: '수원 삼성',
      teamColor: '#0000FF',
      logoImageUrl: 'https://example.com/logo2.png',
    },
    players: [],
    selectedPlayerId: 1,
    onPlayerSelect: () => {},
  },
};
