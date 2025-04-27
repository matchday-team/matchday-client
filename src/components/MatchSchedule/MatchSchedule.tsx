import * as styles from './MatchSchedule.css';

interface MatchScheduleItem {
  label: string;
  value: string;
}

interface MatchScheduleProps {
  items: MatchScheduleItem[];
}

export const MatchSchedule = ({ items }: MatchScheduleProps) => {
  return (
    <div className={styles.container}>
      {items.map(({ label, value: itemValue }) => (
        <div key={label} className={styles.infoItem}>
          <div className={styles.labelContainer}>
            <div className={styles.label}>{label}</div>
          </div>
          <div className={styles.value}>{itemValue}</div>
        </div>
      ))}
    </div>
  );
};
