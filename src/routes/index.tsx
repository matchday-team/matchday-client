import { createFileRoute } from '@tanstack/react-router';

import { Button, CommonLoader } from '@/components';

export const Route = createFileRoute('/')({
  component: HomePage,
  pendingComponent: CommonLoader,
});

function HomePage() {
  return (
    <div>
      <h3>Home</h3>
      <Button>Click me</Button>
    </div>
  );
}
