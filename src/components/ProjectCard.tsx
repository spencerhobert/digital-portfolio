import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box
} from '@mui/material';
import { GitHub as GitHubIcon } from '@mui/icons-material';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    codeUrl?: string;
    demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    imageUrl,
    codeUrl,
    demoUrl
}) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
            <Box
                sx={{
                    p: 2,
                    pt: 0
                }}>
                {codeUrl && (
                    <Button size="small" startIcon={<GitHubIcon />} href={codeUrl} target="_blank">
                        Code
                    </Button>
                )}
                {demoUrl && (
                    <Button size="small" color="primary" href={demoUrl} target="_blank">
                        Demo
                    </Button>
                )}
            </Box>
        </Card>
    );
};

export default ProjectCard;