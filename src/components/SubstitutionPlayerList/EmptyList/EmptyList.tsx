import * as styles from './EmptyList.css';

export const EmptyList = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>교체 선수가 없습니다.</span>
    </div>
  );
};
