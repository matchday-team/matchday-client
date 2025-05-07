import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';
import { matchRecordMocks } from '@/mocks';

import { GameScoreArea } from './GameScoreArea';

const meta = {
  title: 'Components/GameScoreArea',
  component: GameScoreArea,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: 300,
          ...assignInlineVars({
            [teamHomeColor]: '#D91920',
            [teamAwayColor]: '#003A70',
          }),
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof GameScoreArea>;

export default meta;
type Story = StoryObj<typeof GameScoreArea>;

export const Default: Story = {
  args: {
    scores: {
      homeScore: {
        goalCount: 0,
        shotCount: 0,
        validShotCount: 0,
        cornerKickCount: 0,
        offsideCount: 0,
        foulCount: 0,
        warningCount: 0,
      },
      awayScore: {
        goalCount: 0,
        shotCount: 0,
        validShotCount: 0,
        cornerKickCount: 0,
        offsideCount: 0,
        foulCount: 0,
        warningCount: 0,
      },
      homeTeamId: 1,
      awayTeamId: 2,
      matchId: 1,
    },
    homeTeam: matchRecordMocks.mockHomeTeam,
    awayTeam: matchRecordMocks.mockAwayTeam,
  },
};

// FIXME: 추후 no image API 대응 필요
// export const NoImage: Story = {
//   args: {},
// };
