import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';
import * as styles from './Label.css';

const meta: Meta<typeof Label> = {
  title: 'CommonForm/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={styles.textFieldLabel}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    label: '팀 이름',
    required: false,
  },
  render: args => <Label {...args}> </Label>,
};

export const Required: Story = {
  args: {
    label: '팀 이름',
    required: true,
  },
  render: args => <Label {...args}></Label>,
};
