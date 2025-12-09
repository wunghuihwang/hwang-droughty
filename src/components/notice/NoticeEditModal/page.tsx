import CustomDialog from '@/lib/dialog';
import { usePostNoticesRequest, useUpdateNoticesRequest } from '@/query/notice';
import { useAuthStore } from '@/store/useAuthStore';
import { useNoticetore } from '@/store/useNoticeStore';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useEffect } from 'react';
const NoticeEditModal = ({ id = '' }: { id: string }) => {
    const { mutate: postNotice, error } = usePostNoticesRequest();
    const { mutate: updateNotice, error: updateError } = useUpdateNoticesRequest();

    const { editMode, formNotice, setFormNotice, editOpen, setEditOpen } = useNoticetore();
    const { user } = useAuthStore();
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormNotice({
            ...formNotice,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        if (!formNotice.title || !formNotice.content) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        if (!user) {
            alert('유저 정보가 없습니다.');
            return;
        }

        if (editMode) {
            console.log(id);

            CustomDialog.confirm({
                title: '공지 수정',
                content: '공지사항을 수정하시겠습니까?',
                onConfirm: () => {
                    updateNotice(
                        {
                            formNotice,
                            id,
                        },
                        {
                            onSuccess: () => {
                                setEditOpen(false);
                                CustomDialog.success({
                                    title: '공지 수정',
                                    content: '공지사항이 수정됐습니다.',
                                });
                            },
                        },
                    );
                },
            });
        } else {
            CustomDialog.confirm({
                title: '공지 등록',
                content: '공지사항을 등록하시겠습니까?',
                onConfirm: () => {
                    postNotice(
                        {
                            formNotice,
                            user,
                        },
                        {
                            onSuccess: () => {
                                setEditOpen(false);
                                CustomDialog.success({
                                    title: '공지 등록',
                                    content: '공지사항이 등록됐습니다.',
                                });
                            },
                        },
                    );
                },
            });

            if (error) throw error;
        }
    };

    useEffect(() => {
        if (editOpen) {
            setFormNotice({
                ...formNotice,
                title: '',
                content: '',
            });
        }
    }, [editOpen]);

    return (
        <Dialog open={editOpen} onClose={() => setEditOpen(false)} maxWidth="md" fullWidth>
            <DialogTitle>{editMode ? '공지사항 수정' : '공지사항 등록'}</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                    <TextField
                        label="제목"
                        name="title"
                        value={formNotice.title}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <TextField
                        label="작성자"
                        name="author"
                        value={user?.user_metadata?.name}
                        onChange={handleChange}
                        disabled
                        fullWidth
                        required
                    />
                    <TextField
                        label="내용"
                        name="content"
                        value={formNotice.content}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={6}
                        required
                    />
                </Box>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
                <Button onClick={() => setEditOpen(false)} variant="outlined">
                    취소
                </Button>
                <Button onClick={handleSubmit} variant="contained">
                    {editMode ? '수정' : '등록'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NoticeEditModal;
