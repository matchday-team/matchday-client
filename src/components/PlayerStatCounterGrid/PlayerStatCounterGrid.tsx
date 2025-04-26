import { StartingPlayer, Team } from '@/apis';
import { StatCounterItem } from '@/components/StatCounterItem';

import { CardBlock } from './CardBlock';
import { PlayerBlock } from './PlayerBlock';
import * as styles from './PlayerStatCounterGrid.css';

interface PlayerStatCounterGridProps {
  team: Team;
  player: StartingPlayer;
}

const statFields = ['득점', '어시스트'];

export const PlayerStatCounterGrid = ({
  team,
  player,
}: PlayerStatCounterGridProps) => {
  const isYellow = player.yellowCards > 0;
  const isRed = player.redCards > 0;

  return (
    <div className={styles.rootContainer}>
      <PlayerBlock team={team} player={player} />
      <div className={styles.mainContainer}>
        <div className={styles.statContainer}>
          {statFields.map(title => (
            <StatCounterItem key={title} title={title} value={2} />
          ))}
        </div>
        <div className={styles.cautionContainer}>
          <span className={styles.title}>경고</span>
          <div className={styles.cardBlockContainer}>
            <CardBlock caution={isRed ? 'red' : isYellow ? 'yellow' : 'none'} />
            <CardBlock caution={isRed ? 'red' : 'none'} />
          </div>
        </div>
      </div>
    </div>
  );
};
