import { LexicalComposer } from '@lexical/react/LexicalComposer';
import type { Meta, StoryObj } from '@storybook/react';

import { TextColorPicker } from './TextColorPicker';

const initialConfig = {
  namespace: 'TextColorPickerStory',
  theme: {},
  onError: (error: Error) => {
    throw error;
  },
};

const meta: Meta<typeof TextColorPicker> = {
  title: 'Components/TextColorPicker',
  component: TextColorPicker,
  decorators: [
    Story => (
      <LexicalComposer initialConfig={initialConfig}>
        <Story />
      </LexicalComposer>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
