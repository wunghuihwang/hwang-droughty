'use client';

import useSupabaseBrowser from '@/app/supabase-browser';
import { useAuthStore } from '@/store/useAuthStore';
import { useEffect } from 'react';

export default function AuthInitializer() {
    const supabase = useSupabaseBrowser();
    const { setUser, setLoading } = useAuthStore();

    useEffect(() => {
        console.log(supabase.auth);
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setLoading(false);
            console.log(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        console.log(subscription);

        return () => subscription.unsubscribe();
    }, [supabase, setUser, setLoading]);

    return null;
}
