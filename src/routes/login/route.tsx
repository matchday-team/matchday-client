import { useEffect } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { usePageTitleStore } from '@/stores';

import { LoginForm } from './-components';
import * as styles from './-components/LoginPage.css';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const { setTitle } = usePageTitleStore();

  useEffect(() => {
    setTitle('로그인');
  }, []);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.formsContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
