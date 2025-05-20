import { assignInlineVars } from '@vanilla-extract/dynamic';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { StatCounterItem } from '@/components/StatCounterItem';
import { MatchEventType } from '@/constants';
import { useSelectedPlayerStore } from '@/stores';

import { CardBlock } from './CardBlock';
import { NotSelected } from './NotSelected';
import { PlayerBlock } from './PlayerBlock';
import * as styles from './PlayerStatCounterGrid.css';

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

  const playerStats = [
    {
      title: '득점',
      value: selectedPlayer.player.goals,
      eventType: MatchEventType.GOAL,
    },
    {
      title: '어시스트',
      value: selectedPlayer.player.assists,
      eventType: MatchEventType.ASSIST,
    },
    {
      title: '자책골',
      value: selectedPlayer.player.assists, // FIXME: ownGoals여야 함
      eventType: MatchEventType.OWN_GOAL,
    },
  ];

  return (
    <div
      className={styles.rootContainer}
      style={assignInlineVars({
        [teamColor]: selectedPlayer.team.teamColor,
      })}
    >
      <PlayerBlock team={selectedPlayer.team} player={selectedPlayer.player} />
      <div className={styles.mainContainer}>
        <div className={styles.grid2x2Container}>
          {playerStats.map(stat => (
            <StatCounterItem
              key={stat.title}
              title={stat.title}
              type='standalone'
              value={stat.value}
              onIncrement={() => {
                onStatChange(selectedPlayer.player.id, stat.eventType);
              }}
            />
          ))}
          <div className={styles.cautionContainer}>
            <span className={styles.title}>경고</span>
            <div className={styles.cardBlockContainer}>
              <CardBlock
                caution='yellow'
                active={selectedPlayer.player.yellowCards > 0}
                onClick={handleCardClick}
              />
              <CardBlock
                caution='red'
                active={selectedPlayer.player.redCards > 0}
                onClick={handleCardClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
