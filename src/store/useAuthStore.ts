// store/authStore.ts
import { User } from '@supabase/supabase-js';
import { create } from 'zustand';

type AuthStore = {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
    setLoading: (loading: boolean) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    loading: true,
    setUser: (user) => set({ user }),
    setLoading: (loading) => set({ loading }),
    logout: () => set({ user: null }),
}));
