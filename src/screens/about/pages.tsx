'use client';

import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
const AboutPage = () => {
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
                        대종회 소개
                    </Typography>
                    <Typography variant="h6">유구한 역사와 전통을 이어가는 OO횟씨 대종회입니다</Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 6 }}>
                {/* 인사말 */}
                <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
                    <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                        회장 인사말
                    </Typography>

                    <Box sx={{ borderBottom: '2px solid #e0e0e0', mb: 4 }} />

                    <Box sx={{ display: 'flex', gap: 4 }}>
                        <Avatar sx={{ width: 120, height: 120, bgcolor: 'grey.400' }} />

                        <Box>
                            <Typography variant="h6" gutterBottom>
                                OO횟씨 종친 여러분, 안녕하십니까?
                            </Typography>

                            <Typography color="text.secondary" paragraph>
                                우리 대종회는 1954년 창립 이래 70년이 넘는 시간 동안 종친 간의 화목과 친목을 도모하며
                                선조들의 높으신 뜻을 받들어 왔습니다.
                            </Typography>

                            <Typography color="text.secondary" paragraph>
                                앞으로도 종친 여러분과 함께 더욱 발전하는 대종회가 되도록 최선을 다하겠습니다.
                            </Typography>

                            <Typography fontWeight="bold" sx={{ mt: 2 }}>
                                제20대 회장 OOO 배상
                            </Typography>
                        </Box>
                    </Box>
                </Paper>

                {/* 대종회 소개 */}
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        textAlign="center"
                        sx={{ color: '#1976d2', fontWeight: 700, mb: 2 }}
                    >
                        대종회 소개
                    </Typography>
                    <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
                        우리의 정체성과 가치를 소개합니다
                    </Typography>

                    <Grid container spacing={3}>
                        {[
                            {
                                icon: '🏛️',
                                title: '역사와 전통',
                                desc: '1954년 창립 이래 70년의 역사를 자랑하는 유서 깊은 대종회입니다.',
                            },
                            {
                                icon: '👥',
                                title: '종친 화합',
                                desc: '전국 3,200여 종친이 함께하는 화목하고 단합된 조직입니다.',
                            },
                            {
                                icon: '🏆',
                                title: '선조 숭모',
                                desc: '조상의 높으신 뜻을 기리고 후손의 발전을 도모합니다.',
                            },
                        ].map((item, idx) => (
                            <Grid size={{ xs: 12, md: 4 }} key={idx}>
                                <Paper sx={{ p: 4, textAlign: 'center' }} elevation={3}>
                                    <Typography fontSize={56} color="primary" mb={2}>
                                        {item.icon}
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography color="text.secondary">{item.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* 연혁 */}
                <Box sx={{ mb: 8 }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        textAlign="center"
                        sx={{ color: '#1976d2', fontWeight: 700, mb: 2 }}
                    >
                        대종회 연혁
                    </Typography>
                    <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
                        우리의 발자취를 돌아봅니다
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {[
                            { year: '1954년', event: 'OO횟씨 대종회 창립' },
                            { year: '1978년', event: '종친회관 건립' },
                            { year: '1995년', event: '족보 발간 (제5차)' },
                            { year: '2010년', event: '홈페이지 개설' },
                            { year: '2024년', event: '대종회 웹사이트 리뉴얼' },
                        ].map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <Paper
                                    sx={{
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        py: 1,
                                        px: 3,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                    }}
                                >
                                    {item.year}
                                </Paper>

                                <Box sx={{ width: 12, height: 12, bgcolor: 'primary.main', borderRadius: '50%' }} />

                                <Paper sx={{ p: 2, flex: 1 }} elevation={2}>
                                    <Typography>{item.event}</Typography>
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* 조직도 */}
                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        textAlign="center"
                        sx={{ color: '#1976d2', fontWeight: 700, mb: 2 }}
                    >
                        조직도
                    </Typography>
                    <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
                        대종회의 조직 구성을 소개합니다
                    </Typography>

                    <Paper sx={{ p: 6 }} elevation={3}>
                        <Box sx={{ textAlign: 'center', mb: 4 }}>
                            <Paper
                                sx={{
                                    display: 'inline-block',
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    py: 2,
                                    px: 5,
                                    fontWeight: 'bold',
                                    fontSize: '1.3rem',
                                }}
                            >
                                회장
                            </Paper>
                        </Box>

                        {/* 간부 */}
                        <Grid container spacing={2} sx={{ mb: 4 }}>
                            {['부회장', '총무', '재무', '감사'].map((pos, idx) => (
                                <Grid size={{ xs: 6, md: 3 }} key={idx}>
                                    <Paper
                                        sx={{
                                            textAlign: 'center',
                                            py: 2,
                                            fontWeight: 'bold',
                                            bgcolor: 'primary.light',
                                            color: 'white',
                                        }}
                                    >
                                        {pos}
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>

                        {/* 부서 */}
                        <Grid container spacing={2}>
                            {['총무부', '재무부', '문화부', '홍보부', '사업부'].map((dept, idx) => (
                                <Grid size={{ xs: 6, md: 2.4 }} key={idx}>
                                    <Paper sx={{ py: 2, textAlign: 'center', bgcolor: 'grey.200' }}>{dept}</Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutPage;
