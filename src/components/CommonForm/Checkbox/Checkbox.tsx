import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { CheckboxCheckIcon } from '@/assets/icons';

import * as styles from './Checkbox.css';

interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
  children?: ReactNode;
}

export function Checkbox({
  children,
  disabled = false,
  ...props
}: CheckboxProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <input
          className={styles.checkboxInput}
          type='checkbox'
          disabled={disabled}
          {...props}
        />
        <span className={styles.checkIcon}>
          <CheckboxCheckIcon />
        </span>
      </div>
      <span className={styles.checkboxLabel({ disabled })}>{children}</span>
    </div>
  );
}
