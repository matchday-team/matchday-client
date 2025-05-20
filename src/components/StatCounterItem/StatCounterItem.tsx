import { MinusIcon, PlusIcon } from '@/assets/icons';

import * as styles from './StatCounterItem.css';

export interface StatCounterItemProps {
  disabled?: boolean;
  buttonDisabled?: boolean;
  title: string;
  type: 'grid' | 'standalone';
  value: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  colorIntegration?: boolean;
}

export const StatCounterItem = ({
  disabled,
  buttonDisabled,
  title,
  type,
  value,
  onIncrement,
  onDecrement,
  colorIntegration = true,
}: StatCounterItemProps) => {
  return (
    <div className={styles.rootContainer({ disabled, type })}>
      <span className={styles.title({ disabled })}>{title}</span>
      <div className={styles.groupContainer({ type })}>
        <button
          className={styles.button({ type })}
          onClick={onDecrement}
          aria-label='감소'
          disabled={true} // 현재 기능 미구현
          // disabled={disabled || buttonDisabled || value === 0}
        >
          <MinusIcon />
        </button>
        <span
          className={styles.value({
            colorIntegration: !disabled && colorIntegration,
            type,
          })}
        >
          {disabled ? '-' : value}
        </span>
        <button
          className={styles.button({ type })}
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
