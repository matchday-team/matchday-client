import { useMatches } from '@tanstack/react-router';

import * as styles from '@/components/Navbar/navbar.css';
import { useSidebar } from '@/components/Sidebar/context';

export function Navbar() {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1];
  const { width } = useSidebar();

  return (
    <header className={styles.navbar} style={{ left: `${width}px` }}>
      <h1 className={styles.title}>
        {currentRoute?.pathname === '/'
          ? '교내 리그 3R 매치 기록'
          : '교내 리그 3R 매치 기록'}
      </h1>
      <div className={styles.actions}>
        <button className={styles.primaryButton}>등록하기</button>
      </div>
    </header>
  );
}
