import { ScoreResponse, TeamResponse } from '@/apis/models';
import { StatCounterItem } from '@/components/StatCounterItem';
import {
  MatchEventType,
  Stat,
  mapStatRequestField,
  mapStatResponseField,
  teamStatList,
} from '@/constants';

import * as styles from './TeamStatCounterGrid.css';

export interface TeamStatCounterGridProps {
  team: TeamResponse;
  stats: ScoreResponse;
  onStatChange?: (
    matchEvent: MatchEventType,
    teamId: number,
    isIncrement: boolean,
  ) => void;
}

export const TeamStatCounterGrid = ({
  team,
  stats,
  onStatChange,
}: TeamStatCounterGridProps) => {
  const handleIncrement = (stat: Stat) => {
    onStatChange?.(mapStatRequestField[stat], team.id, true);
  };

  const handleDecrement = (stat: Stat) => {
    onStatChange?.(mapStatRequestField[stat], team.id, false);
  };

  const firstLine = teamStatList.slice(0, 4);
  const secondLine = teamStatList.slice(4, 8);

  // NOTE: grid로 4*2 구성하고 싶었지만, 컨테이너 padding에도 border를 적용해야 하므로 flex로 렌더링
  return (
    <div className={styles.rootContainer}>
      <div className={styles.gridLine}>
        {firstLine.map(stat => (
          <StatCounterItem
            key={stat}
            type='grid'
            title={stat}
            value={stats[mapStatResponseField[stat]]}
            onIncrement={() => handleIncrement(stat)}
            onDecrement={() => handleDecrement(stat)}
          />
        ))}
      </div>
      <div className={styles.gridLine}>
        {secondLine.map(stat => (
          <StatCounterItem
            key={stat}
            type='grid'
            title={stat}
            value={stats[mapStatResponseField[stat]]}
            onIncrement={() => handleIncrement(stat)}
            onDecrement={() => handleDecrement(stat)}
          />
        ))}
      </div>
    </div>
  );
};
