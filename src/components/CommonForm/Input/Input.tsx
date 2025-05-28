import { ComponentProps } from 'react';

import * as styles from './Input.css';

interface InputProps extends ComponentProps<'input'> {
  isError?: boolean;
}

export function Input({ isError = false, ...props }: InputProps) {
  return (
    <input aria-invalid={isError} className={styles.TextInput} {...props} />
  );
}
