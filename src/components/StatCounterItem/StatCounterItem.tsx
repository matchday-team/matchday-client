import { MinusIcon, PlusIcon } from '@/assets/icons';

import * as styles from './StatCounterItem.css';

export interface StatCounterItemProps {
  title: string;
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export const StatCounterItem = ({
  title,
  value,
  onIncrement,
  onDecrement,
}: StatCounterItemProps) => {
  return (
    <div className={styles.rootContainer}>
      <span className={styles.title}>{title}</span>
      <div className={styles.groupContainer}>
        <button
          className={styles.button}
          onClick={onDecrement}
          aria-label='감소'
          disabled={value === 0}
        >
          <MinusIcon />
        </button>
        <span className={styles.value}>{value}</span>
        <button
          className={styles.button}
          onClick={onIncrement}
          aria-label='증가'
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};
