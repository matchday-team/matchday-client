import { ComponentPropsWithoutRef, ReactNode } from 'react';

import * as styles from './InputWithIcon.css';

interface InputWithIconProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  icon?: ReactNode;
}

export function InputWithIcon({
  error = false,
  icon,
  ...props
}: InputWithIconProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        aria-invalid={error}
        className={styles.textInputWithIcon}
        {...props}
      />
      {icon && <div className={styles.iconContainer}>{icon}</div>}
    </div>
  );
}
