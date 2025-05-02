import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    Chip,
    CardActions,
    Collapse,
    IconButton,
    useTheme
} from '@mui/material';
import {
    GitHub as GitHubIcon,
    ExpandMore as ExpandMoreIcon,
    Code as CodeIcon,
    CalendarToday as CalendarIcon,
    Build as BuildIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    date: string;
    skills: string;
    codeText?: string;
    codeUrl?: string;
    codeText2?: string;
    codeUrl2?: string;
}

const ExpandMoreButton = styled((props: {
    expand: boolean;
    onClick: () => void;
    'aria-expanded': boolean;
    'aria-label': string;
    children?: React.ReactNode;
    sx?: any;
}) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    date,
    skills,
    codeText = "GitHub",
    codeUrl,
    codeText2,
    codeUrl2
}) => {
    const [expanded, setExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const theme = useTheme();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // Split skills string into array for chips
    const skillsArray = skills.split('•').map(skill => skill.trim()).filter(skill => skill !== '');

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '100%',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transform: isHovered ? 'translateY(-12px)' : 'none',
                boxShadow: isHovered
                    ? '0 20px 30px rgba(0, 0, 0, 0.2)'
                    : '0 6px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={image}
                    alt={title}
                    sx={{
                        objectFit: "cover",
                        objectPosition: "top",
                        width: "100%",
                        transition: 'transform 0.6s ease',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <CalendarIcon fontSize="small" />
                    <Typography variant="caption">
                        {date}
                    </Typography>
                </Box>
            </Box>

            <CardContent sx={{
                flexGrow: 1,
                textAlign: "center",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 3
            }}>
                <Box>
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            position: 'relative',
                            display: 'inline-block',
                            mb: 2
                        }}
                    >
                        {title}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: -5,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '40%',
                                height: '3px',
                                background: theme.palette.mode === 'dark'
                                    ? 'linear-gradient(to right, #4caf50, #1b5e20)'
                                    : 'linear-gradient(to right, #1b5e20, #4caf50)',
                                borderRadius: '3px',
                                transition: 'width 0.3s ease',
                                '&:hover': {
                                    width: '60%'
                                }
                            }}
                        />
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {expanded ? description : `${description.substring(0, 100)}${description.length > 100 ? '...' : ''}`}
                    </Typography>
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <BuildIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="subtitle2" color="primary">Skills</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {skillsArray.slice(0, expanded ? skillsArray.length : 3).map((skill, index) => (
                            <Chip
                                key={index}
                                label={skill}
                                size="small"
                                color="primary"
                                variant={index % 2 === 0 ? "filled" : "outlined"}
                            />
                        ))}
                        {!expanded && skillsArray.length > 3 && (
                            <Chip
                                label={`+${skillsArray.length - 3} more`}
                                size="small"
                                variant="outlined"
                                onClick={handleExpandClick}
                            />
                        )}
                    </Box>
                </Box>
            </CardContent>

            <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {codeUrl && (
                        <Button
                            size="small"
                            startIcon={<GitHubIcon />}
                            href={codeUrl}
                            target="_blank"
                            variant="contained"
                            color="primary"
                            sx={{
                                borderRadius: '20px',
                                boxShadow: 'none',
                                '&:hover': {
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                }
                            }}
                        >
                            {codeText}
                        </Button>
                    )}
                    {codeUrl2 && (
                        <Button
                            size="small"
                            startIcon={<CodeIcon />}
                            href={codeUrl2}
                            target="_blank"
                            variant="outlined"
                            color="primary"
                            sx={{ borderRadius: '20px' }}
                        >
                            {codeText2}
                        </Button>
                    )}
                </Box>

                <ExpandMoreButton
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        }
                    }}
                >
                    <ExpandMoreIcon />
                </ExpandMoreButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {description}
                    </Typography>
                    {skillsArray.length > 3 && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                            {skillsArray.map((skill, index) => (
                                <Chip
                                    key={index}
                                    label={skill}
                                    size="small"
                                    color="primary"
                                    variant={index % 2 === 0 ? "filled" : "outlined"}
                                />
                            ))}
                        </Box>
                    )}
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ProjectCard;