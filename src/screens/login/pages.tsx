'use client';

import useSupabaseBrowser from '@/app/supabase-browser';
import { useAuthStore } from '@/store/useAuthStore';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Container, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginContainer = () => {
    const { setUser } = useAuthStore();
    const supabase = useSupabaseBrowser();
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const handleAlert = (text: string) => {
        return alert(text);
    };

    const handleSubmit = async () => {
        try {
            console.log(supabase);
            const { data, error } = await supabase
                .from('profiles')
                .select('username, email')
                .eq('username', loginData.username.trim())
                .maybeSingle();
            console.log(data);
            if (error) {
                console.error('프로필 조회 오류:', error);
                handleAlert('로그인 중 오류가 발생했습니다.');
                return;
            }

            if (!data?.username) {
                handleAlert('존재하지 않는 아이디입니다.');
                return;
            }

            if (!data.email) {
                handleAlert('이메일 정보가 없습니다. 관리자에게 문의하세요.');
                return;
            }

            handleLogin(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleLogin = async (data: any) => {
        try {
            const { data: userData, error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: loginData.password,
            });

            console.log(userData);
            console.log(error);
            if (error) {
                handleAlert('비밀번호를 다시입력해주세요.');
                console.log(error);
                return;
            }

            router.push('/');
            setUser(userData.user);
            handleAlert('로그인됐습니다.');
        } catch (err) {
            console.log(err);
            handleAlert('로그인에 실패했습니다.');
        }
    };

    const handleLoginChange = (field: string, value: string) => {
        console.log('field:', field, 'value:', value);
        setLoginData({ ...loginData, [field]: value });
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
                        로그인
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="아이디"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => handleLoginChange('username', e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => handleLoginChange('password', e.target.value)}
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
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            로그인
                        </Button>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Button fullWidth variant="outlined" href="/signup">
                                회원가입
                            </Button>
                            <Button fullWidth variant="text" href="/findpassword">
                                비밀번호 찾기
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default LoginContainer;
