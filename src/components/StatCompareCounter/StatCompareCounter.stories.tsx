import { lightThemeVars } from '@/styles/theme.css';

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';

import { StatCompareCounter } from './StatCompareCounter';

const meta = {
  title: 'Components/StatCompareCounter',
  component: StatCompareCounter,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: 280,
          ...assignInlineVars({
            [teamHomeColor]: lightThemeVars.color.soccer.red,
            [teamAwayColor]: '#003A70',
          }),
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof StatCompareCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '코너킥',
    leftValue: 7,
    rightValue: 10,
    maxValue: 20,
  },
};

export const CustomColors: Story = {
  args: {
    label: '슛',
    leftValue: 5,
    rightValue: 8,
    maxValue: 20,
  },
};

export const MaxValueExample: Story = {
  args: {
    label: '슈팅',
    leftValue: 15,
    rightValue: 20,
    maxValue: 20,
  },
};

type InteractiveValues = {
  leftValue: number;
  rightValue: number;
};

export const Stateful = () => {
  const MAX_VALUE = 30;
  const [values, setValues] = useState<InteractiveValues>({
    leftValue: 0,
    rightValue: 9,
  });

  const handleIncrease = (side: keyof InteractiveValues) => {
    setValues(prev => ({
      ...prev,
      [side]: Math.min(prev[side] + 1, MAX_VALUE),
    }));
  };

  const styles = {
    button: {
      marginTop: 20,
      display: 'flex',
      gap: 8,
    },
    container: {
      padding: 20,
      width: '100%',
    },
    info: {
      marginBottom: 10,
      fontSize: 14,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.info}>
        최대값: {MAX_VALUE} (값 범위: 0~{MAX_VALUE})
      </div>

      <StatCompareCounter
        label='코너킥'
        leftValue={values.leftValue}
        rightValue={values.rightValue}
        maxValue={MAX_VALUE}
      />

      <div style={styles.button}>
        <button onClick={() => handleIncrease('leftValue')}>
          왼쪽 값 증가
        </button>
        <button onClick={() => handleIncrease('rightValue')}>
          오른쪽 값 증가
        </button>
      </div>
    </div>
  );
};
