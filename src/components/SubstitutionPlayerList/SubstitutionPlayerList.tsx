import { MatchUserResponse, TeamResponse } from '@/apis/models';

import { EmptyList } from './EmptyList';
import { PlayerListItem } from './PlayerListItem';
import * as styles from './SubstitutionPlayerList.css';

interface SubstitutionPlayerListProps {
  team: TeamResponse;
  players: MatchUserResponse[];
  onSwap?: (inPlayerId: number, outPlayerId: number) => void;
}

export const SubstitutionPlayerList = ({
  team,
  players,
  onSwap,
}: SubstitutionPlayerListProps) => {
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
              team={team}
              player={player}
              onSwap={onSwap}
            />
          ))
        )}
      </ul>
    </div>
  );
};
