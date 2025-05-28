import { ComponentPropsWithoutRef } from 'react';

import * as styles from './Button.css';

type ButtonVariant = 'primary' | 'danger';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button({ variant })} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
