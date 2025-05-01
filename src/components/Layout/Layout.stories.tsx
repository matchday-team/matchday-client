import type { Meta, StoryObj } from '@storybook/react';
import {
  RouterProvider,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router';

import { SidebarProvider } from '@/components/Sidebar';

import { Layout } from './Layout';

const SMALL_SCREEN_WIDTH = 800;
const LARGE_SCREEN_WIDTH = 1600;

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
      return (
        <SidebarProvider>
          <Story />
        </SidebarProvider>
      );
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

export const Default: Story = {
  args: {
    children: <HomeContent />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'largeScreen',
    },
  },
  render: () => <RouterProvider router={router} />,
};

export const SmallScreen: Story = {
  args: {
    children: <HomeContent />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'smallScreen',
    },
  },
  render: () => <RouterProvider router={router} />,
};

export const LargeScreen: Story = {
  args: {
    children: <HomeContent />,
  },
  parameters: {
    viewport: {
      defaultViewport: 'largeScreen',
    },
  },
  render: () => <RouterProvider router={router} />,
};
