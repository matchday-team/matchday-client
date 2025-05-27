import { ComponentPropsWithoutRef } from 'react';

import * as styles from './Input.css';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

export function Input({ error = false, ...props }: InputProps) {
  return <input aria-invalid={error} className={styles.TextInput} {...props} />;
}
