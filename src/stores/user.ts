import create from 'zustand';

type UserStore = {
  username?: string;
  setUsername: (username?: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  username: undefined,
  setUsername: (username) => set({ username }),
}));
