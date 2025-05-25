import { ReactNode } from 'react';

import * as styles from './Label.css';

interface LabelProps {
  label: string;
  children?: ReactNode;
  required?: boolean;
}

export const Label = ({ label, children, required = false }: LabelProps) => (
  <label className={styles.textFieldLabel}>
    {label}
    {required && <span className={styles.textFieldRequired}>*</span>}
    {children}
  </label>
);
