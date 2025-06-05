import { ComponentProps } from 'react';

import clsx from 'clsx';

import * as styles from './Input.css';

interface InputProps extends ComponentProps<'input'> {
  isError?: boolean;
}

export function Input({ isError = false, className, ...props }: InputProps) {
  return (
    <input
      aria-invalid={isError}
      className={clsx(styles.rootContainer, className)}
      {...props}
    />
  );
}
