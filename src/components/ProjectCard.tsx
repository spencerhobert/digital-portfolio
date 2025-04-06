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
    codeText?: string;
    codeUrl?: string;
    codeText2?: string;
    codeUrl2?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    codeText = "Code",
    codeUrl,
    codeText2,
    codeUrl2
}) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt={title}
                sx={{ objectFit: "cover", objectPosition: "top" }}
            />
            <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <Box
                    sx={{
                        p: 2,
                        pb: 0
                    }}>
                    {codeUrl && (
                        <Button size="small" startIcon={<GitHubIcon />} href={codeUrl} target="_blank">
                            {codeText}
                        </Button>
                    )}
                    {codeUrl2 && (
                        <Button size="small" startIcon={<GitHubIcon />} href={codeUrl2} target="_blank" sx={{ pl: 5 }}>
                            {codeText2}
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;