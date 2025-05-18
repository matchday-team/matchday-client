import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLoggedInUserStore = create(
  persist<{
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
  }>(
    set => ({
      isLoggedIn: false,
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    }),
    { name: 'logged-in-user' },
  ),
);
