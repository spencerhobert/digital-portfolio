import React from 'react';
import {
    Box,
    Container,
    Typography
} from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="body2" align="center" sx={{ color: "text.secondary" }}>
                    © {new Date().getFullYear()} Spencer Hobert's Portfolio. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;