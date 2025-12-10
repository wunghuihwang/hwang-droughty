import { createBrowserClient } from '@supabase/ssr';

// 이메일 로그인 -> 아이디 로그인 변경 시 필요함
export async function getUserList(username: string) {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data, error } = await supabase
        .from('profiles')
        .select('username, email')
        .eq('username', username.trim())
        .maybeSingle();

    if (error) {
        console.error('uset list get error:', error);
        throw error;
    }

    return data;
}

export async function postLogin(email: string, password: string) {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        console.error('login post error:', error);
        throw error;
    }

    return data;
}

export async function postFindPassword(email: string) {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/updatepassword`,
    });

    if (error) {
        console.error('find password post error:', error);
        throw error;
    }

    return data;
}
