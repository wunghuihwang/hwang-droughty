import { deleteNoticesList, getNoticesList, postNoticesList, updateNoticesList } from '@/api/notice';
import { Post } from '@/store/useNoticeStore';
import { User } from '@supabase/supabase-js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useNoticesList(page: number, size: number) {
    return useQuery({
        queryKey: ['notices', page, size],
        queryFn: () => getNoticesList(page, size),
    });
}

export function usePostNoticesRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ formNotice, user }: { formNotice: Post; user: User }) => postNoticesList(formNotice, user),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notices'] });
        },

        onError: (error) => {
            console.error('Notice post failed:', error);
        },
    });
}

export function useUpdateNoticesRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ formNotice, id }: { formNotice: Post; id: string }) => updateNoticesList(formNotice, id),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notices'] });
        },

        onError: (error) => {
            console.error('Notice update failed:', error);
        },
    });
}

export function useDeleteNoticesRequest() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id }: { id: string }) => deleteNoticesList(id),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notices'] });
        },

        onError: (error) => {
            console.error('Notice update failed:', error);
        },
    });
}
