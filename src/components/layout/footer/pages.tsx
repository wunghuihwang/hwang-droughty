import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#212121', color: 'white', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container rowSpacing={4} columnSpacing={{ xs: 2, md: 4 }} sx={{ mb: 4 }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                            OO김씨 대종회
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                            始祖 OO公의 뜻을 이어
                            <br />
                            종원 상호 간의 친목과 화합을 도모합니다
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                            바로가기
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                족보 검색
                            </Link>
                            <Link href="#" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                종원 등록
                            </Link>
                            <Link href="#" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                공지사항
                            </Link>
                            <Link href="#" underline="hover" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                찾아오시는 길
                            </Link>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                            문의
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 0.5 }}>
                            전화: 02-1234-5678
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 0.5 }}>
                            이메일: info@daejonghwe.org
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 1 }}>
                            평일 09:00 - 18:00
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                        Copyright © 2024 OO김씨 대종회. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
