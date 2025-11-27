import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';

const FindPasswordPage = () => {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
                    <Typography component="h1" variant="h4" align="center" gutterBottom>
                        비밀번호 찾기
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="이메일"
                            name="email"
                            type="email"
                            autoFocus
                        />
                        <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            비밀번호 재설정 링크 보내기
                        </Button>
                        <Button fullWidth variant="text" href="/login">
                            로그인으로 돌아가기
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default FindPasswordPage;
