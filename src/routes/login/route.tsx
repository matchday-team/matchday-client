import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';

import { LoginForm } from './-components';
import * as styles from './-components/LoginPage.css';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  usePageTitle('로그인');

  return (
    <div className={styles.rootContainer}>
      <div className={styles.formsContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
