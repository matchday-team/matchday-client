import { ScoreResponse } from '@/apis/models';
import { StatCounterItem } from '@/components/StatCounterItem';
import { STAT_LIST, statMapper } from '@/constants';

import * as styles from './TeamStatCounterGrid.css';

export interface TeamStatCounterGridProps {
  stats: ScoreResponse;
  onStatChange?: (stat: keyof ScoreResponse, newValue: number) => void;
}

export const TeamStatCounterGrid = ({
  stats,
  onStatChange,
}: TeamStatCounterGridProps) => {
  const handleIncrement = (stat: keyof ScoreResponse) => {
    if (onStatChange) {
      onStatChange(stat, stats[stat] + 1);
    }
  };

  const handleDecrement = (stat: keyof ScoreResponse) => {
    if (onStatChange && stats[stat] > 0) {
      onStatChange(stat, stats[stat] - 1);
    }
  };

  return (
    <div className={styles.rootContainer}>
      {STAT_LIST.map(stat => (
        <StatCounterItem
          key={stat}
          title={stat}
          value={stats[statMapper[stat]]}
          // FIXME: keyof 타입 캐스팅 없이도 가능하게?
          onIncrement={() => handleIncrement(stat as keyof ScoreResponse)}
          onDecrement={() => handleDecrement(stat as keyof ScoreResponse)}
        />
      ))}
    </div>
  );
};
