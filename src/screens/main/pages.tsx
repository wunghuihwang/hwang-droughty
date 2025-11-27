import BookIcon from '@mui/icons-material/Book';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import { Box, Button, Card, CardContent, Container, Grid, Paper, Typography } from '@mui/material';

export default function MainContainer() {
    const features = [
        {
            title: '족보 관리',
            description: '체계적인 족보 데이터베이스 구축',
            icon: <BookIcon sx={{ fontSize: 48, color: '#1976d2' }} />,
        },
        {
            title: '종원 명부',
            description: '전국 종원들의 연락처 관리',
            icon: <PeopleIcon sx={{ fontSize: 48, color: '#2e7d32' }} />,
        },
        {
            title: '행사 안내',
            description: '시제, 총회 등 행사 일정 공지',
            icon: <CalendarMonthIcon sx={{ fontSize: 48, color: '#7b1fa2' }} />,
        },
        {
            title: '문중 역사',
            description: '유서 깊은 가문의 역사 보존',
            icon: <EmojiEventsIcon sx={{ fontSize: 48, color: '#ed6c02' }} />,
        },
    ];

    const notices = [
        { title: '2024년 정기총회 개최 안내', date: '2024.11.15' },
        { title: '추계 시제 일정 공지', date: '2024.10.28' },
        { title: '족보 수정 신청 접수', date: '2024.10.20' },
        { title: '종원 등록 안내', date: '2024.10.10' },
    ];

    const gallery = [
        { title: '2024 정기총회', color: '#42a5f5' },
        { title: '춘계 시제', color: '#66bb6a' },
        { title: '종원 체육대회', color: '#ab47bc' },
        { title: '장학금 수여식', color: '#ffa726' },
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                    py: { xs: 8, md: 16 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.1,
                        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{ color: '#1976d2', fontWeight: 700, mb: 3 }}
                    >
                        天倫의 정을 이어가는
                        <br />
                        <Typography component="span" variant="h2" sx={{ color: '#1976d2', fontWeight: 700 }}>
                            OO김씨 대종회
                        </Typography>
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'text.secondary', mb: 4 }}>
                        유구한 역사와 전통을 계승하며 종원 간의 화목과 친목을 도모합니다
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button variant="contained" size="large" endIcon={<ChevronRightIcon />} sx={{ px: 4, py: 1.5 }}>
                            종원 등록하기
                        </Button>
                        <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5 }}>
                            대종회 소개
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Quick Info Bar */}
            <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 2 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={2} justifyContent="space-around" textAlign="center">
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                등록 종원:{' '}
                                <Typography component="span" sx={{ color: '#bbdefb' }}>
                                    3,248명
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                다음 시제:{' '}
                                <Typography component="span" sx={{ color: '#bbdefb' }}>
                                    2024.12.15
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                창립:{' '}
                                <Typography component="span" sx={{ color: '#bbdefb' }}>
                                    1954년
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Box sx={{ bgcolor: '#f5f5f5', py: { xs: 8, md: 12 }, px: 12 }}>
                <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 2, color: 'black' }}>
                    대종회 주요 업무
                </Typography>
                <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
                    종원 여러분을 위한 다양한 서비스를 제공합니다
                </Typography>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    textAlign: 'center',
                                    p: 3,
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardContent>
                                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Notices & Gallery Section */}
            <Box sx={{ bgcolor: '#f5f5f5', py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Notices */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper sx={{ p: 4, height: '100%' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mb: 3,
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                        공지사항
                                    </Typography>
                                    <Button endIcon={<ChevronRightIcon />} sx={{ fontWeight: 600 }}>
                                        더보기
                                    </Button>
                                </Box>
                                <Box>
                                    {notices.map((notice, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                py: 2,
                                                borderBottom: index < notices.length - 1 ? '1px solid #e0e0e0' : 'none',
                                                cursor: 'pointer',
                                                '&:hover': { bgcolor: '#f5f5f5' },
                                                px: 1,
                                                borderRadius: 1,
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {notice.title}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {notice.date}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Gallery */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper sx={{ p: 4, height: '100%' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mb: 3,
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                        포토갤러리
                                    </Typography>
                                    <Button endIcon={<ChevronRightIcon />} sx={{ fontWeight: 600 }}>
                                        더보기
                                    </Button>
                                </Box>
                                <Grid container spacing={2}>
                                    {gallery.map((item, index) => (
                                        <Grid size={{ xs: 6 }} key={index}>
                                            <Box
                                                sx={{
                                                    bgcolor: item.color,
                                                    height: 120,
                                                    borderRadius: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    transition: 'opacity 0.3s',
                                                    '&:hover': { opacity: 0.9 },
                                                }}
                                            >
                                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                                                    {item.title}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Contact Section */}
            <Box
                sx={{
                    background: 'linear-gradient(90deg, #1565c0 0%, #1976d2 100%)',
                    color: 'white',
                    py: { xs: 8, md: 12 },
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
                        대종회 연락처
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4 }} textAlign="center">
                            <Box
                                sx={{
                                    width: 64,
                                    height: 64,
                                    bgcolor: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 2,
                                }}
                            >
                                <Typography sx={{ fontSize: 32 }}>📞</Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                전화문의
                            </Typography>
                            <Typography sx={{ color: '#bbdefb' }}>02-1234-5678</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }} textAlign="center">
                            <Box
                                sx={{
                                    width: 64,
                                    height: 64,
                                    bgcolor: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 2,
                                }}
                            >
                                <Typography sx={{ fontSize: 32 }}>✉️</Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                이메일
                            </Typography>
                            <Typography sx={{ color: '#bbdefb' }}>info@daejonghwe.org</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }} textAlign="center">
                            <Box
                                sx={{
                                    width: 64,
                                    height: 64,
                                    bgcolor: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 2,
                                }}
                            >
                                <Typography sx={{ fontSize: 32 }}>📍</Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                사무실 주소
                            </Typography>
                            <Typography sx={{ color: '#bbdefb' }}>서울시 종로구 XXX</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
