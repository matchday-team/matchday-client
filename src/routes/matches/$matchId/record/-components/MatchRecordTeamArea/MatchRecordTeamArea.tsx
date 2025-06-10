import * as atomicStyles from '@/styles/atomic.css';

import { MatchUserResponse, ScoreResponse, TeamResponse } from '@/apis/models';
import { TeamStatCounterGrid } from '@/components';
import { GridListToggleView } from '@/components/GridListToggleView';
import { MatchEventType, Stat } from '@/constants';
import { RequestStatCancelParams } from '@/features/matchRecord';
import {
  StarterPlayerGridForSubstitution,
  StarterPlayerListForSubstitution,
  SubPlayerListForSubstitution,
} from '@/features/playerSubstitution';

export const MatchRecordTeamArea = ({
  matchId,
  team,
  starters,
  substitutes,
  stats,
  onStatIncrement,
  onStatCancel,
  disabledCriteria,
}: {
  matchId: number;
  team: TeamResponse;
  starters: MatchUserResponse[];
  substitutes: MatchUserResponse[];
  stats: ScoreResponse;
  onStatIncrement: (matchEvent: MatchEventType, teamId: number) => void;
  onStatCancel: (params: RequestStatCancelParams) => void;
  disabledCriteria?: (stat: Stat) => boolean;
}) => {
  return (
    <>
      <GridListToggleView
        render={isGridView => {
          const Component = isGridView
            ? StarterPlayerGridForSubstitution
            : StarterPlayerListForSubstitution;

          return <Component matchId={matchId} team={team} players={starters} />;
        }}
      />
      <div className={atomicStyles.flexContainer}>
        <SubPlayerListForSubstitution
          matchId={matchId}
          team={team}
          players={substitutes}
        />
        <TeamStatCounterGrid
          team={team}
          stats={stats}
          onStatIncrement={onStatIncrement}
          onStatCancel={onStatCancel}
          disabledCriteria={disabledCriteria}
        />
      </div>
    </>
  );
};
