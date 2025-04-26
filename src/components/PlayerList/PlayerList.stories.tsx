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

// 기본 스토리
export const Default: Story = {
  args: {
    team: {
      id: 1,
      name: 'FC 서울',
      teamColor: '#FF0000',
      logoImageUrl: 'https://example.com/logo.png',
    },
    players: [
      {
        id: 1,
        name: '김철수',
        number: 7,
        position: 'FW',
        profileImageUrl: 'https://example.com/player1.png',
        goals: 2,
        assists: 1,
        fouls: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        id: 2,
        name: '이영희',
        number: 10,
        position: 'MF',
        profileImageUrl: 'https://example.com/player2.png',
        goals: 1,
        assists: 3,
        fouls: 1,
        yellowCards: 0,
        redCards: 0,
      },
    ],
  },
};

// 빈 선수 목록 스토리
export const EmptyPlayers: Story = {
  name: '빈 선수 목록',
  args: {
    team: {
      id: 2,
      name: '수원 삼성',
      teamColor: '#0000FF',
      logoImageUrl: 'https://example.com/logo2.png',
    },
    players: [],
  },
};
