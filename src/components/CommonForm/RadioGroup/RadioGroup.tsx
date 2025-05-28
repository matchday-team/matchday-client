import * as styles from './RadioGroup.css';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  isError?: boolean; // NOTE: 디자인에는 없는데 임의로 추가
}

export const RadioGroup = ({
  options,
  value,
  onChange,
  name,
  isError = false,
}: RadioGroupProps) => {
  return (
    // NOTE: fieldset 태그는 폼 필드의 그룹을 표현
    <fieldset className={styles.radioGroup}>
      {options.map(option => (
        <label key={option.value} className={styles.radioOption}>
          <input
            type='radio'
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={e => onChange(e.target.value)}
            className={styles.hiddenInput}
          />
          <div
            className={styles.radioButton({
              selected: value === option.value,
              isError,
            })}
          />
          <span className={styles.radioLabel}>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
};
