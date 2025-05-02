import React, { useState, useEffect } from 'react';
import {
    Paper,
    Box,
    Container,
    Typography,
    Button,
    useTheme,
    alpha
} from '@mui/material';
import { KeyboardArrowDown as ArrowDownIcon } from '@mui/icons-material';
import FallbackHeroImage from "../assets/images/fallback_hero.jpg";
import AnimatedElement from './AnimatedElement';

const Hero: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const unsplashClientId = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    const theme = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);

    // Roles to cycle through in typing animation
    const roles = ["Full-Stack Developer", "React Developer", "Software Engineer", "Web Developer", "Problem Solver"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    const unsplashQuery = "forest";

    useEffect(() => {
        // Fetch a random image
        fetch(`https://api.unsplash.com/photos/random?query=${unsplashQuery}&orientation=landscape&client_id=${unsplashClientId}`)
            .then(response => response.json())
            .then(data => {
                // Set the image URL as the background
                setBackgroundImage(data.urls.regular);
                const img = new Image();
                img.src = data.urls.regular;
                img.onload = () => setIsLoaded(true);
            })
            .catch(error => {
                console.error('Error fetching Unsplash image:', error);
                setBackgroundImage(FallbackHeroImage);
                setIsLoaded(true);
            });
    }, [unsplashClientId]);

    // Typing animation effect
    useEffect(() => {
        const currentRole = roles[roleIndex];

        if (isTyping) {
            if (charIndex < currentRole.length) {
                const timer = setTimeout(() => {
                    setDisplayedRole(prev => prev + currentRole[charIndex]);
                    setCharIndex(charIndex + 1);
                }, 100); // Typing speed

                return () => clearTimeout(timer);
            } else {
                setIsTyping(false);
                const timer = setTimeout(() => {
                    setIsTyping(false);
                }, 2000); // Pause at the end

                return () => clearTimeout(timer);
            }
        } else {
            if (charIndex > 0) {
                const timer = setTimeout(() => {
                    setDisplayedRole(prev => prev.slice(0, -1));
                    setCharIndex(charIndex - 1);
                }, 50); // Deletion speed

                return () => clearTimeout(timer);
            } else {
                setIsTyping(true);
                setRoleIndex((roleIndex + 1) % roles.length);

                return undefined;
            }
        }
    }, [charIndex, isTyping, roleIndex, roles]);

    // Scroll to projects section
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: isLoaded ? `url(${backgroundImage || FallbackHeroImage})` : 'none',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 1s ease, transform 1s ease',
                opacity: isLoaded ? 1 : 0.3,
                borderRadius: 0
            }}
        >
            {/* Background overlay */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                background: `linear-gradient(to bottom, 
                    ${alpha('#000', 0.6)}, 
                    ${alpha(theme.palette.primary.dark, 0.4)})`,
                zIndex: 0
            }} />

            {/* Animated particles */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                    zIndex: 1,
                    opacity: 0.4
                }}
            >
                {[...Array(20)].map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'absolute',
                            width: Math.random() * 8 + 2,
                            height: Math.random() * 8 + 2,
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                            opacity: Math.random() * 0.5 + 0.3,
                            '@keyframes float': {
                                '0%': { transform: 'translateY(0) translateX(0)' },
                                '50%': { transform: `translateY(${Math.random() * 100 - 50}px) translateX(${Math.random() * 100 - 50}px)` },
                                '100%': { transform: 'translateY(0) translateX(0)' }
                            }
                        }}
                    />
                ))}
            </Box>

            {/* Content */}
            <Container sx={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
                <AnimatedElement type="fade" duration={1000} delay={500}>
                    <Typography
                        component="h1"
                        variant="h2"
                        color="inherit"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            mb: 3
                        }}
                    >
                        Hello, I'm Spencer Hobert
                    </Typography>
                </AnimatedElement>

                <AnimatedElement type="slide" slideDirection="up" duration={800} delay={800}>
                    <Box sx={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
                        <Typography
                            variant="h4"
                            color="inherit"
                            component="p"
                            sx={{
                                position: 'relative',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                                '&::after': {
                                    content: '"|"',
                                    animation: 'blink 1s step-end infinite'
                                },
                                '@keyframes blink': {
                                    'from, to': { opacity: 1 },
                                    '50%': { opacity: 0 }
                                }
                            }}
                        >
                            {displayedRole}
                        </Typography>
                    </Box>
                </AnimatedElement>

                <AnimatedElement type="fade" duration={800} delay={1200}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={scrollToProjects}
                        endIcon={<ArrowDownIcon />}
                        sx={{
                            mt: 3,
                            fontSize: '1.1rem',
                            py: 1.5,
                            px: 4,
                            borderRadius: '30px',
                            background: 'linear-gradient(45deg, #4caf50, #1b5e20)',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 12px 20px rgba(0,0,0,0.4)',
                                background: 'linear-gradient(45deg, #4caf50, #2e7d32)'
                            }
                        }}
                    >
                        View My Work
                    </Button>
                </AnimatedElement>
            </Container>
        </Paper>
    );
};

export default Hero;