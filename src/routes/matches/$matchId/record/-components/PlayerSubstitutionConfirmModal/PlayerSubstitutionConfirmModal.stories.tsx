import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { mockAwayPlayer, mockHomePlayer } from '@/mocks/matchRecord';

import { PlayerSubstitutionConfirmModal } from './PlayerSubstitutionConfirmModal';

const meta = {
  title: 'Routes/Matches/Record/PlayerSubstitutionConfirmModal',
  component: PlayerSubstitutionConfirmModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '선수 교체 확인을 위한 모달 컴포넌트입니다.',
      },
    },
  },
  args: {
    onClose: fn(),
    onConfirm: fn(),
    isOpen: true,
  },
} satisfies Meta<typeof PlayerSubstitutionConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    outPlayer: mockHomePlayer,
    inPlayer: mockAwayPlayer,
  },
};
