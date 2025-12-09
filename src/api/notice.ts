import { Post } from '@/store/useNoticeStore';
import { createBrowserClient } from '@supabase/ssr';
import { User } from '@supabase/supabase-js';

export async function getNoticesList(page_num: number, page_size: number) {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data, error } = await supabase.rpc('get_notices_paginated', {
        page_num,
        page_size,
    });

    if (error) {
        console.error('Notice list error:', error);
        throw error;
    }

    return data;
}

export async function postNoticesList(formNotice: Post, user: User) {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data, error } = await supabase.from('notices').insert([
        {
            title: formNotice.title,
            content: formNotice.content,
            author_id: user.id,
            author_name: user.user_metadata?.name || '',
        },
    ]);

    if (error) {
        console.error('Notice list post error:', error);
        throw error;
    }

    return data;
}

export async function updateNoticesList(formNotice: Post, id: string) {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data, error } = await supabase
        .from('notices')
        .update({ title: formNotice.title, content: formNotice.content })
        .eq('id', id);

    if (error) {
        console.error('Notice list post error:', error);
        throw error;
    }

    return data;
}

export async function deleteNoticesList(id: string) {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data, error } = await supabase.from('notices').delete().eq('id', id);

    if (error) {
        console.error('Notice list post error:', error);
        throw error;
    }

    return data;
}
