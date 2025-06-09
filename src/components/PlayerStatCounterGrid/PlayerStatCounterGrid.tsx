import { assignInlineVars } from '@vanilla-extract/dynamic';

import { StatCounterItem } from '@/components/StatCounterItem';
import { MatchEventType } from '@/constants';
import { RequestStatCancelParams } from '@/features/matchRecord';
import { selectedTeamColorVar } from '@/features/matchRecord/styles';
import { useSelectedPlayerStore } from '@/stores';

import { CardBlock } from './CardBlock';
import { NotSelected } from './NotSelected';
import { PlayerBlock } from './PlayerBlock';
import * as styles from './PlayerStatCounterGrid.css';

type PlayerStatCounterGridProps = {
  onStatIncrement: (playerId: number, matchEvent: MatchEventType) => void;
  onStatCancel: (params: RequestStatCancelParams) => void;
};

export const PlayerStatCounterGrid = ({
  onStatIncrement,
  onStatCancel,
}: PlayerStatCounterGridProps) => {
  const { selectedPlayer } = useSelectedPlayerStore();

  const handleCardClick = (type: 'yellow' | 'red') => {
    if (!selectedPlayer) {
      return;
    }

    if (type === 'yellow') {
      onStatIncrement(selectedPlayer.player.id, MatchEventType.YELLOW_CARD);
    } else {
      onStatIncrement(selectedPlayer.player.id, MatchEventType.RED_CARD);
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
      value: selectedPlayer.player.ownGoals,
      eventType: MatchEventType.OWN_GOAL,
    },
  ];

  return (
    <div
      className={styles.rootContainer}
      style={assignInlineVars({
        [selectedTeamColorVar]: selectedPlayer.team.teamColor,
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
              colorIntegration={false}
              onIncrement={() => {
                onStatIncrement(selectedPlayer.player.id, stat.eventType);
              }}
              onDecrement={() => {
                onStatCancel({
                  matchEventType: stat.eventType,
                  teamId: selectedPlayer.team.id,
                  matchUserId: selectedPlayer.player.id,
                });
              }}
            />
          ))}
          <div className={styles.cautionContainer}>
            <span className={styles.title}>경고</span>
            <div className={styles.cardBlockContainer}>
              <CardBlock
                caution='yellow'
                active={selectedPlayer.player.yellowCards > 0}
                onClick={() => handleCardClick('yellow')}
              />
              <CardBlock
                caution='red'
                active={selectedPlayer.player.redCards > 0}
                onClick={() => handleCardClick('red')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
