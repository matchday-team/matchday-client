import { ChevronRightIcon } from '@/assets/icons';

import * as styles from './MatchDetailLink.css';

export function MatchDetailLink() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>자세히 보기</div>
      <ChevronRightIcon className={styles.icon} />
    </div>
  );
}
