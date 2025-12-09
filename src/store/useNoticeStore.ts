// store/authStore.ts
import { create } from 'zustand';

export type Post = {
    idx?: number;
    author_id?: string;
    author_name?: string;
    content: string;
    id: string;
    title: string;
    created_at?: string | null;
    updated_at?: string | null;
};
type NoticeStore = {
    editMode: boolean;
    viewOpen: boolean;
    editOpen: boolean;
    currentNotice: Post;
    formNotice: Post;
    setEditMode: (editMode: boolean) => void;
    setViewOpen: (viewOpen: boolean) => void;
    setEditOpen: (editOpen: boolean) => void;
    setCurrentNotice: (currentNotice: Post) => void;
    setFormNotice: (formNotice: Post) => void;
};

export const useNoticetore = create<NoticeStore>((set) => ({
    viewOpen: false,
    editOpen: false,
    editMode: false,
    formNotice: {
        id: '',
        author_id: '',
        author_name: '',
        content: '',
        created_at: '',
        title: '',
        updated_at: '',
    },
    currentNotice: {
        id: '',
        author_id: '',
        author_name: '',
        content: '',
        created_at: '',
        title: '',
        updated_at: '',
    },
    setEditMode: (editMode) => set({ editMode }),
    setViewOpen: (viewOpen) => set({ viewOpen }),
    setEditOpen: (editOpen) => set({ editOpen }),
    setCurrentNotice: (currentNotice) => set({ currentNotice }),
    setFormNotice: (formNotice) => set({ formNotice }),
}));
