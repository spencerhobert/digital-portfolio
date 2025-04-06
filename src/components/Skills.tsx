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
                C# • TypeScript • Python • HTML • CSS • SQL • React • .NET • ASP.NET MVC • REST API • Django • Pandas • Collaboration • SPRINT Methodology
            </Typography>
        </Box>
    );
};

export default Skills;