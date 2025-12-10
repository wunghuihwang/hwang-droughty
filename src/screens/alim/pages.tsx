'use client';

import NoticeEditModal from '@/components/notice/NoticeEditModal/page';
import NoticeViewModal from '@/components/notice/NoticeViewModal/page';
import CustomDialog from '@/lib/dialog';
import { useDeleteNoticesRequest, useNoticesList } from '@/query/notice';
import { useAuthStore } from '@/store/useAuthStore';
import { Post, useNoticetore } from '@/store/useNoticeStore';
import { CalendarToday } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    Box,
    Button,
    Chip,
    Container,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Tab,
    Tabs,
    Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

// 가상 데이터
const mockEvents = [
    {
        id: 'event1',
        title: '2024년 정기총회 및 송년회',
        event_date: '2024-12-15T14:00:00',
        event_location: '서울 종로구 종친회관',
        event_status: '예정',
        author_name: '관리자',
        created_at: '2024-12-01',
        views: 156,
    },
    {
        id: 'event2',
        title: '겨울 선산 성묘 행사',
        event_date: '2024-12-20T10:00:00',
        event_location: '경북 상주',
        event_status: '예정',
        author_name: '관리자',
        created_at: '2024-12-01',
        views: 132,
    },
    {
        id: 'event3',
        title: '종친회 정기모임',
        event_date: '2024-11-30T15:00:00',
        event_location: '부산',
        event_status: '완료',
        author_name: '관리자',
        created_at: '2024-11-20',
        views: 98,
    },
    {
        id: 'event4',
        title: '추석 성묘 및 차례',
        event_date: '2024-09-15T09:00:00',
        event_location: '경북 상주',
        event_status: '완료',
        author_name: '관리자',
        created_at: '2024-09-01',
        views: 234,
    },
];

const mockNews = [
    {
        id: 'news1',
        title: '2024년 종원의 밤 성황리에 마쳐',
        created_at: '2024-12-08',
        author_name: '관리자',
        views: 234,
    },
    {
        id: 'news2',
        title: '장학금 전달식 개최',
        created_at: '2024-11-25',
        author_name: '관리자',
        views: 312,
    },
    {
        id: 'news3',
        title: '대종회 임원진 회의 결과',
        created_at: '2024-11-20',
        author_name: '관리자',
        views: 289,
    },
    {
        id: 'news4',
        title: '지역별 종친회 활동 현황',
        created_at: '2024-11-15',
        author_name: '관리자',
        views: 267,
    },
];

