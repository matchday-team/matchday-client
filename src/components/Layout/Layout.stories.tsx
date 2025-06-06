import type { Meta, StoryObj } from '@storybook/react';
import {
  RouterProvider,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router';

import { SIDEBAR_BREAKPOINT } from '@/constants';

import { Layout } from './Layout';

const SMALL_SCREEN_WIDTH = SIDEBAR_BREAKPOINT - 20;
const LARGE_SCREEN_WIDTH = SIDEBAR_BREAKPOINT + 20;

const meta = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    viewport: {
      viewports: {
        smallScreen: {
          name: 'Small Screen',
          styles: {
            width: `${SMALL_SCREEN_WIDTH}px`,
            height: '100%',
          },
        },
        largeScreen: {
          name: 'Large Screen',
          styles: {
            width: `${LARGE_SCREEN_WIDTH}px`,
            height: '100%',
          },
        },
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    Story => {
      return <Story />;
    },
  ],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

const HomeContent = () => <div style={{ padding: 70 }}>화면 부분</div>;

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <HomeContent />
    </Layout>
  ),
});

const router = createRouter({
  routeTree: rootRoute,
});

const createStory = (viewportName: string): Story => ({
  args: {
    children: <HomeContent />,
  },
  parameters: {
    viewport: {
      defaultViewport: viewportName,
    },
  },
  render: () => <RouterProvider router={router} />,
});

export const Default = createStory('largeScreen');
export const SmallScreen = createStory('smallScreen');
export const LargeScreen = createStory('largeScreen');
