import { ComponentPropsWithoutRef } from 'react';

import { ChevronDownIcon } from '@/assets/icons';

import * as styles from './Select.css';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  options: Option[];
  placeholder: string;
  isError?: boolean;
}

export const Select = ({
  options,
  placeholder,
  isError = false,
  ...props
}: SelectProps) => {
  return (
    <div className={styles.selectContainer}>
      <select aria-invalid={isError} className={styles.select} {...props}>
        {/* NOTE: select 태그에는 placeholder 기능이 없음 */}
        <option value='' disabled>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon className={styles.chevronIcon} />
    </div>
  );
};
