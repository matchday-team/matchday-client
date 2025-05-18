import { usePageTitleStore } from '@/stores';

import * as styles from './Navbar.css';

interface NavbarProps {
  isOpen: boolean;
}

export function Navbar({ isOpen }: NavbarProps) {
  const { title } = usePageTitleStore();

  return (
    <header className={styles.navbar({ isOpen })}>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.signUpButton} onClick={() => {}}>
        등록하기
      </button>
    </header>
  );
}
