'use client';

import {
    Avatar,
    Box,
    Button,
    Chip,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Typography,
} from '@mui/material';
import React from 'react';

const JongwonPage = () => {
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
                        종원마당
                    </Typography>
                    <Typography variant="h6">유구한 역사와 전통을 이어가는 OO황씨 대종회입니다</Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                    종원 여러분의 소통과 교류의 공간입니다
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        {/* 자유게시판 */}
                        <Paper elevation={3} sx={{ mb: 3 }}>
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
                                        자유게시판
                                    </Typography>
                                    <Button variant="contained">글쓰기</Button>
                                </Box>
                                <List>
                                    {[
                                        {
                                            title: '2024년 정기총회 안내',
                                            author: '관리자',
                                            date: '2024.12.10',
                                            views: 245,
                                            isNew: true,
                                        },
                                        {
                                            title: '족보 수정 요청 방법 안내',
                                            author: '황진수',
                                            date: '2024.12.09',
                                            views: 189,
                                            isNew: true,
                                        },
                                        {
                                            title: '종원 여러분 반갑습니다',
                                            author: '황민호',
                                            date: '2024.12.08',
                                            views: 156,
                                            isNew: false,
                                        },
                                        {
                                            title: '선산 성묘 일정 공유',
                                            author: '황동욱',
                                            date: '2024.12.07',
                                            views: 203,
                                            isNew: false,
                                        },
                                        {
                                            title: '대종회 발전을 위한 제안',
                                            author: '황서연',
                                            date: '2024.12.06',
                                            views: 178,
                                            isNew: false,
                                        },
                                    ].map((post, index) => (
                                        <React.Fragment key={index}>
                                            <ListItemButton sx={{ '&:hover': { bgcolor: 'grey.50' } }}>
                                                <ListItemText
                                                    primary={
                                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                            {post.title}
                                                            {post.isNew && (
                                                                <Chip label="N" size="small" color="error" />
                                                            )}
                                                        </Box>
                                                    }
                                                    secondary={`${post.author} | ${post.date} | 조회 ${post.views}`}
                                                />
                                            </ListItemButton>
                                            {index < 4 && <Divider />}
                                        </React.Fragment>
                                    ))}
                                </List>
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <Button>더보기</Button>
                                </Box>
                            </Box>
                        </Paper>

                        {/* 갤러리 */}
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
                                        종원 갤러리
                                    </Typography>
                                    <Button variant="outlined">더보기</Button>
                                </Box>
                                <Grid container spacing={2}>
                                    {[
                                        { title: '2024 정기총회', date: '2024.11.20' },
                                        { title: '종친회 모임', date: '2024.10.15' },
                                        { title: '선산 성묘', date: '2024.09.28' },
                                        { title: '추석 행사', date: '2024.09.15' },
                                    ].map((item, index) => (
                                        <Grid size={{ xs: 6, md: 3 }} key={index}>
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    height: 150,
                                                    bgcolor: 'grey.300',
                                                    borderRadius: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    '&:hover': { bgcolor: 'grey.400' },
                                                }}
                                            >
                                                <Typography color="white" fontWeight="bold">
                                                    사진 {index + 1}
                                                </Typography>
                                            </Box>
                                            <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {item.date}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        {/* 종원 등록 현황 */}
                        <Paper elevation={3} sx={{ mb: 3 }}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                    종원 등록 현황
                                </Typography>
                                <Box sx={{ textAlign: 'center', py: 3 }}>
                                    <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                                        3,248
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        명
                                    </Typography>
                                </Box>
                                <Button fullWidth variant="contained">
                                    종원 등록하기
                                </Button>
                            </Box>
                        </Paper>

                        {/* 최근 가입 종원 */}
                        <Paper elevation={3} sx={{ mb: 3 }}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                    최근 가입 종원
                                </Typography>
                                <List dense>
                                    {[
                                        { name: '황준호', date: '2024.12.10' },
                                        { name: '황미영', date: '2024.12.09' },
                                        { name: '황재현', date: '2024.12.09' },
                                        { name: '황수진', date: '2024.12.08' },
                                        { name: '황태영', date: '2024.12.07' },
                                    ].map((member, index) => (
                                        <ListItem key={index} sx={{ px: 0 }}>
                                            <Avatar sx={{ mr: 2, bgcolor: 'primary.main', width: 35, height: 35 }}>
                                                {member.name[0]}
                                            </Avatar>
                                            <ListItemText primary={member.name} secondary={member.date} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Paper>

                        {/* 공지사항 */}
                        <Paper elevation={3}>
                            <Box sx={{ p: 3 }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                    공지사항
                                </Typography>
                                <List dense>
                                    {[
                                        '2024년 정기총회 안내',
                                        '종원 등록 절차 안내',
                                        '족보 수정 신청 방법',
                                        '대종회 소식지 발간',
                                    ].map((notice, index) => (
                                        <React.Fragment key={index}>
                                            <ListItemButton sx={{ px: 0, '&:hover': { bgcolor: 'grey.50' } }}>
                                                <ListItemText primary={notice} />
                                            </ListItemButton>
                                            {index < 3 && <Divider />}
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default JongwonPage;
