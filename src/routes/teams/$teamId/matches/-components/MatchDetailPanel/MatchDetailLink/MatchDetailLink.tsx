import { ChevronRightIcon } from '@/assets/icons';

import * as styles from './MatchDetailLink.css';

export const MatchDetailLink = () => {
  return (
    <button className={styles.container}>
      <div className={styles.text}>자세히 보기</div>
      <ChevronRightIcon className={styles.icon} />
    </button>
  );
};
