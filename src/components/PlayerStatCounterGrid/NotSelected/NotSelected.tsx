import * as styles from './NotSelected.css';

export const NotSelected = () => {
  return (
    <div className={styles.rootContainer}>
      <span className={styles.text}>선수를 선택해주세요</span>
    </div>
  );
};
