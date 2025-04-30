import type { Meta, StoryObj } from '@storybook/react';
import {
  RouterProvider,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router';

import { SidebarProvider } from '@/components/Sidebar';

import { Layout } from './Layout';

const meta = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
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

const HomeContent = () => <div style={{ padding: 70 }}></div>;

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
  render: () => <RouterProvider router={router} />,
};
