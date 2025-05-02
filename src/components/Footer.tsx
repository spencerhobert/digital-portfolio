import React from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    useTheme,
    Link,
    Divider
} from '@mui/material';
import {
    Email as EmailIcon,
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    KeyboardArrowUp as ArrowUpIcon
} from '@mui/icons-material';
import AnimatedElement from './AnimatedElement';

const Footer: React.FC = () => {
    const theme = useTheme();

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box component="footer" sx={{
            bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : 'primary.main',
            color: theme.palette.mode === 'dark' ? 'text.primary' : 'common.white',
            py: 6,
            position: 'relative'
        }}>
            {/* Wave shape at the top */}
            <Box sx={{
                position: 'absolute',
                top: -2,
                left: 0,
                width: '100%',
                height: '70px',
                zIndex: 2
            }}>
                <svg
                    viewBox="0 0 1440 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                >
                    <path
                        d="M0 32L60 37.3C120 43 240 53 360 42.7C480 32 600 0 720 0C840 0 960 32 1080 48C1200 64 1320 64 1380 64L1440 64V70H1380C1320 70 1200 70 1080 70C960 70 840 70 720 70C600 70 480 70 360 70C240 70 120 70 60 70H0V32Z"
                        fill={theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.main}
                    />
                </svg>
            </Box>

            {/* Scroll to top button */}
            <AnimatedElement type="fade" duration={800}>
                <Box sx={{
                    position: 'absolute',
                    top: -25,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 3
                }}>
                    <IconButton
                        onClick={scrollToTop}
                        aria-label="scroll to top"
                        sx={{
                            backgroundColor: theme.palette.mode === 'dark' ? 'primary.main' : 'common.white',
                            color: theme.palette.mode === 'dark' ? 'common.white' : 'primary.main',
                            width: 50,
                            height: 50,
                            '&:hover': {
                                backgroundColor: theme.palette.mode === 'dark' ? 'primary.light' : '#f0f0f0',
                                transform: 'translateY(-5px)'
                            },
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        }}
                    >
                        <ArrowUpIcon fontSize="large" />
                    </IconButton>
                </Box>
            </AnimatedElement>

            <Container maxWidth="lg">
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4
                }}>
                    <AnimatedElement type="slide" slideDirection="right" duration={800}>
                        <Typography variant="h6" sx={{
                            fontWeight: 'bold',
                            mb: { xs: 2, md: 0 },
                            backgroundImage: theme.palette.mode === 'dark'
                                ? 'linear-gradient(45deg, #4caf50, #1b5e20)'
                                : 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                            backgroundSize: '100%',
                            backgroundRepeat: 'repeat',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Spencer Hobert
                        </Typography>
                    </AnimatedElement>

                    <AnimatedElement type="slide" slideDirection="left" duration={800}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <IconButton
                                href="https://www.linkedin.com/in/spencer-hobert/"
                                target="_blank"
                                aria-label="LinkedIn"
                                sx={{
                                    color: theme.palette.mode === 'dark' ? 'primary.main' : 'common.white',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: theme.palette.mode === 'dark' ? 'primary.light' : '#e0e0e0',
                                        transform: 'translateY(-3px)'
                                    }
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                href="mailto:spencerhobert@gmail.com"
                                aria-label="Email"
                                sx={{
                                    color: theme.palette.mode === 'dark' ? 'primary.main' : 'common.white',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: theme.palette.mode === 'dark' ? 'primary.light' : '#e0e0e0',
                                        transform: 'translateY(-3px)'
                                    }
                                }}
                            >
                                <EmailIcon />
                            </IconButton>
                            <IconButton
                                href="https://github.com/spencerhobert"
                                target="_blank"
                                aria-label="GitHub"
                                sx={{
                                    color: theme.palette.mode === 'dark' ? 'primary.main' : 'common.white',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: theme.palette.mode === 'dark' ? 'primary.light' : '#e0e0e0',
                                        transform: 'translateY(-3px)'
                                    }
                                }}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Box>
                    </AnimatedElement>
                </Box>

                <Divider sx={{
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)',
                    my: 3
                }} />

                <AnimatedElement type="fade" duration={800} delay={400}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" sx={{
                            color: theme.palette.mode === 'dark' ? 'text.secondary' : 'rgba(255,255,255,0.8)'
                        }}>
                            © {new Date().getFullYear()} Spencer Hobert's Portfolio. All rights reserved.
                        </Typography>
                        <Typography variant="caption" sx={{
                            mt: 1,
                            display: 'block',
                            color: theme.palette.mode === 'dark' ? 'text.secondary' : 'rgba(255,255,255,0.6)'
                        }}>
                            Built with <Link
                                href="https://react.dev/"
                                target="_blank"
                                underline="hover"
                                sx={{
                                    color: theme.palette.mode === 'dark' ? 'primary.main' : 'common.white',
                                    fontWeight: 'bold'
                                }}
                            >
                                React
                            </Link> and <Link
                                href="https://mui.com/"
                                target="_blank"
                                underline="hover"
                                sx={{
                                    color: theme.palette.mode === 'dark' ? 'primary.main' : 'common.white',
                                    fontWeight: 'bold'
                                }}
                            >
                                Material UI
                            </Link>
                        </Typography>
                    </Box>
                </AnimatedElement>
            </Container>
        </Box>
    );
};

export default Footer;