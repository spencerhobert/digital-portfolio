import React from 'react';
import {
    Box,
    Typography,
    Container,
    Card,
    CardContent,
    useTheme
} from '@mui/material';
import {
    Code as CodeIcon,
    Storage as DatabaseIcon,
    DeveloperMode as FrameworkIcon,
    People as TeamworkIcon,
    Speed as PerformanceIcon
} from '@mui/icons-material';
import AnimatedElement from './AnimatedElement';

interface SkillCategory {
    title: string;
    icon: React.ReactElement;
    skills: string[];
}

const Skills: React.FC = () => {
    const theme = useTheme();

    const skillCategories: SkillCategory[] = [
        {
            title: 'Languages',
            icon: <CodeIcon fontSize="large" color="primary" />,
            skills: ['C#', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL', 'Scala']
        },
        {
            title: 'Frameworks',
            icon: <FrameworkIcon fontSize="large" color="primary" />,
            skills: ['React', '.NET', 'ASP.NET MVC', 'Django']
        },
        {
            title: 'Data & API',
            icon: <DatabaseIcon fontSize="large" color="primary" />,
            skills: ['REST API', 'Pandas', 'SQL', 'AWS DynamoDB', 'AWS S3']
        },
        {
            title: 'Methodologies',
            icon: <TeamworkIcon fontSize="large" color="primary" />,
            skills: ['Teamwork', 'SPRINT Methodology', 'Git', 'Technical Documentation']
        },
        {
            title: 'Performance',
            icon: <PerformanceIcon fontSize="large" color="primary" />,
            skills: ['Apache Spark', 'Data Pipeline', 'Web Hosting', 'AWS EMR Serverless']
        }
    ];

    // Function to create a random delay between min and max
    const randomDelay = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return (
        <Box id="skills" sx={{ py: 8, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(76, 175, 80, 0.05)' }}>
            <Container maxWidth="lg">
                <AnimatedElement type="fade" duration={800}>
                    <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
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
                        My Skills
                    </Typography>
                </AnimatedElement>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>
                    {skillCategories.map((category, catIndex) => (
                        <Box key={catIndex}>
                            <AnimatedElement
                                type="slide"
                                slideDirection={catIndex % 2 === 0 ? "right" : "left"}
                                delay={catIndex * 150}
                                duration={600}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: '16px',
                                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 16px 24px rgba(0,0,0,0.15)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                                            {category.icon}
                                            <Typography variant="h5" component="h3" sx={{ mt: 1, fontWeight: 'bold' }}>
                                                {category.title}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
                                            {category.skills.map((skill, skillIndex) => (
                                                <Box key={skillIndex}>
                                                    <AnimatedElement
                                                        type="fade"
                                                        delay={randomDelay(200, 800)}
                                                        duration={400}
                                                    >
                                                        <Box
                                                            sx={{
                                                                backgroundColor: theme.palette.mode === 'dark'
                                                                    ? 'rgba(76, 175, 80, 0.1)'
                                                                    : 'rgba(76, 175, 80, 0.1)',
                                                                p: 1,
                                                                textAlign: 'center',
                                                                borderRadius: '8px',
                                                                transition: 'all 0.3s ease',
                                                                border: `1px solid ${theme.palette.mode === 'dark'
                                                                    ? 'rgba(76, 175, 80, 0.3)'
                                                                    : 'rgba(76, 175, 80, 0.3)'}`,
                                                                '&:hover': {
                                                                    backgroundColor: theme.palette.mode === 'dark'
                                                                        ? 'rgba(76, 175, 80, 0.2)'
                                                                        : 'rgba(76, 175, 80, 0.2)',
                                                                    transform: 'scale(1.05)'
                                                                }
                                                            }}
                                                        >
                                                            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                                {skill}
                                                            </Typography>
                                                        </Box>
                                                    </AnimatedElement>
                                                </Box>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </AnimatedElement>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Skills;