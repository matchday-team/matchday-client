import { create } from 'zustand';

import { MatchUserResponse, TeamResponse } from '@/apis/models';

type DragSourceType = 'starter' | 'bench';

export type SubstitutionStore =
  | {
      isActive: false;
      selection: {
        type: null;
        team: null;
        player: null;
      };
      beginSubstitution: (
        source: DragSourceType,
        team: TeamResponse,
        player: MatchUserResponse,
      ) => void;
      finishSubstitution: () => void;
      getIsSubstitutionTarget: (
        targetType: DragSourceType,
        team: TeamResponse,
      ) => boolean;
    }
  | {
      isActive: true;
      selection: {
        type: DragSourceType;
        team: TeamResponse;
        player: MatchUserResponse;
      };
      beginSubstitution: (
        source: DragSourceType,
        team: TeamResponse,
        player: MatchUserResponse,
      ) => void;
      finishSubstitution: () => void;
      getIsSubstitutionTarget: (
        targetType: DragSourceType,
        team: TeamResponse,
      ) => boolean;
    };

export const useSubstitutionStore = create<SubstitutionStore>((set, get) => ({
  isActive: false,
  selection: {
    type: null,
    team: null,
    player: null,
  },
  beginSubstitution: (
    source: DragSourceType,
    team: TeamResponse,
    player: MatchUserResponse,
  ) => {
    set({ isActive: true, selection: { type: source, team, player } });
    console.log('beginSubstitution:', source, team, player);
  },
  finishSubstitution: () => {
    set({
      isActive: false,
      selection: { type: null, team: null, player: null },
    });
  },
  getIsSubstitutionTarget: (targetType: DragSourceType, team: TeamResponse) => {
    const { isActive: isDragging, selection: dragSource } = get();

    return (
      !isDragging ||
      (dragSource.type !== targetType && dragSource.team.id === team.id)
    );
  },
}));
