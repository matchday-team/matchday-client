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
}

export const RadioGroup = ({
  options,
  value,
  onChange,
  name,
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
            })}
          />
          <span className={styles.radioLabel}>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
};
