import { StatCounterItem } from './StatCounterItem';
import * as styles from './TeamStatCounterGrid.css';

interface TeamStat {
  title: string;
  value: number;
}

export interface TeamStatCounterGridProps {
  stats: TeamStat[];
  onStatChange?: (index: number, newValue: number) => void;
}

export const TeamStatCounterGrid = ({
  stats,
  onStatChange,
}: TeamStatCounterGridProps) => {
  const handleIncrement = (index: number) => {
    if (onStatChange) {
      onStatChange(index, stats[index].value + 1);
    }
  };

  const handleDecrement = (index: number) => {
    if (onStatChange && stats[index].value > 0) {
      onStatChange(index, stats[index].value - 1);
    }
  };

  return (
    <div className={styles.rootContainer}>
      {stats.map((stat, index) => (
        <StatCounterItem
          key={index}
          title={stat.title}
          value={stat.value}
          onIncrement={() => handleIncrement(index)}
          onDecrement={() => handleDecrement(index)}
        />
      ))}
    </div>
  );
};
