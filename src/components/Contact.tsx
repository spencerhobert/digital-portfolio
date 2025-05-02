import React from 'react';
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    useTheme,
    alpha
} from '@mui/material';
import {
    Email as EmailIcon,
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon
} from '@mui/icons-material';
import AnimatedElement from './AnimatedElement';

interface ContactOption {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
    useTarget: boolean;
}

const Contact: React.FC = () => {
    const theme = useTheme();

    const contactOptions: ContactOption[] = [
        {
            icon: LinkedInIcon,
            title: 'LinkedIn',
            description: 'Connect with me professionally',
            href: 'https://www.linkedin.com/in/spencer-hobert/',
            useTarget: true
        },
        {
            icon: EmailIcon,
            title: 'Email',
            description: 'Get in touch directly',
            href: 'mailto:spencerhobert@gmail.com',
            useTarget: false
        },
        {
            icon: GitHubIcon,
            title: 'GitHub',
            description: 'Check out my code',
            href: 'https://github.com/spencerhobert',
            useTarget: true
        }
    ];

    return (
        <Box id="contact" sx={{
            py: 8,
            background: theme.palette.mode === 'dark'
                ? 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3))'
                : 'linear-gradient(rgba(76, 175, 80, 0.05), rgba(76, 175, 80, 0.1))'
        }}>
            <Container maxWidth="lg">
                <AnimatedElement type="fade" duration={800}>
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        sx={{
                            mb: 6,
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                display: 'block',
                                width: '80px',
                                height: '4px',
                                backgroundColor: 'primary.main',
                                margin: '16px auto',
                                borderRadius: '2px'
                            }
                        }}
                    >
                        Get In Touch
                    </Typography>
                </AnimatedElement>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    gap: 4,
                    mb: 4
                }}>
                    {contactOptions.map((option, index) => {
                        const Icon = option.icon;

                        return (
                            <AnimatedElement
                                key={index}
                                type="slide"
                                slideDirection="up"
                                delay={index * 200}
                                duration={600}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: '16px',
                                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        boxShadow: theme.palette.mode === 'dark'
                                            ? '0 8px 20px rgba(0,0,0,0.3)'
                                            : '0 8px 20px rgba(0,0,0,0.1)',
                                        '&:hover': {
                                            transform: 'translateY(-12px)',
                                            boxShadow: theme.palette.mode === 'dark'
                                                ? '0 20px 25px rgba(0,0,0,0.4)'
                                                : '0 20px 25px rgba(0,0,0,0.15)',
                                            '& .contact-icon': {
                                                transform: 'scale(1.1) rotate(5deg)',
                                                opacity: 0.9
                                            }
                                        },
                                        '&:before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '5px',
                                            background: 'linear-gradient(to right, #4caf50, #1b5e20)',
                                        },
                                    }}
                                    onClick={() => {
                                        if (option.useTarget) {
                                            window.open(option.href, '_blank', 'noopener,noreferrer');
                                        } else {
                                            window.location.href = option.href;
                                        }
                                    }}
                                >
                                    <CardContent sx={{
                                        textAlign: 'center',
                                        p: 4,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 2
                                    }}>
                                        <Box
                                            className="contact-icon"
                                            sx={{
                                                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                                borderRadius: '50%',
                                                p: 2,
                                                mb: 2,
                                                transition: 'all 0.3s ease',
                                                transform: 'scale(1) rotate(0deg)',
                                            }}
                                        >
                                            <Icon
                                                sx={{
                                                    fontSize: 40,
                                                    color: theme.palette.primary.main
                                                }}
                                            />
                                        </Box>
                                        <Typography variant="h5" component="h3" gutterBottom>
                                            {option.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {option.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </AnimatedElement>
                        );
                    })}
                </Box>

                <AnimatedElement type="fade" delay={600} duration={800}>
                    <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                        I'm always interested in new opportunities and collaborations.
                        Feel free to reach out through any of these channels!
                    </Typography>
                </AnimatedElement>
            </Container>
        </Box>
    );
};

export default Contact;