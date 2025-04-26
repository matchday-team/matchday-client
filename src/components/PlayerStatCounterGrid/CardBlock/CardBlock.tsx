import { Caution } from '@/apis/caution';

import * as styles from './CardBlock.css';

export const CardBlock = ({ caution }: { caution: Caution }) => {
  return <div className={styles.rootContainer({ caution })} />;
};
