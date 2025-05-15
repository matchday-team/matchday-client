import { assignInlineVars } from '@vanilla-extract/dynamic';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { StatCounterItem } from '@/components/StatCounterItem';
import { useSelectedPlayerStore } from '@/stores';

import { CardBlock } from './CardBlock';
import { NotSelected } from './NotSelected';
import { PlayerBlock } from './PlayerBlock';
import * as styles from './PlayerStatCounterGrid.css';

const statFields = ['득점', '어시스트'];

type PlayerStatCounterGridProps = {
  onGoal?: (playerId: number) => void;
  onAssist?: (playerId: number) => void;
  onYellowCard?: (playerId: number) => void;
  onRedCard?: (playerId: number) => void;
};

export const PlayerStatCounterGrid = ({
  onGoal,
  onAssist,
  onYellowCard,
  onRedCard,
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
      onYellowCard?.(selectedPlayer.player.id);
    } else if (selectedPlayer.player.yellowCards > 0) {
      onRedCard?.(selectedPlayer.player.id);
    } else {
      onYellowCard?.(selectedPlayer.player.id);
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
                // NOTE: DEMO 용도로만 임시로 로컬 상태 사용
                if (title === '득점') {
                  onGoal?.(selectedPlayer.player.id);
                } else if (title === '어시스트') {
                  onAssist?.(selectedPlayer.player.id);
                }
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
