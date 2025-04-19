import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <div>
        <h1>Matchday</h1>
        <Link to='/'>Home</Link> <Link to='/about'>About</Link>{' '}
        <Link to='/drag-demo'>Drag Demo</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
