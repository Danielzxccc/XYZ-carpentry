import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  userToken: null,
  setToken: () => set({ userToken: true }),
  removeToken: () => set({ userToken: null }),
}))
