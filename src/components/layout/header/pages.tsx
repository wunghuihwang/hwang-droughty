'use client';
import useSupabaseBrowser from '@/app/supabase-browser';
import CustomDialog from '@/lib/dialog';
import { useAuthStore } from '@/store/useAuthStore';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Skeleton,
    Toolbar,
    Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { user, loading } = useAuthStore();
    const supabase = useSupabaseBrowser();
    const router = useRouter();

    const menuItems = ['대종회 소개', '족보', '종원마당', '알림마당', '문의하기'];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () => {
        CustomDialog.confirm({
            title: '로그아웃',
            content: '로그아웃을 하시겠습니까?',
            onConfirm: async () => {
                await supabase.auth.signOut();
            },
        });
        // router.push('/login');
    };

    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #1565c0 0%, #1976d2 100%)' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, cursor: 'pointer' }}
                        onClick={() => router.push('/')}
                    >
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                bgcolor: 'white',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                            }}
                        >
                            <Typography sx={{ color: '#1565c0', fontWeight: 'bold', fontSize: 20 }}>氏</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                상주황
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                                始祖 OO公 宗中
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
                        {menuItems.map((item) => (
                            <Button key={item} sx={{ color: 'white', fontWeight: 500 }}>
                                {item}
                            </Button>
                        ))}

                        {loading ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                                <Skeleton
                                    variant="text"
                                    width={60}
                                    height={20}
                                    sx={{ bgcolor: 'rgba(255,255,255,0.3)' }}
                                />
                            </Box>
                        ) : user ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 2 }}>
                                <Typography
                                    sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', fontWeight: 500 }}
                                >
                                    {user.user_metadata?.name || user.email}
                                </Typography>
                                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>|</Typography>
                                <Button
                                    onClick={handleLogout}
                                    sx={{
                                        color: 'white',
                                        fontSize: '0.875rem',
                                        minWidth: 'auto',
                                        px: 1,
                                    }}
                                >
                                    로그아웃
                                </Button>
                            </Box>
                        ) : (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 2 }}>
                                <Button
                                    href="/login"
                                    sx={{
                                        color: 'white',
                                        fontSize: '0.875rem',
                                        minWidth: 'auto',
                                        px: 1,
                                    }}
                                >
                                    로그인
                                </Button>
                                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>|</Typography>
                                <Button
                                    href="/signup"
                                    sx={{
                                        color: 'white',
                                        fontSize: '0.875rem',
                                        minWidth: 'auto',
                                        px: 1,
                                    }}
                                >
                                    회원가입
                                </Button>
                            </Box>
                        )}
                    </Box>

                    <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <Box sx={{ width: 250 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                        <IconButton onClick={handleDrawerToggle}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem disablePadding key={item}>
                                <ListItemButton onClick={handleDrawerToggle}>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    {loading ? (
                        <Box sx={{ px: 2 }}>
                            <Skeleton variant="text" width="100%" height={40} />
                        </Box>
                    ) : user ? (
                        <List>
                            <ListItem>
                                <ListItemText primary={user.user_metadata?.name || user.email} secondary="로그인됨" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        handleLogout();
                                        handleDrawerToggle();
                                    }}
                                >
                                    <ListItemText primary="로그아웃" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    ) : (
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton href="/login" onClick={handleDrawerToggle}>
                                    <ListItemText primary="로그인" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton href="/signup" onClick={handleDrawerToggle}>
                                    <ListItemText primary="회원가입" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    )}
                </Box>
            </Drawer>
        </AppBar>
    );
}
