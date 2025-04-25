import { EmptyList } from './EmptyList';
import { PlayerListItem } from './PlayerListItem';
import * as styles from './SubstitutionPlayerList.css';

// FIXME: 우선 여기서 정의함
export interface Player {
  number: string;
  name: string;
  position: string;
}

export interface SubstitutionPlayerListProps {
  players: Player[];
}

export const SubstitutionPlayerList = ({
  players,
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
              player={player}
            />
          ))
        )}
      </ul>
    </div>
  );
};
