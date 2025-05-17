import { create } from 'zustand';

import { MatchUserResponse, TeamResponse } from '@/apis/models';

type SelectionType = 'starter' | 'bench';

type BeginSubstitution = (
  source: SelectionType,
  team: TeamResponse,
  player: MatchUserResponse,
) => void;

type getIsSubstitutionTarget = (
  targetType: SelectionType,
  team: TeamResponse,
) => boolean;

export type SubstitutionStore = {
  beginSubstitution: BeginSubstitution;
  finishSubstitution: () => void;
  getIsSubstitutionTarget: getIsSubstitutionTarget;
} & (
  | {
      isActive: false;
      selection: {
        type: null;
        team: null;
        player: null;
      };
    }
  | {
      isActive: true;
      selection: {
        type: SelectionType;
        team: TeamResponse;
        player: MatchUserResponse;
      };
    }
);

export const useSubstitutionStore = create<SubstitutionStore>((set, get) => ({
  isActive: false,
  selection: {
    type: null,
    team: null,
    player: null,
  },
  beginSubstitution: (
    source: SelectionType,
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
  getIsSubstitutionTarget: (targetType: SelectionType, team: TeamResponse) => {
    const { isActive: isDragging, selection: dragSource } = get();

    return (
      !isDragging ||
      (dragSource.type !== targetType && dragSource.team.id === team.id)
    );
  },
}));
