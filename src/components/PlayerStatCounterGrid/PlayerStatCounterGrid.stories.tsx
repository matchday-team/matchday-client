import { lightThemeVars } from '@/styles/theme.css';

import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { selectedTeamColorVar } from '@/features/matchRecord/styles';
import { matchRecordMocks } from '@/mocks';
import { useSelectedPlayerStore } from '@/stores';

import { PlayerStatCounterGrid } from './PlayerStatCounterGrid';

const meta = {
  title: 'Components/PlayerStatCounterGrid',
  component: PlayerStatCounterGrid,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: '280px',
          ...assignInlineVars({
            [selectedTeamColorVar]: lightThemeVars.color.soccer.red,
          }),
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof PlayerStatCounterGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  args: {
    onStatIncrement: () => {},
    onStatCancel: () => {},
  },
  decorators: [
    Story => {
      useSelectedPlayerStore.setState({
        isSelected: false,
        selectedPlayer: undefined,
      });

      return <Story />;
    },
  ],
};

export const OneYellowCard: Story = {
  args: {
    onStatIncrement: () => {},
    onStatCancel: () => {},
  },
  decorators: [
    Story => {
      useSelectedPlayerStore.setState({
        isSelected: true,
        selectedPlayer: {
          team: matchRecordMocks.mockHomeTeam,
          player: matchRecordMocks.mockPlayersByTeamType('home')[2],
        },
      });

      return <Story />;
    },
  ],
};

export const OneRedCard: Story = {
  args: {
    onStatIncrement: () => {},
    onStatCancel: () => {},
  },
  decorators: [
    Story => {
      useSelectedPlayerStore.setState({
        isSelected: true,
        selectedPlayer: {
          team: matchRecordMocks.mockHomeTeam,
          player: matchRecordMocks.mockPlayersByTeamType('home')[3],
        },
      });

      return <Story />;
    },
  ],
};
