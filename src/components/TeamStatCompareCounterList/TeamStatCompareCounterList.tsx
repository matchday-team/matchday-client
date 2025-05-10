import { ScoreResponse } from '@/apis/models';
import { StatCompareCounter } from '@/components';
import { STAT_LIST_FOR_COMPARE, statMapper } from '@/constants';

import * as styles from './TeamStatCompareCounterList.css';

type TeamStatCompareCounterListProps = {
  maxValue: number;
  homeTeamStat: ScoreResponse;
  awayTeamStat: ScoreResponse;
};

export const TeamStatCompareCounterList = ({
  maxValue,
  homeTeamStat,
  awayTeamStat,
}: TeamStatCompareCounterListProps) => {
  return (
    <div className={styles.container}>
      {STAT_LIST_FOR_COMPARE.map(stat => (
        <StatCompareCounter
          key={stat}
          label={stat}
          leftValue={homeTeamStat[statMapper[stat]]}
          rightValue={awayTeamStat[statMapper[stat]]}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
