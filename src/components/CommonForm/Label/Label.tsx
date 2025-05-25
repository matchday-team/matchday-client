import { ComponentPropsWithoutRef, ReactNode } from 'react';

import * as styles from './Label.css';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  label: string;
  children?: ReactNode;
  required?: boolean;
}

export const Label = ({
  label,
  children,
  required = false,
  ...rest
}: LabelProps) => (
  <label className={styles.textFieldLabel} {...rest}>
    {label}
    {required && <span className={styles.textFieldRequired}>*</span>}
    {children}
  </label>
);
