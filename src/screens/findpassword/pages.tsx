'use client';

import { useFindPasswordRequest } from '@/query/auth';
import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const FindPasswordPage = () => {
    const [emailData, setEmailData] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const findpasswordMutation = useFindPasswordRequest();

    const handleFindPassword = async () => {
        if (!emailData) {
            setMessage({ type: 'error', text: '이메일을 입력해주세요.' });
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            findpasswordMutation.mutate(
                { email: emailData },
                {
                    onSuccess: (data) => {
                        if (!data) {
                            setMessage({
                                type: 'error',
                                text: '존재하지 않은 이메일입니다. 이메일을 확인해주세요.',
                            });

                            return;
                        } else {
                            setMessage({
                                type: 'success',
                                text: '비밀번호 재설정 링크가 이메일로 전송되었습니다. 이메일을 확인해주세요.',
                            });
                            setEmailData('');
                        }
                    },
                    onError: (error) => {
                        setMessage({
                            type: 'error',
                            text: '비밀번호 재설정 링크 전송에 실패했습니다.',
                        });
                    },
                },
            );
        } catch (err) {
            console.error(err);
            setMessage({
                type: 'error',
                text: '오류가 발생했습니다. 다시 시도해주세요.',
            });
        } finally {
            setLoading(false);
        }
    };

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

                    {message && (
                        <Alert severity={message.type} sx={{ mt: 2 }}>
                            {message.text}
                        </Alert>
                    )}

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
                            value={emailData}
                            onChange={(e) => setEmailData(e.target.value)}
                            disabled={loading}
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleFindPassword}
                            disabled={loading}
                        >
                            {loading ? '전송 중...' : '비밀번호 재설정 링크 보내기'}
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
