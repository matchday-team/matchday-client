import { ComponentProps, ReactNode } from 'react';

import * as styles from './InputWithIcon.css';

interface InputWithIconProps extends ComponentProps<'input'> {
  isError?: boolean;
  icon?: ReactNode;
}

export function InputWithIcon({
  isError = false,
  icon,
  ...props
}: InputWithIconProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        aria-invalid={isError}
        className={styles.textInputWithIcon}
        {...props}
      />
      {icon && <div className={styles.iconContainer}>{icon}</div>}
    </div>
  );
}
