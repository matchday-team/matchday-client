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
    teamType: 'home',
  },
};

// FIXME: Query 연동 후 msw 활용한 mock 필요
export const Empty: Story = {
  args: {
    teamType: 'home',
  },
};
