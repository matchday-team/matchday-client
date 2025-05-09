import { MinusIcon, PlusIcon } from '@/assets/icons';

import * as styles from './StatCounterItem.css';

export interface StatCounterItemProps {
  disabled?: boolean;
  title: string;
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  colorIntegration?: boolean;
}

export const StatCounterItem = ({
  disabled,
  title,
  value,
  onIncrement,
  onDecrement,
  colorIntegration = true,
}: StatCounterItemProps) => {
  return (
    <div className={styles.rootContainer}>
      <span className={styles.title}>{title}</span>
      <div className={styles.groupContainer}>
        <button
          className={styles.button}
          onClick={onDecrement}
          aria-label='감소'
          disabled={disabled || value === 0}
        >
          <MinusIcon />
        </button>
        <span className={styles.value({ colorIntegration })}>{value}</span>
        <button
          className={styles.button}
          onClick={onIncrement}
          aria-label='증가'
          disabled={disabled}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};
