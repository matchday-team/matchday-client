import * as styles from './MatchRecordSimpleMemo.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const MatchRecordSimpleMemo = ({
  value,
  onChange,
  placeholder,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>간편 메모</span>
      </div>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
