import { QueryCacheNotifyEvent } from '@tanstack/react-query';
import { create } from 'zustand';

import {
  ApiResponse,
  MatchUserGroupResponse,
  MatchUserResponse,
  TeamResponse,
} from '@/apis/models';
import { matchRecordQuery, queryKeyNamespaces } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

// NOTE: useEffect에서 처리하려면 state를 컴포넌트에서 받아야 하는데,
// 무한 리렌더링을 막으려면 별도의 상태 변수를 사용해서 처리해야 해서 여기서 처리함.
// FIXME: unsubscribe 처리 필요 (화면 lifecycle에 대한 의존 필요)
const syncWithQueryCache = (query: QueryCacheNotifyEvent) => {
  if (
    query.query.queryKey[0] !== queryKeyNamespaces.matches ||
    query.type !== 'updated'
  ) {
    return;
  }

  const matchId = query.query.queryKey[1];
  if (typeof matchId !== 'number') {
    return;
  }

  const matchPlayers = queryClient.getQueryData<
    ApiResponse<MatchUserGroupResponse>
  >(matchRecordQuery.queryKeys.matchPlayers(matchId));
  if (!matchPlayers?.data) {
    return;
  }

  const { selectedPlayer, selectPlayer } = useSelectedPlayerStore.getState();
  const targetPlayerId = selectedPlayer?.player.id;
  if (!targetPlayerId) {
    return;
  }

  const allPlayers = [
    ...matchPlayers.data.homeTeam.starters,
    ...matchPlayers.data.homeTeam.substitutes,
    ...matchPlayers.data.awayTeam.starters,
    ...matchPlayers.data.awayTeam.substitutes,
  ];

  const targetPlayer = allPlayers.find(player => player.id === targetPlayerId);
  if (!targetPlayer) {
    return;
  }

  selectPlayer({
    team: selectedPlayer.team,
    player: targetPlayer,
  });
};

queryClient.getQueryCache().subscribe(syncWithQueryCache);

export interface SelectedPlayer {
  team: TeamResponse;
  player: MatchUserResponse;
}

type SelectedPlayerStore =
  | {
      isSelected: true;
      selectedPlayer: SelectedPlayer;
      selectPlayer: (selectedPlayer: SelectedPlayer) => void;
      unselectPlayer: () => void;
    }
  | {
      isSelected: false;
      selectedPlayer: undefined;
      selectPlayer: (selectedPlayer: SelectedPlayer) => void;
      unselectPlayer: () => void;
    };

export const useSelectedPlayerStore = create<SelectedPlayerStore>(set => ({
  isSelected: false,
  selectedPlayer: undefined,
  selectPlayer: (selectedPlayer: SelectedPlayer) => {
    set({ isSelected: true, selectedPlayer });
    console.log('selected:', selectedPlayer);
  },
  unselectPlayer: () => set({ isSelected: false, selectedPlayer: undefined }),
}));
