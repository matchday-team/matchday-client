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

  const firstLine = STAT_LIST.slice(0, 4);
  const secondLine = STAT_LIST.slice(4, 8);

  // NOTE: grid로 4*2 구성하고 싶었지만, 컨테이너 padding에도 border를 적용해야 하므로 flex로 렌더링
  return (
    <div className={styles.rootContainer}>
      <div className={styles.gridLine}>
        {firstLine.map(stat => (
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
      <div className={styles.gridLine}>
        {secondLine.map(stat => (
          <StatCounterItem
            key={stat}
            title={stat}
            value={stats[statMapper[stat]]}
            onIncrement={() => handleIncrement(stat as keyof ScoreResponse)}
            onDecrement={() => handleDecrement(stat as keyof ScoreResponse)}
          />
        ))}
      </div>
    </div>
  );
};
