import { getUserList, postFindPassword, postLogin } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';

export function useGetUserRequest() {
    return useMutation({
        mutationFn: (username: string) => getUserList(username),

        onSuccess: (success) => {
            console.log('user post success:', success);
        },

        onError: (error) => {
            console.error('user post failed:', error);
        },
    });
}

export function useLoginRequest() {
    return useMutation({
        mutationFn: ({ email, password }: { email: string; password: string }) => postLogin(email, password),

        onSuccess: (success) => {
            console.log('login post success:', success);
        },

        onError: (error) => {
            console.error('login post failed:', error);
        },
    });
}
export function useFindPasswordRequest() {
    return useMutation({
        mutationFn: ({ email }: { email: string }) => postFindPassword(email),

        onSuccess: (success) => {
            console.log('login post success:', success);
        },

        onError: (error) => {
            console.error('login post failed:', error);
        },
    });
}
