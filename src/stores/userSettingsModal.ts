import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

// FIXME: 최소 구현을 위해 zustand store를 사용했는데 추후 개선
export const useUserSettingsModalStore = create<ModalState>(set => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
