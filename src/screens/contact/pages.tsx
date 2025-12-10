'use client';

import { AccessTime, Email, LocationOn, Phone } from '@mui/icons-material';
import { Box, Button, Container, Divider, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material';

const ContactPage = () => {
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
                        문의하기
                    </Typography>
                    <Typography variant="h6">유구한 역사와 전통을 이어가는 OO황씨 대종회입니다</Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                    궁금하신 사항을 문의해 주세요. 빠르게 답변드리겠습니다.
                </Typography>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        {/* 문의 작성 폼 */}
                        <Paper elevation={3} sx={{ p: 4 }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                                문의 작성
                            </Typography>

                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="이름" variant="outlined" required />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="연락처" variant="outlined" required />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="이메일" type="email" variant="outlined" required />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        select
                                        label="문의 유형"
                                        defaultValue=""
                                        variant="outlined"
                                        required
                                    >
                                        <MenuItem value="족보">족보 관련</MenuItem>
                                        <MenuItem value="종원등록">종원 등록</MenuItem>
                                        <MenuItem value="행사">행사 문의</MenuItem>
                                        <MenuItem value="회비">회비 납부</MenuItem>
                                        <MenuItem value="기타">기타</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField fullWidth label="제목" variant="outlined" required />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        label="문의 내용"
                                        multiline
                                        rows={8}
                                        variant="outlined"
                                        required
                                        placeholder="문의하실 내용을 상세히 작성해 주세요."
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Button variant="contained" size="large" sx={{ px: 4 }}>
                                            문의하기
                                        </Button>
                                        <Button variant="outlined" size="large">
                                            취소
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>

                        {/* 자주 묻는 질문 */}
                        <Paper elevation={3} sx={{ mt: 3, p: 4 }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                                자주 묻는 질문
                            </Typography>
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                                    Q. 종원 등록은 어떻게 하나요?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A. 홈페이지 상단의 '종원 등록하기' 버튼을 클릭하시거나, 대종회 사무실로 전화 주시면
                                    안내해 드립니다.
                                </Typography>
                            </Box>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                                    Q. 족보 열람은 가능한가요?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A. 등록된 종원이시라면 홈페이지에서 온라인 족보를 열람하실 수 있습니다.
                                </Typography>
                            </Box>
                            <Divider sx={{ my: 2 }} />
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                                    Q. 회비는 어떻게 납부하나요?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A. 계좌이체 또는 온라인 납부가 가능합니다. 자세한 내용은 공지사항을 참고해 주세요.
                                </Typography>
                            </Box>
                            <Divider sx={{ my: 2 }} />
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                                    Q. 행사 참여는 어떻게 신청하나요?
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A. 행사 공지사항에서 신청서를 다운로드하시거나, 전화로 신청하실 수 있습니다.
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        {/* 연락처 정보 */}
                        <Paper elevation={3} sx={{ mb: 3, p: 3 }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                                대종회 연락처
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                <Phone sx={{ mr: 2, color: 'primary.main' }} />
                                <Box>
                                    <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 0.5 }}>
                                        전화번호
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        02-1234-5678
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                <Email sx={{ mr: 2, color: 'primary.main' }} />
                                <Box>
                                    <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 0.5 }}>
                                        이메일
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        info@sangjuhwang.org
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                                <Box>
                                    <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 0.5 }}>
                                        사무실 주소
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        서울시 종로구 XXX
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <AccessTime sx={{ mr: 2, color: 'primary.main' }} />
                                <Box>
                                    <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 0.5 }}>
                                        운영 시간
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        평일 09:00 - 18:00
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        (토·일·공휴일 휴무)
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>

                        {/* 오시는 길 */}
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                오시는 길
                            </Typography>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 250,
                                    bgcolor: 'grey.300',
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 2,
                                }}
                            >
                                <Typography color="white" fontWeight="bold">
                                    지도
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                <strong>지하철:</strong> 1호선 종각역 3번 출구
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                <strong>버스:</strong> 종로3가 정류장 하차
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>주차:</strong> 건물 지하 주차장 이용 가능
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactPage;
