import React from 'react';
import {
    Box,
    Typography
} from '@mui/material';

const Skills: React.FC = () => {
    return (
        <Box
            sx={{
                my: 8,
                textAlign: "center"
            }}>
            <Typography variant="h3" component="h2" gutterBottom>
                Skills
            </Typography>
            <Typography variant="body1" component="p">
                React • TypeScript • Material UI • HTML/CSS • JavaScript • Git • Responsive Design
            </Typography>
        </Box>
    );
};

export default Skills;