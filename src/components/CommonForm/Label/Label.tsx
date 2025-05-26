import { ComponentPropsWithoutRef } from 'react';

import * as styles from './Label.css';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  label: string;
  required?: boolean;
}

export const Label = ({ label, required = false, ...props }: LabelProps) => (
  <label className={styles.textFieldLabel} {...props}>
    {label}
    {required && <span className={styles.textFieldRequired}>*</span>}
    {props.children}
  </label>
);
