'use client';

import useSupabaseBrowser from '@/app/supabase-browser';
import { SignUpTypes } from '@/types/signup.type';
import { isEmpty, validators } from '@/utill/utill';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignupContainer = () => {
    const supabase = useSupabaseBrowser();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [signupData, setSignupData] = useState<SignUpTypes>({
        name: '',
        age: '',
        username: '',
        password: '',
        confirmPassword: '',
        phone: '',
        email: '',
    });

    const handleChangeId = (event: string) => {
        if (event && /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event)) {
            return;
        }
        handleSignupChange('username', event);
    };

    const handleChangeAge = (event: string) => {
        const regex = /^[0-9]*$/;
        if (!regex.test(event)) return;
        handleSignupChange('age', event);
    };

    const handleSignupChange = (field: string, value: string | number) => {
        setSignupData({ ...signupData, [field]: value });
    };

    const handleSignup = async () => {
        if (isEmpty(signupData.name)) {
            alert('이름을 입력해주세요');
            return;
        }
        if (isEmpty(signupData.age)) {
            alert('나이를 입력해주세요');
            return;
        }
        if (isEmpty(signupData.username)) {
            alert('아이디를 입력해주세요');
            return;
        }
        if (isEmpty(signupData.password)) {
            alert('비밀번호를 입력해주세요');
            return;
        }
        if (isEmpty(signupData.confirmPassword)) {
            alert('비밀번호 확인을 입력해주세요');
            return;
        }
        if (signupData.password !== signupData.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (isEmpty(signupData.phone)) {
            alert('핸드폰번호를 입력해주세요');
            return;
        }

        if (isEmpty(signupData.email)) {
            alert('이메일을 입력해주세요');
            return;
        }

        if (!validators.password(signupData.password)) {
            alert('비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.');
            return;
        }

        if (!validators.email(signupData.email)) {
            alert('올바른 이메일 형식을 입력해주세요.');
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: signupData.email,
                password: signupData.password,
                options: {
                    data: {
                        name: signupData.name,
                        age: signupData.age,
                        username: signupData.username,
                        phone: signupData.phone,
                    },
                },
            });

            console.log(data);

            if (error) throw error;

            setOpenModal(true);
        } catch (error) {
            console.error('회원가입 오류:', error);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        router.push('/login');
    };

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    marginTop: 4,
                    marginBottom: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
                    <Typography component="h1" variant="h4" align="center" gutterBottom>
                        회원가입
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="이름"
                            name="name"
                            value={signupData.name}
                            onChange={(e) => handleSignupChange('name', e.target.value)}
                        />
                        <TextField
                            required
                            fullWidth
                            id="age"
                            label="나이"
                            name="age"
                            value={signupData.age}
                            onChange={(e) => handleChangeAge(e.target.value)}
                            type="text"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="signup-username"
                            label="아이디"
                            name="username"
                            value={signupData.username}
                            onChange={(e) => handleChangeId(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type={showPassword ? 'text' : 'password'}
                            id="signup-password"
                            value={signupData.password}
                            onChange={(e) => handleSignupChange('password', e.target.value)}
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
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirm-password"
                            value={signupData.confirmPassword}
                            onChange={(e) => handleSignupChange('confirmPassword', e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                            <TextField
                                required
                                fullWidth
                                id="phone"
                                label="전화번호"
                                name="phone"
                                value={signupData.phone}
                                onChange={(e) => handleSignupChange('phone', e.target.value)}
                                placeholder="010-0000-0000"
                            />
                        </Box>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="이메일"
                            name="email"
                            type="email"
                            value={signupData.email}
                            onChange={(e) => handleSignupChange('email', e.target.value)}
                            placeholder="example@email.com"
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSignup}
                        >
                            가입하기
                        </Button>
                        <Button fullWidth variant="text" href="/login">
                            로그인으로 돌아가기
                        </Button>
                    </Box>
                </Paper>
            </Box>

            {/* 회원가입 완료 모달 */}
            <Dialog open={openModal} onClose={handleCloseModal}>
                <DialogTitle>회원가입 완료</DialogTitle>
                <DialogContent>
                    <Typography>회원가입이 완료되었습니다!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} variant="contained">
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default SignupContainer;
