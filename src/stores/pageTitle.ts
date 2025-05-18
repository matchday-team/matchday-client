import { create } from 'zustand';

export const usePageTitleStore = create<{
  title: string;
  setTitle: (title: string) => void;
}>(set => ({
  title: '',
  setTitle: title => set({ title }),
}));
