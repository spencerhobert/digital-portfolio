import React from 'react';
import {
    Box,
    Typography,
    Avatar
} from '@mui/material';

const About: React.FC = () => {
    return (
        <Box
            sx={{
                my: 8,
                textAlign: "center"
            }}>
            <Typography variant="h3" component="h2" gutterBottom>
                About Me
            </Typography>
            <Avatar
                sx={{ width: 150, height: 150, mx: 'auto', my: 2 }}
                alt="Your Name"
                src="https://source.unsplash.com/random?portrait"
            />
            <Typography variant="body1" component="p">
                As a Software Engineer Intern at Distributor Data Solutions (DDS),
                I leverage my skills in AWS, Scala, and Python to develop innovative solutions that support business operations.
                I have a strong background in computer science and mathematics, with a Bachelor of Science from Weber State University and a Bachelor's degree from Southern Utah University.
                I am passionate about creating impactful technology that enhances operational efficiency and user experience.
                In my current role, I have developed an automated AWS key deactivator that monitors IAM users and proactively deactivates tokens approaching expiration, improving security compliance.
                I have also led the development of a data-driven sales reporting tool using Scala and Apache Spark that generates comprehensive reports for the Sales team.
                Additionally, I have experience as a Student Technology Assistant at Weber State University,
                where I spearheaded the creation and deployment of imaging solutions using SCCM and MDT, resulting in enhanced operational efficiency across multiple labs.
                I am always eager to learn new technologies and collaborate with diverse teams to deliver high-quality solutions.
            </Typography>
        </Box>
    );
};

export default About;