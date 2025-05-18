import * as styles from './Navbar.css';

interface NavbarProps {
  width: number;
}

export function Navbar({ width }: NavbarProps) {
  return (
    <header className={styles.navbar} style={{ left: `${width}px` }}>
      <h1 className={styles.title}>교내 리그 3R 매치 기록</h1>
      <button className={styles.signUpButton} onClick={() => {}}>
        등록하기
      </button>
    </header>
  );
}
