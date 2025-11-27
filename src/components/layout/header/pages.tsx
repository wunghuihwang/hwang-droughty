'use client';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import { useState } from 'react';
export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = ['대종회 소개', '족보', '종원마당', '알림마당', '문의하기'];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #1565c0 0%, #1976d2 100%)' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
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
                                상주황씨 소종회
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                                始祖 OO公 宗中
                            </Typography>
                        </Box>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                        {menuItems.map((item) => (
                            <Button key={item} sx={{ color: 'white', fontWeight: 500 }}>
                                {item}
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Menu Button */}
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

            {/* Mobile Drawer */}
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
                </Box>
            </Drawer>
        </AppBar>
    );
}
