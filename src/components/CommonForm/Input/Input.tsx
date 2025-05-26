import { ComponentPropsWithoutRef, forwardRef } from 'react';

import * as styles from './Input.css';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, ...props }, ref) => (
    <input
      ref={ref}
      aria-invalid={error}
      className={styles.TextInput}
      {...props}
    />
  ),
);

Input.displayName = 'Input';
