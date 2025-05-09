import { MinusIcon, PlusIcon } from '@/assets/icons';

import * as styles from './StatCounterItem.css';

export interface StatCounterItemProps {
  disabled?: boolean;
  buttonDisabled?: boolean;
  title: string;
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  colorIntegration?: boolean;
}

export const StatCounterItem = ({
  disabled,
  buttonDisabled,
  title,
  value,
  onIncrement,
  onDecrement,
  colorIntegration = true,
}: StatCounterItemProps) => {
  return (
    <div className={styles.rootContainer({ disabled })}>
      <span className={styles.title({ disabled })}>{title}</span>
      <div className={styles.groupContainer}>
        <button
          className={styles.button}
          onClick={onDecrement}
          aria-label='감소'
          disabled={disabled || buttonDisabled || value === 0}
        >
          <MinusIcon />
        </button>
        <span
          className={styles.value({
            colorIntegration: !disabled && colorIntegration,
          })}
        >
          {disabled ? '-' : value}
        </span>
        <button
          className={styles.button}
          onClick={onIncrement}
          aria-label='증가'
          disabled={disabled || buttonDisabled}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};
