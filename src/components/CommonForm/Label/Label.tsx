import { ComponentPropsWithoutRef } from 'react';

import * as styles from './Label.css';

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  label: string;
  required?: boolean;
}

export const Label = ({ label, required = false, ...props }: LabelProps) => (
  <label className={styles.rootContainer} {...props}>
    <div className={styles.labelContainer}>
      {label}
      {required && <span className={styles.requiredMark}>*</span>}
    </div>
    {props.children}
  </label>
);
