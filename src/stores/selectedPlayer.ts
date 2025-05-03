import { create } from 'zustand';

interface SelectedPlayerIdStore {
  selectedPlayerId: number | null;
  setSelectedPlayerId: (playerId: number) => void;
}

export const useSelectedPlayerStore = create<SelectedPlayerIdStore>(set => ({
  selectedPlayerId: null,
  setSelectedPlayerId: playerId => set({ selectedPlayerId: playerId }),
}));
