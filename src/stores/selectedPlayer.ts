import { create } from 'zustand';

import { MatchUserResponse, TeamResponse } from '@/apis/models';

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
