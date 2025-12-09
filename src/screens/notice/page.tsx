'use client';

import NoticeEditModal from '@/components/notice/NoticeEditModal/page';
import NoticeViewModal from '@/components/notice/NoticeViewModal/page';
import CustomDialog from '@/lib/dialog';
import { useDeleteNoticesRequest, useNoticesList } from '@/query/notice';
import { useAuthStore } from '@/store/useAuthStore';
import { Post, useNoticetore } from '@/store/useNoticeStore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function NoticeBoard() {
    const { setCurrentNotice, setEditMode, setEditOpen, setFormNotice, setViewOpen } = useNoticetore();
    const { user } = useAuthStore();
    const { data: noticeData, isSuccess } = useNoticesList(1, 10);
    const { mutate: deleteNotice, error: deleteError } = useDeleteNoticesRequest();

    const [userId, setUserId] = useState('');
    const [noticeList, setNoticeList] = useState<Post[]>([]);

    useEffect(() => {
        if (isSuccess && Array.isArray(noticeData)) {
            setNoticeList(noticeData);
        }
    }, [isSuccess, noticeData]);

    const handleOpen = () => {
        setEditOpen(true);
        setEditMode(false);
    };

    const handleEditOpen = (data: Post) => {
        setEditMode(true);
        setEditOpen(true);
        setFormNotice(data);
        setUserId(data.id);
    };

    const handleView = (notice: Post) => {
        setViewOpen(true);
        setCurrentNotice(notice);
    };

    const handleDelete = (id: string) => {
        CustomDialog.confirm({
            title: '공지 삭제',
            content: '공지사항을 삭제하시겠습니까?',
            onConfirm: () => {
                deleteNotice(
                    {
                        id,
                    },
                    {
                        onSuccess: () => {
                            CustomDialog.success({
                                title: '공지 삭제',
                                content: '공지사항이 삭제됐습니다.',
                            });
                        },
                    },
                );
            },
        });
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        공지사항 관리 시스템
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                        공지사항
                    </Typography>
                    <Button variant="contained" onClick={handleOpen} size="large">
                        공지사항 등록
                    </Button>
                </Box>

                <TableContainer component={Paper} elevation={2}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: '#f8f9fa' }}>
                                <TableCell width="60px" align="center">
                                    <strong>번호</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>제목</strong>
                                </TableCell>
                                <TableCell width="120px" align="center">
                                    <strong>작성자</strong>
                                </TableCell>
                                <TableCell width="120px" align="center">
                                    <strong>작성일</strong>
                                </TableCell>
                                <TableCell width="150px" align="center">
                                    <strong>관리</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {noticeList.map((notice) => (
                                <TableRow key={notice.idx} hover>
                                    <TableCell align="center">{notice.idx}</TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>{notice.title}</Box>
                                    </TableCell>
                                    <TableCell align="center">{notice.author_name}</TableCell>
                                    <TableCell align="center">
                                        {dayjs(notice.created_at).format('YYYY-MM-DD')}
                                    </TableCell>
                                    {user && user.id === notice.author_id && (
                                        <TableCell align="center">
                                            <IconButton
                                                size="small"
                                                color="primary"
                                                onClick={() => handleView(notice)}
                                                title="보기"
                                            >
                                                <VisibilityIcon />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                color="warning"
                                                onClick={() => handleEditOpen(notice)}
                                                title="수정"
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                color="error"
                                                onClick={() => handleDelete(notice.id)}
                                                title="삭제"
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {noticeList.length === 0 && (
                    <Paper sx={{ p: 4, textAlign: 'center', mt: 2 }}>
                        <Typography color="text.secondary">등록된 공지사항이 없습니다.</Typography>
                    </Paper>
                )}
            </Container>

            <NoticeEditModal id={userId} />
            <NoticeViewModal />
        </Box>
    );
}
