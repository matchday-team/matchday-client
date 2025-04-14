import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { exampleQuery } from '../apis';
import { exampleQueryById } from '../apis/exampleById';
import { CommonLoader } from '../components';
import { queryClient } from '../react-query-provider';
import { button } from '../styles/button.css';
import { lightThemeClass } from '../styles/theme.css';

export const Route = createFileRoute('/')({
  component: HomePage,
  loader: () => queryClient.ensureQueryData(exampleQuery),
  // TODO: implement common loading ui
  pendingComponent: CommonLoader,
});

function HomePage() {
  const { data } = useSuspenseQuery(exampleQueryById(1));

  return (
    <div className={lightThemeClass}>
      <h3>Home</h3>
      <button className={button}>Click me</button>
      <p>{data.message}</p>
    </div>
  );
}