const AlimPage = () => {
    const [tabValue, setTabValue] = useState(0);
    const { setCurrentNotice, setEditMode, setEditOpen, setFormNotice, setViewOpen } = useNoticetore();
    const { user } = useAuthStore();
    const { data: noticesData, isSuccess } = useNoticesList(1, 100);
    const deleteNoticeMutation = useDeleteNoticesRequest();

    const [userId, setUserId] = useState('');
    const [notices, setNotices] = useState<Post[]>([]);

    useEffect(() => {
        if (isSuccess && Array.isArray(noticesData)) {
            setNotices(noticesData);
        }
    }, [isSuccess, noticesData]);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

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

    const handleView = (notice: Post | any) => {
        setViewOpen(true);
        setCurrentNotice(notice);
    };

    const handleDelete = (id: string) => {
        CustomDialog.confirm({
            title: '공지 삭제',
            content: '공지사항을 삭제하시겠습니까?',
            onConfirm: () => {
                deleteNoticeMutation.mutate(
                    { id },
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
        <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100' }}>
            {/* 헤더 섹션 */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 8,
                    textAlign: 'center',
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        알림마당
                    </Typography>
                    <Typography variant="h6">유구한 역사와 전통을 이어가는 OO황씨 대종회입니다</Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                    대종회의 주요 소식과 공지사항을 확인하세요
                </Typography>

                {/* 탭 메뉴 */}
                <Paper elevation={3} sx={{ mb: 4 }}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        sx={{ borderBottom: 1, borderColor: 'divider' }}
                        centered
                    >
                        <Tab label="공지사항" />
                        <Tab label="행사안내" />
                        <Tab label="종회소식" />
                    </Tabs>
                </Paper>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        {/* 공지사항 탭 */}
                        {tabValue === 0 && (
                            <Paper elevation={3}>
                                <Box sx={{ p: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            mb: 3,
                                        }}
                                    >
                                        <Typography variant="h6" fontWeight="bold">
                                            공지사항
                                        </Typography>
                                        <Button variant="contained" onClick={handleOpen}>
                                            글쓰기
                                        </Button>
                                    </Box>
                                    <List>
                                        {notices.length > 0 ? (
                                            notices.map((notice, index) => (
                                                <React.Fragment key={notice.id}>
                                                    <ListItemButton
                                                        sx={{ py: 2, '&:hover': { bgcolor: 'grey.50' } }}
                                                        onClick={() => handleView(notice)}
                                                    >
                                                        <ListItemText
                                                            primary={
                                                                <Box
                                                                    sx={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: 1,
                                                                    }}
                                                                >
                                                                    {/* {notice.is_pinned && (
                                                                        <Campaign
                                                                            sx={{ fontSize: 18, color: 'primary.main' }}
                                                                        />
                                                                    )} */}
                                                                    {notice.title}
                                                                    {/* {notice.is_important && (
                                                                        <Chip label="중요" size="small" color="error" />
                                                                    )} */}
                                                                </Box>
                                                            }
                                                            // secondary={`${notice.author_name || '관리자'} | ${dayjs(
                                                            //     notice.created_at,
                                                            // ).format('YYYY.MM.DD')} | 조회 ${notice.views || 0}`}
                                                            secondary={`${notice.author_name || '관리자'} | ${dayjs(
                                                                notice.created_at,
                                                            ).format('YYYY.MM.DD')}`}
                                                        />
                                                        {user && user.id === notice.author_id && (
                                                            <Box sx={{ display: 'flex', gap: 1 }}>
                                                                <IconButton
                                                                    size="small"
                                                                    color="warning"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleEditOpen(notice);
                                                                    }}
                                                                >
                                                                    <EditIcon fontSize="small" />
                                                                </IconButton>
                                                                <IconButton
                                                                    size="small"
                                                                    color="error"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleDelete(notice.id);
                                                                    }}
                                                                >
                                                                    <DeleteIcon fontSize="small" />
                                                                </IconButton>
                                                            </Box>
                                                        )}
                                                    </ListItemButton>
                                                    {index < notices.length - 1 && <Divider />}
                                                </React.Fragment>
                                            ))
                                        ) : (
                                            <Box sx={{ py: 4, textAlign: 'center' }}>
                                                <Typography color="text.secondary">
                                                    등록된 공지사항이 없습니다.
                                                </Typography>
                                            </Box>
                                        )}
                                    </List>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
                                        <Button>1</Button>
                                        <Button>2</Button>
                                        <Button>3</Button>
                                        <Button>4</Button>
                                        <Button>5</Button>
                                    </Box>
                                </Box>
                            </Paper>
                        )}

                        {/* 행사안내 탭 */}
                        {tabValue === 1 && (
                            <Paper elevation={3}>
                                <Box sx={{ p: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            mb: 3,
                                        }}
                                    >
                                        <Typography variant="h6" fontWeight="bold">
                                            행사안내
                                        </Typography>
                                        <Button variant="contained" disabled>
                                            글쓰기
                                        </Button>
                                    </Box>
                                    <List>
                                        {mockEvents.map((event, index) => (
                                            <React.Fragment key={event.id}>
                                                <ListItem sx={{ py: 2, '&:hover': { bgcolor: 'grey.50' } }}>
                                                    <ListItemText
                                                        primary={
                                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                <CalendarToday
                                                                    sx={{ fontSize: 18, color: 'primary.main' }}
                                                                />
                                                                {event.title}
                                                                <Chip
                                                                    label={event.event_status}
                                                                    size="small"
                                                                    color={
                                                                        event.event_status === '예정'
                                                                            ? 'primary'
                                                                            : 'default'
                                                                    }
                                                                />
                                                            </Box>
                                                        }
                                                        secondary={`${dayjs(event.event_date).format('YYYY.MM.DD')} | ${
                                                            event.event_location
                                                        }`}
                                                    />
                                                </ListItem>
                                                {index < mockEvents.length - 1 && <Divider />}
                                            </React.Fragment>
                                        ))}
                                    </List>
                                </Box>
                            </Paper>
                        )}

                        {/* 종회소식 탭 */}
                        {tabValue === 2 && (
                            <Paper elevation={3}>
                                <Box sx={{ p: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            mb: 3,
                                        }}
                                    >
                                        <Typography variant="h6" fontWeight="bold">
                                            종회소식
                                        </Typography>
                                        <Button variant="contained" disabled>
                                            글쓰기
                                        </Button>
                                    </Box>
                                    <List>
                                        {mockNews.map((news, index) => (
                                            <React.Fragment key={news.id}>
                                                <ListItemButton sx={{ py: 2, '&:hover': { bgcolor: 'grey.50' } }}>
                                                    <ListItemText
                                                        primary={news.title}
                                                        secondary={`${news.author_name} | ${dayjs(
                                                            news.created_at,
                                                        ).format('YYYY.MM.DD')} | 조회 ${news.views}`}
                                                    />
                                                </ListItemButton>
                                                {index < mockNews.length - 1 && <Divider />}
                                            </React.Fragment>
                                        ))}
                                    </List>
                                </Box>
                            </Paper>
                        )}
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        {/* 다가오는 행사 */}
                        <Paper elevation={3} sx={{ mb: 3 }}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                    다가오는 행사
                                </Typography>
                                {mockEvents
                                    .filter((e) => e.event_status === '예정')
                                    .slice(0, 2)
                                    .map((event, index) => (
                                        <Box
                                            key={event.id}
                                            sx={{
                                                mb: index === 0 ? 2 : 0,
                                                p: 2,
                                                bgcolor: 'primary.light',
                                                borderRadius: 2,
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                fontWeight="bold"
                                                sx={{ mb: 1, color: 'primary.main' }}
                                            >
                                                {event.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                일시: {dayjs(event.event_date).format('YYYY.MM.DD (ddd) HH:mm')}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                장소: {event.event_location}
                                            </Typography>
                                        </Box>
                                    ))}
                            </Box>
                        </Paper>

                        {/* 빠른 메뉴 */}
                        <Paper elevation={3}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                    빠른 메뉴
                                </Typography>
                                <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
                                    종원 등록
                                </Button>
                                <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
                                    족보 열람
                                </Button>
                                <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
                                    회비 납부
                                </Button>
                                <Button fullWidth variant="outlined">
                                    문의하기
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <NoticeEditModal id={userId} />
            <NoticeViewModal />
        </Box>
    );
};

export default AlimPage;
