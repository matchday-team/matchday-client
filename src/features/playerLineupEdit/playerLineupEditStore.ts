import { create } from 'zustand';

export type PlayerLineupEditSourceType = 'all' | 'starter' | 'bench';

type BeginSubstitution = (
  source: PlayerLineupEditSourceType,
  playerId: number,
) => void;

/*
  교체 API가 없음
  매치 유저를 제거하고 등록하는 방식
  기본적으로 playerId만 공통이기 때문에 playerId로 식별
  matchUserId가 필요한 경우 matchPlayers에서 조회 필요

  드래그-드롭에 별도 제한이 없어 로직이 간단함!

  나머지 로직은 Adapter에서 구현 예정
*/
export type PlayerLineupEditStore = {
  beginAllocation: BeginSubstitution;
  finishAllocation: () => void;
} & (
  | {
      isActive: false;
      selection: {
        type: null;
        playerId: null;
      };
    }
  | {
      isActive: true;
      selection: {
        type: PlayerLineupEditSourceType;
        playerId: number;
      };
    }
);

export const usePlayerLineupEditStore = create<PlayerLineupEditStore>(set => ({
  isActive: false,
  selection: {
    type: null,
    playerId: null,
  },
  beginAllocation: (source: PlayerLineupEditSourceType, playerId: number) => {
    set({ isActive: true, selection: { type: source, playerId } });
  },
  finishAllocation: () => {
    set({
      isActive: false,
      selection: { type: null, playerId: null },
    });
  },
}));
