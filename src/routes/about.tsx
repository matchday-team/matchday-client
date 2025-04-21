import { createFileRoute } from '@tanstack/react-router';

import { Button } from '@/components';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      Hello from About! <Button>hi</Button>
    </div>
  );
}
