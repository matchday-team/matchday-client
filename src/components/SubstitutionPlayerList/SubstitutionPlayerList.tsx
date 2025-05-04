import { mocked_getSubstitutionPlayersByTeamType } from '@/mocks';
import { TeamType } from '@/stores/selectedPlayer';

import { EmptyList } from './EmptyList';
import { PlayerListItem } from './PlayerListItem';
import * as styles from './SubstitutionPlayerList.css';

interface SubstitutionPlayerListProps {
  teamType: TeamType;
}

export const SubstitutionPlayerList = ({
  teamType,
}: SubstitutionPlayerListProps) => {
  const players = mocked_getSubstitutionPlayersByTeamType(teamType);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.header}>
        <span className={styles.title}>교체 선수</span>
      </div>
      <ul className={styles.list}>
        {players.length === 0 ? (
          <EmptyList />
        ) : (
          players.map(player => (
            <PlayerListItem
              key={`${player.number}-${player.name}`}
              player={player}
            />
          ))
        )}
      </ul>
    </div>
  );
};
