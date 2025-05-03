import { useState } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { StatCounterItem } from '@/components/StatCounterItem';
import { mocked_getPlayersByTeamType } from '@/mocks';
import { mocked_getTeamByType } from '@/mocks';
import { useSelectedPlayerStore } from '@/stores';

import { CardBlock } from './CardBlock';
import { NotSelected } from './NotSelected';
import { PlayerBlock } from './PlayerBlock';
import * as styles from './PlayerStatCounterGrid.css';

const statFields = ['득점', '어시스트'];

export const PlayerStatCounterGrid = () => {
  const { isSelected, selectedPlayer } = useSelectedPlayerStore();

  // TODO: Tanstack-query 연동
  const team = isSelected
    ? mocked_getTeamByType(selectedPlayer.teamType)
    : undefined;
  const actualSelectedPlayer = isSelected
    ? mocked_getPlayersByTeamType(selectedPlayer.teamType).find(
        player => player.id === selectedPlayer.id,
      )
    : undefined;
  const [goals, setGoals] = useState(actualSelectedPlayer?.goals ?? 0);
  const [assists, setAssists] = useState(actualSelectedPlayer?.assists ?? 0);
  const [yellowCards, setYellowCards] = useState(
    actualSelectedPlayer?.yellowCards ?? 0,
  );
  const [redCards, setRedCards] = useState(actualSelectedPlayer?.redCards ?? 0);

  const isYellow = yellowCards > 0;
  const isRed = redCards > 0;

  const handleCardClick = () => {
    if (redCards === 0 && yellowCards === 0) {
      setYellowCards(yellowCards + 1);
    } else if (yellowCards > 0) {
      setRedCards(redCards + 1);
    } else {
      setYellowCards(yellowCards + 1);
    }
  };

  if (!actualSelectedPlayer) {
    return <NotSelected />;
  }

  return (
    <div
      className={styles.rootContainer}
      style={assignInlineVars({
        [teamColor]: team?.teamColor,
      })}
    >
      <PlayerBlock team={team} player={actualSelectedPlayer} />
      <div className={styles.mainContainer}>
        <div className={styles.statContainer}>
          {statFields.map(title => (
            <StatCounterItem
              key={title}
              colorIntegration={false}
              title={title}
              value={title === '득점' ? goals : assists}
              onIncrement={() => {
                // NOTE: DEMO 용도로만 임시로 로컬 상태 사용
                if (title === '득점') {
                  setGoals(goals + 1);
                } else if (title === '어시스트') {
                  setAssists(assists + 1);
                }
              }}
              onDecrement={() => {
                if (title === '득점') {
                  setGoals(goals - 1);
                } else if (title === '어시스트') {
                  setAssists(assists - 1);
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
