import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    Container,
    Paper,
    useTheme,
    alpha
} from '@mui/material';
import profilePicture from '../assets/images/profile_picture.jpg';
import AnimatedElement from './AnimatedElement';

interface AboutMeParagraphProps {
    body: string,
    delay: number
}

const AboutMeParagraph: React.FC<AboutMeParagraphProps> = ({
    body,
    delay
}) => {
    return (
        <AnimatedElement type="fade" delay={delay} duration={800}>
            <Typography
                variant="body1"
                component="p"
                gutterBottom
                sx={{
                    lineHeight: 1.8,
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: '1.05rem'
                }}
            >
                {body}
            </Typography>
        </AnimatedElement>
    );
}

const About: React.FC = () => {
    const theme = useTheme();

    const aboutMeBodyParagraphs = [
        "I'm currently a Software Engineer Intern at Distributor Data Solutions (DDS), where I get to work with cool tech like AWS, Scala, and Python to build solutions that actually make a difference. I studied Computer Science with a minor in Mathematics at Weber State University.",
        "Tech that solves real problems is what gets me excited. At DDS, I've been deep into Scala development, creating a powerful data-driven sales reporting tool using Scala and Apache Spark. This project has been my main focus, letting me build a system that processes large datasets and generates comprehensive reports that give the Sales team the insights they really need. It's been awesome seeing how the right data visualization can transform decision-making. I've also worked on security improvements, like building an automatic AWS key deactivator that keeps everything secure by monitoring users and dealing with expiring tokens before they become a problem.",
        "Before that, I worked as a Student Technology Assistant at Weber State University, where I set up imaging solutions using SCCM and MDT that made managing the computer labs way more efficient. I'm always down to learn new technologies and love collaborating with different teams to create quality solutions.",
        "When I'm not coding, you can find me playing Valorant as Gekko (currently Silver 1, yeah I'm working on it). Nothing beats unwinding with a few matches after a day of solving tech puzzles!"
    ];

    return (
        <Box id="about" sx={{ py: 8 }}>
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
                        About Me
                    </Typography>
                </AnimatedElement>

                <Paper
                    elevation={theme.palette.mode === 'dark' ? 4 : 2}
                    sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: '20px',
                        background: theme.palette.mode === 'dark'
                            ? alpha(theme.palette.background.paper, 0.8)
                            : alpha(theme.palette.background.paper, 0.8),
                        backdropFilter: 'blur(10px)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '5px',
                            background: 'linear-gradient(90deg, #4caf50, #1b5e20)',
                        }
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            flex: { xs: '1 1 100%', md: '0 0 33.333%' },
                            textAlign: 'center'
                        }}>
                            <AnimatedElement type="zoom" duration={800}>
                                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                                    <Avatar
                                        sx={{
                                            width: 220,
                                            height: 220,
                                            mx: 'auto',
                                            my: 2,
                                            border: `4px solid ${theme.palette.primary.main}`,
                                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                        }}
                                        alt="Spencer Hobert Profile Picture"
                                        src={profilePicture}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            backgroundColor: alpha(theme.palette.primary.main, 0.9),
                                            color: 'white',
                                            padding: '8px 16px',
                                            borderRadius: '0 0 16px 16px',
                                            fontWeight: 'bold',
                                            transform: 'translateY(-10px)'
                                        }}
                                    >
                                        <Typography variant="h6">Spencer Hobert</Typography>
                                        <Typography variant="body2">Software Engineer</Typography>
                                    </Box>
                                </Box>
                            </AnimatedElement>
                        </Box>

                        <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 66.666%' } }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {aboutMeBodyParagraphs.map((body, index) => (
                                    <AboutMeParagraph
                                        key={index}
                                        body={body}
                                        delay={300 + (index * 200)}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default About;