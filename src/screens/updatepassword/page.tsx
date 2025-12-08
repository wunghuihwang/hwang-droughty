// app/updatepassword/page.tsx
'use client';

import useSupabaseBrowser from '@/app/supabase-browser';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Box, Button, Container, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const UpdatePasswordContainer = () => {
    const supabase = useSupabaseBrowser();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    useEffect(() => {
        // URL에서 토큰 확인
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                setMessage({ type: 'error', text: '유효하지 않은 링크입니다.' });
            }
        });
    }, [supabase]);

    const handleUpdatePassword = async () => {
        if (password !== confirmPassword) {
            setMessage({ type: 'error', text: '비밀번호가 일치하지 않습니다.' });
            return;
        }

        if (password.length < 6) {
            setMessage({ type: 'error', text: '비밀번호는 최소 6자 이상이어야 합니다.' });
            return;
        }

        setLoading(true);
        setMessage(null);

        try {
            const { error } = await supabase.auth.updateUser({
                password: password,
            });

            if (error) {
                setMessage({ type: 'error', text: '비밀번호 변경에 실패했습니다.' });
            } else {
                setMessage({ type: 'success', text: '비밀번호가 성공적으로 변경되었습니다.' });
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            }
        } catch (err) {
            console.error(err);
            setMessage({ type: 'error', text: '오류가 발생했습니다.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
                    <Typography component="h1" variant="h4" align="center" gutterBottom>
                        새 비밀번호 설정
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
                            name="password"
                            label="새 비밀번호"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="비밀번호 확인"
                            type={showPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            disabled={loading}
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleUpdatePassword}
                            disabled={loading}
                        >
                            {loading ? '변경 중...' : '비밀번호 변경'}
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default UpdatePasswordContainer;
