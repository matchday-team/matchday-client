import { create } from 'zustand';

import { MatchUserResponse, TeamResponse } from '@/apis/models';

export type SubstitutionSourceType = 'starter' | 'bench';

type BeginSubstitution = (
  source: SubstitutionSourceType,
  team: TeamResponse,
  player: MatchUserResponse,
) => void;

type GetIsSubstitutionTarget = (
  targetType: SubstitutionSourceType,
  team: TeamResponse,
) => boolean;

export type SubstitutionStore = {
  beginSubstitution: BeginSubstitution;
  finishSubstitution: () => void;
  getIsSubstitutionTarget: GetIsSubstitutionTarget;
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
        type: SubstitutionSourceType;
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
    source: SubstitutionSourceType,
    team: TeamResponse,
    player: MatchUserResponse,
  ) => {
    set({ isActive: true, selection: { type: source, team, player } });
  },
  finishSubstitution: () => {
    set({
      isActive: false,
      selection: { type: null, team: null, player: null },
    });
  },
  getIsSubstitutionTarget: (
    targetType: SubstitutionSourceType,
    team: TeamResponse,
  ) => {
    const { isActive: isDragging, selection: dragSource } = get();

    return (
      !isDragging ||
      (dragSource.type !== targetType && dragSource.team.id === team.id)
    );
  },
}));
