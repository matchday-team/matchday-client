import type { Meta, StoryObj } from '@storybook/react';

import { DropdownButton } from './DropdownButton';
import * as styles from './DropdownButton.stories.css';

const meta: Meta<typeof DropdownButton> = {
  title: 'Components/DropdownButton',
  component: DropdownButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonContent: '옵션 선택',
    children: (
      <div>
        <button className={styles.optionButton}>옵션 1</button>
        <button className={styles.optionButton}>옵션 2</button>
        <button className={styles.optionButton}>옵션 3</button>
      </div>
    ),
  },
};

export const Disabled: Story = {
  args: {
    buttonContent: '비활성화된 드롭다운',
    disabled: true,
    children: (
      <div>
        <button className={styles.optionButton}>옵션 1</button>
      </div>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    buttonContent: <span className={styles.iconContainer}>📝 텍스트 서식</span>,
    children: (
      <div>
        <button className={styles.optionButton}>굵게</button>
        <button className={styles.optionButton}>기울임</button>
        <button className={styles.optionButton}>밑줄</button>
      </div>
    ),
  },
};

export const LongContent: Story = {
  args: {
    buttonContent: '긴 텍스트가 포함된 드롭다운 버튼',
    children: (
      <div>
        <button className={styles.optionButton}>첫 번째 옵션입니다</button>
        <button className={styles.optionButton}>
          두 번째 옵션으로 더 긴 텍스트입니다
        </button>
        <button className={styles.optionButton}>세 번째 옵션</button>
      </div>
    ),
  },
};
