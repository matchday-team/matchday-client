import { ComponentPropsWithoutRef } from 'react';

import { CheckboxCheckIcon } from '@/assets/icons';

import * as styles from './Checkbox.css';

interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export function Checkbox({
  label,
  id,
  checked,
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <input
          className={styles.checkboxInput}
          id={id}
          type='checkbox'
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <span className={styles.checkIcon}>
          <CheckboxCheckIcon />
        </span>
      </div>
      <label
        className={styles.checkboxLabel}
        htmlFor={id}
        data-checked={checked}
      >
        {label}
      </label>
    </div>
  );
}
