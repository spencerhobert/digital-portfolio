import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    useMediaQuery,
    Menu,
    MenuItem,
    Box,
    Slide
} from '@mui/material';
import {
    Brightness4 as DarkModeIcon,
    Brightness7 as LightModeIcon,
    Menu as MenuIcon
} from '@mui/icons-material';
import { useTheme } from '../themes/ThemeContext';

const Header: React.FC = () => {
    const { mode, toggleColorMode } = useTheme();
    const isMobile = useMediaQuery('(max-width:600px)');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const navItems = ['Projects', 'Skills', 'About', 'Contact'];

    const handleNavClick = (item: string) => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        handleMenuClose();
    };

    // Hide/show header on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <Slide appear={false} direction="down" in={visible}>
            <AppBar position="sticky" color="primary" elevation={4} sx={{ transition: 'all 0.3s ease' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{
                        flexGrow: 1,
                        fontWeight: 'bold',
                        backgroundImage: 'linear-gradient(45deg, #4caf50, #1b5e20)',
                        backgroundSize: '100%',
                        backgroundRepeat: 'repeat',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                    }}>
                        Spencer Hobert
                    </Typography>

                    {isMobile ? (
                        // Mobile menu
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenuOpen}
                                sx={{ mr: 1 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                {navItems.map((item) => (
                                    <MenuItem key={item} onClick={() => handleNavClick(item)}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                    ) : (
                        // Desktop navigation
                        <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    color="inherit"
                                    onClick={() => handleNavClick(item)}
                                    sx={{
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '0',
                                            height: '2px',
                                            bottom: '0',
                                            left: '50%',
                                            backgroundColor: 'white',
                                            transition: 'all 0.3s ease',
                                            transform: 'translateX(-50%)'
                                        },
                                        '&:hover::after': {
                                            width: '80%'
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    )}

                    <Button
                        color="inherit"
                        onClick={toggleColorMode}
                        startIcon={mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                        sx={{
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(5px)',
                            borderRadius: '20px',
                            '&:hover': {
                                background: 'rgba(255,255,255,0.2)'
                            }
                        }}
                    >
                        {mode === 'dark' ? 'Light' : 'Dark'}
                    </Button>
                </Toolbar>
            </AppBar>
        </Slide>
    );
};

export default Header;