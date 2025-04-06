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
    image: string;
    skills: string;
    codeText?: string;
    codeUrl?: string;
    codeText2?: string;
    codeUrl2?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    skills,
    codeText = "GitHub",
    codeUrl,
    codeText2,
    codeUrl2
}) => {
    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '100%'
        }}>
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt={title}
                sx={{
                    objectFit: "cover",
                    objectPosition: "top",
                    width: "100%"
                }}
            />
            <CardContent sx={{
                flexGrow: 1,
                textAlign: "center",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography gutterBottom>
                        {description}
                    </Typography>
                    <Typography>
                        {skills}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        p: 2,
                        pb: 0,
                        mt: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2
                    }}>
                    {codeUrl && (
                        <Button size="small" startIcon={<GitHubIcon />} href={codeUrl} target="_blank">
                            {codeText}
                        </Button>
                    )}
                    {codeUrl2 && (
                        <Button size="small" startIcon={<GitHubIcon />} href={codeUrl2} target="_blank">
                            {codeText2}
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;