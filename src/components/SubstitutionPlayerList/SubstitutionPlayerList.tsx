import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerSubstitutionAdapter } from '@/features/playerSubstitution';
import { type SubstitutionSourceType } from '@/stores';

import { EmptyList } from './EmptyList';
import * as styles from './SubstitutionPlayerList.css';
import { SubstitutionPlayerListItem } from './SubstitutionPlayerListItem';

interface SubstitutionPlayerListProps {
  mode: SubstitutionSourceType;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const SubstitutionPlayerList = ({
  mode,
  team,
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
            <PlayerSubstitutionAdapter<HTMLLIElement>
              key={`${player.number}-${player.name}`}
              mode={mode}
              team={team}
              player={player}
              render={({ isDragOver, disabled, ...props }) => (
                <SubstitutionPlayerListItem
                  player={player}
                  isDragOver={isDragOver}
                  disabled={disabled}
                  {...props}
                />
              )}
            />
          ))
        )}
      </ul>
    </div>
  );
};
