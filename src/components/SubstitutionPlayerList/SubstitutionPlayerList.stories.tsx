import type { Meta, StoryObj } from '@storybook/react';

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
    players: [
      { number: '7', name: '손흥민', position: 'FW' },
      { number: '10', name: '이강인', position: 'MF' },
      { number: '4', name: '김민재', position: 'DF' },
      { number: '1', name: '김승규', position: 'GK' },
      { number: '11', name: '황희찬', position: 'FW' },
      { number: '6', name: '황인범', position: 'MF' },
      { number: '3', name: '김진수', position: 'DF' },
    ],
  },
};

export const Empty: Story = {
  args: {
    players: [],
  },
};
