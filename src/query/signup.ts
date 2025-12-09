import useSupabaseBrowser from '@/app/supabase-browser';
import { SignUpTypes } from '@/types/signup.type';

export const sendSignUp = async (signupData: SignUpTypes) => {
    const supabase = useSupabaseBrowser();

    const { data, error } = await supabase.auth.signUp({
        email: signupData.email,
        password: signupData.password,
        options: {
            data: {
                name: signupData.name,
                age: signupData.age,
                username: signupData.username,
                phone: signupData.phone,
            },
        },
    });

    if (error) throw new Error(error.message);

    return data;
};
