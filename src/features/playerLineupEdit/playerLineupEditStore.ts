import { create } from 'zustand';

export type PlayerLineupEditSourceType = 'all' | 'starter' | 'bench';

interface Player {
  id: number;
  teamId: number;
  matchPosition: string;
}

type PlayerToAssign =
  | {
      type: 'all';
      player: Player & {
        matchGrid: null;
        matchUserId: null;
      };
    }
  | {
      type: 'starter';
      player: Player & {
        matchGrid: number;
        matchUserId: number;
      };
    }
  | {
      type: 'bench';
      player: Player & {
        matchGrid: null;
        matchUserId: number;
      };
    };

/*
  교체 API가 없음
  매치 유저를 제거하고 등록하는 방식
  기본적으로 playerId만 공통이기 때문에 playerId로 식별
  matchUserId가 필요한 경우 matchPlayers에서 조회 필요

  드래그-드롭에 별도 제한이 없어 로직이 간단함!

  나머지 로직은 Adapter에서 구현 예정
*/
export type PlayerLineupEditStore = {
  beginAssignment: (selection: PlayerToAssign) => void;
  finishAssignment: () => void;
} & (
  | {
      isActive: false;
      selection: null;
    }
  | {
      isActive: true;
      selection: PlayerToAssign;
    }
);

export const usePlayerLineupEditStore = create<PlayerLineupEditStore>(set => ({
  isActive: false,
  selection: null,
  beginAssignment: (selection: PlayerToAssign) => {
    set({ isActive: true, selection });
  },
  finishAssignment: () => {
    set({
      isActive: false,
      selection: null,
    });
  },
}));
