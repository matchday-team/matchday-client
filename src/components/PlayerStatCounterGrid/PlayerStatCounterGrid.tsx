import { assignInlineVars } from '@vanilla-extract/dynamic';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { StatCounterItem } from '@/components/StatCounterItem';
import { MatchEventType } from '@/constants';
import { useSelectedPlayerStore } from '@/stores';

import { CardBlock } from './CardBlock';
import { NotSelected } from './NotSelected';
import { PlayerBlock } from './PlayerBlock';
import * as styles from './PlayerStatCounterGrid.css';

const statFields = ['득점', '어시스트'];

type PlayerStatCounterGridProps = {
  onStatChange: (playerId: number, matchEvent: MatchEventType) => void;
};

export const PlayerStatCounterGrid = ({
  onStatChange,
}: PlayerStatCounterGridProps) => {
  const { selectedPlayer } = useSelectedPlayerStore();

  const isYellow = selectedPlayer && selectedPlayer.player.yellowCards > 0;
  const isRed = selectedPlayer && selectedPlayer.player.redCards > 0;

  const handleCardClick = () => {
    if (!selectedPlayer) {
      return;
    }

    if (
      selectedPlayer.player.redCards === 0 &&
      selectedPlayer.player.yellowCards === 0
    ) {
      onStatChange(selectedPlayer.player.id, MatchEventType.YELLOW_CARD);
    } else {
      onStatChange(selectedPlayer.player.id, MatchEventType.RED_CARD);
    }
  };

  if (!selectedPlayer) {
    return <NotSelected />;
  }

  return (
    <div
      className={styles.rootContainer}
      style={assignInlineVars({
        [teamColor]: selectedPlayer.team.teamColor,
      })}
    >
      <PlayerBlock team={selectedPlayer.team} player={selectedPlayer.player} />
      <div className={styles.mainContainer}>
        <div className={styles.statContainer}>
          {statFields.map(title => (
            <StatCounterItem
              key={title}
              colorIntegration={false}
              title={title}
              value={
                title === '득점'
                  ? selectedPlayer.player.goals
                  : selectedPlayer.player.assists
              }
              onIncrement={() => {
                onStatChange(
                  selectedPlayer.player.id,
                  title === '득점'
                    ? MatchEventType.GOAL
                    : MatchEventType.ASSIST,
                );
              }}
            />
          ))}
        </div>
        <div className={styles.cautionContainer}>
          <span className={styles.title}>경고</span>
          <div className={styles.cardBlockContainer}>
            <CardBlock
              caution={isRed ? 'red' : isYellow ? 'yellow' : 'none'}
              onClick={handleCardClick}
            />
            <CardBlock
              caution={isRed ? 'red' : 'none'}
              onClick={handleCardClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
