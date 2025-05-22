import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { SubstitutionPlayerListItem } from './SubstitutionPlayerListItem';

const meta = {
  title: 'Components/SubstitutionPlayerList/SubstitutionPlayerListItem',
  component: SubstitutionPlayerListItem,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <ul style={{ width: 400, padding: 0, margin: 0, listStyle: 'none' }}>
        <Story />
      </ul>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SubstitutionPlayerListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    player: matchRecordMocks.mockHomePlayer,
    isDragOver: false,
    disabled: false,
  },
};

export const SubOut: Story = {
  args: {
    player: { ...matchRecordMocks.mockHomePlayer, subOut: true },
    isDragOver: false,
    disabled: false,
  },
};

export const SentOff: Story = {
  args: {
    player: { ...matchRecordMocks.mockHomePlayer, sentOff: true, redCards: 1 },
    isDragOver: false,
    disabled: false,
  },
};

export const WithCautions: Story = {
  args: {
    player: { ...matchRecordMocks.mockHomePlayer, yellowCards: 1, redCards: 0 },
    isDragOver: false,
    disabled: false,
  },
};
