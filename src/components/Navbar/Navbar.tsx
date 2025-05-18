import * as styles from './Navbar.css';

interface NavbarProps {
  isOpen: boolean;
}

export function Navbar({ isOpen }: NavbarProps) {
  return (
    <header className={styles.navbar({ isOpen })}>
      <h1 className={styles.title}>교내 리그 3R 매치 기록</h1>
      <button className={styles.signUpButton} onClick={() => {}}>
        등록하기
      </button>
    </header>
  );
}
