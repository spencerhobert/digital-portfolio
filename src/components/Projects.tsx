import React from 'react';
import {
    Box,
    Typography,
    Grid
} from '@mui/material';

import ProjectCard from './ProjectCard';
import AcesFrontendPicture from '../assets/images/codeProjects/aces_frontend.png';
import TgtoatPicture from '../assets/images/codeProjects/tgtoat.png';
import ValorantPredictorPicture from '../assets/images/codeProjects/valorantPredictor.png'
import DigitalPortfolioPicture from '../assets/images/codeProjects/portfolio.png'

// Project data
const projectsData = [
    {
        title: 'Anti-Cheat Enforcement System (ACES)',
        description: 'In a team of 6, we developed a Chrome extension that detects code plagiarism in academic environments by using GitHub Classroom integration, creating both a React TypeScript frontend for instructors and a .NET C# backend that identifies unauthorized code sharing through watermark analysis.',
        image: AcesFrontendPicture,
        skills: 'React • TypeScript • C# • .NET • REST API • Critical Thinking • Collaboration',
        codeText: 'Frontend',
        codeUrl: 'https://github.com/PineappleBlaster/ACES-Frontend',
        codeText2: 'Backend',
        codeUrl2: 'https://github.com/PineappleBlaster/ACES-Backend'
    },
    {
        title: 'Learning Management System',
        description: 'Collaborated in a group to create a Canvas-like Learning Management System in ASP.NET MVC with C#, HTML, and CSS, practicing SPRINT methodology to implement features like login, course pages, assignments, a calendar, and Stripe integration for secure payments.',
        image: TgtoatPicture,
        skills: 'C# • ASP.NET MVC • HTML • CSS • SPRINT Methodology',
        codeUrl: 'https://github.com/spencerhobertWSU/TG-TOAT'
    },
    {
        title: 'Machine Learning Model and Web Scraper to Predict Valorant Esports',
        description: 'Developed a Django REST API web scraper and machine learning model to predict Valorant Esport match outcomes, using SQLite for data storage, Pandas for data preparation, and Git for maintainable version control.',
        image: ValorantPredictorPicture,
        skills: 'Python • Pandas • Django • REST API • SQL • Valorant Skillz',
        codeUrl: 'https://github.com/spencerhobert/valorantPredictor'
    },
    {
        title: 'Digital Portfolio',
        description: 'Developed a React TypeScript Website, hosted on Vercel, that displays my coding accomplishments.',
        image: DigitalPortfolioPicture,
        skills: 'React • TypeScript • Vercel • Web Hosting',
        codeUrl: 'https://github.com/spencerhobert/digital-portfolio'
    },
];

const Projects: React.FC = () => {
    return (
        <Grid container spacing={4}>
            {projectsData.map((project, index) => (
                <Grid key={index} sx={{
                    gridColumn: 'span 12',
                    '@media (min-width:600px)': { gridColumn: 'span 6' },
                    '@media (min-width:900px)': { gridColumn: 'span 4' },
                    width: '100%' // This ensures the Grid takes full width
                }}>
                    {/* Make sure the Card has full width */}
                    <Box sx={{ width: '100%', height: '100%' }}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            skills={project.skills}
                            codeText={project.codeText}
                            codeUrl={project.codeUrl}
                            codeText2={project.codeText2}
                            codeUrl2={project.codeUrl2}
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default Projects;