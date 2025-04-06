import React, { useState, useEffect } from 'react';
import {
    Paper,
    Box,
    Container,
    Typography,
} from '@mui/material';
import FallbackHeroImage from "../assets/images/fallback_hero.jpg";

const Hero: React.FC = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const unsplashClientId = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

    const unsplashQuery = "trees"
    
    useEffect(() => {
        // Fetch a random image
        fetch(`https://api.unsplash.com/photos/random?query=${unsplashQuery}&orientation=landscape&client_id=${unsplashClientId}`)
            .then(response => response.json())
            .then(data => {
                // Set the image URL as the background
                setBackgroundImage(data.urls.regular);
            })
            .catch(error => {
                console.error('Error fetching Unsplash image:', error);
                setBackgroundImage(FallbackHeroImage);
            });
    }, [unsplashClientId]);

    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: (`url(${backgroundImage})` || FallbackHeroImage),
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)'
            }} />
            <Container sx={{ position: 'relative', textAlign: 'center' }}>
                <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                    Hello, I'm Spencer Hobert
                </Typography>
                <Typography variant="h5" color="inherit" component="p">
                    Full-Stack Developer
                </Typography>
            </Container>
        </Paper>
    );
};

export default Hero;