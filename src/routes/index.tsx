import { createFileRoute } from '@tanstack/react-router';

import { Button } from '@/components/Button';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <h3>Home</h3>
      <Button>Click me</Button>
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
}
