import { ComponentProps, ReactNode } from 'react';

import { MagnifyingGlassIcon } from '@/assets/icons';

import * as styles from './InputWithIcon.css';

interface InputWithIconProps extends ComponentProps<'input'> {
  isError?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'gray-small' | 'white-large';
}

export function InputWithIcon({
  isError = false,
  icon = <MagnifyingGlassIcon />,
  iconPosition = 'left',
  variant = 'gray-small',
  ...props
}: InputWithIconProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        aria-invalid={isError}
        className={styles.textInput({ variant, iconPosition })}
        {...props}
      />
      {icon && (
        <div className={styles.iconContainer({ variant, iconPosition })}>
          {icon}
        </div>
      )}
    </div>
  );
}
