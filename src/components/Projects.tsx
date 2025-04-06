import React from 'react';
import {
    Box,
    Typography,
    Grid
} from '@mui/material';
import ProjectCard from './ProjectCard';

// Sample project data - in a real app, you might fetch this from an API or CMS
const projectsData = [
    {
        id: 1,
        title: 'Project 1',
        description: 'A brief description of your first project. Highlight the technologies used and your role.',
        imageUrl: 'https://source.unsplash.com/random?website',
        codeUrl: 'https://github.com',
        demoUrl: 'https://example.com'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'A brief description of your second project. Highlight the technologies used and your role.',
        imageUrl: 'https://source.unsplash.com/random?app',
        codeUrl: 'https://github.com',
        demoUrl: 'https://example.com'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'A brief description of your third project. Highlight the technologies used and your role.',
        imageUrl: 'https://source.unsplash.com/random?programming',
        codeUrl: 'https://github.com',
        demoUrl: 'https://example.com'
    }
];

const Projects: React.FC = () => {
    return (
        <Box sx={{ my: 8 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: "center" }}>
                My Projects
            </Typography>
            <Grid container spacing={4}>
                {projectsData.map(project => 
                    <Grid key={project.id} sx={{ gridColumn: 'span 12', '@media (min-width:600px)': { gridColumn: 'span 6' }, '@media (min-width:900px)': { gridColumn: 'span 4' } }}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            codeUrl={project.codeUrl}
                            demoUrl={project.demoUrl}
                        />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default Projects;