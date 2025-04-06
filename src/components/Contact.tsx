import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import {
    Email as EmailIcon,
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon
} from '@mui/icons-material';
import ContactButton from './ContactButton';

const Contact: React.FC = () => {
    return (
        <Box
            sx={{
                my: 8,
                textAlign: "center"
            }}>
            <Typography variant="h3" component="h2" gutterBottom>
                Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
                <ContactButton
                    icon={LinkedInIcon}
                    href="https://www.linkedin.com/in/spencer-hobert/"
                    useTarget={true}
                    text="LinkedIn"
                />
                <ContactButton
                    icon={EmailIcon}
                    href="mailto:spencerhobert@gmail.com"
                    useTarget={false}
                    text="Email"
                />
                <ContactButton
                    icon={GitHubIcon}
                    href="https://github.com/spencerhobert"
                    useTarget={true}
                    text="GitHub"
                />
            </Box>
        </Box>
    );
};

export default Contact;