import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { lightThemeVars } from '@/styles/theme.css';

import { MatchRecordSimpleMemo } from './MatchRecordSimpleMemo';

const meta = {
  title: 'Components/MatchRecordSimpleMemo',
  component: MatchRecordSimpleMemo,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: lightThemeVars.color.white.background,
          padding: 20,
          width: 300,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof MatchRecordSimpleMemo>;

export default meta;

const MemoTemplate: StoryFn<typeof MatchRecordSimpleMemo> = () => {
  const [value, setValue] = useState('');

  return (
    <MatchRecordSimpleMemo
      value={value}
      onChange={setValue}
      placeholder='자유롭게 사용할 수 있는 메모 공간입니다'
    />
  );
};

export const Default = {
  render: MemoTemplate,
};

const text = `1. 전반전 활약
  - 패스 성공률 90%
  - 슈팅 3회
  - 어시스트 1회
  
  2. 후반전 활약
  - 패스 성공률 80%
  - 슈팅 2회
  - 골 1회
  
  3. 총평
  전반적으로 안정적인 경기력을 보여줌`;

export const LongMemo = {
  render: () => {
    const [value, setValue] = useState(text);

    return <MatchRecordSimpleMemo value={value} onChange={setValue} />;
  },
};
