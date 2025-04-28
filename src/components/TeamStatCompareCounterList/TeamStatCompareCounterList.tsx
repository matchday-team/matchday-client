import { StatCompareCounter } from '@/components';

import * as styles from './TeamStatCompareCounterList.css';

type Stat = '슈팅' | '유효 슈팅' | '코너 킥' | '오프 사이드' | '파울' | '경고';

const STAT_LIST: Stat[] = [
  '슈팅',
  '유효 슈팅',
  '코너 킥',
  '오프 사이드',
  '파울',
  '경고',
];

type TeamStatCompareCounterListProps = {
  maxValue: number;
  homeTeamStat: Record<Stat, number>;
  awayTeamStat: Record<Stat, number>;
};

export const TeamStatCompareCounterList = ({
  maxValue,
  homeTeamStat,
  awayTeamStat,
}: TeamStatCompareCounterListProps) => {
  return (
    <div className={styles.container}>
      {STAT_LIST.map(stat => (
        <StatCompareCounter
          key={stat}
          label={stat}
          leftValue={homeTeamStat[stat]}
          rightValue={awayTeamStat[stat]}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
