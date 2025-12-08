import { createBrowserClient } from '@supabase/ssr';
import { useMemo } from 'react';
import { Database } from '../../database.types';
import { TypedSupabaseClient } from './supabase';

let client: TypedSupabaseClient | undefined;

function getSupabaseBrowserClient() {
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL); // 👈 확인용
    console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '있음' : '없음'); // 👈 확인용
    if (client) {
        return client;
    }

    client = createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    return client;
}

function useSupabaseBrowser() {
    return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabaseBrowser;
