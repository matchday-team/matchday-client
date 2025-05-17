import { ScoreResponse } from '@/apis/models';
import { StatCompareCounter } from '@/components';
import { compareStatList, mapStatResponseField } from '@/constants';

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
      {compareStatList.map(stat => (
        <StatCompareCounter
          key={stat}
          label={stat}
          leftValue={homeTeamStat[mapStatResponseField[stat]]}
          rightValue={awayTeamStat[mapStatResponseField[stat]]}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
