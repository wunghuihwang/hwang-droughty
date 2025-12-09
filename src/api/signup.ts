import { sendSignUp } from '@/query/signup';
import { useMutation } from '@tanstack/react-query';

const useSignUp = () => {
    return useMutation({
        mutationFn: sendSignUp,
        onSuccess: (data) => {
            console.log('회원가입 성공', data);
        },
        onError: (error) => {
            console.error('회원가입 실패', error);
        },
    });
};

export default useSignUp;
