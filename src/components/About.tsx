import React from 'react';
import {
    Box,
    Typography,
    Avatar
} from '@mui/material';
import profilePicture from '../assets/images/profile_picture.jpg';

interface AboutMeParagraphProps {
    body: string,
    isBottom?: boolean
}

const AboutMeParagraph: React.FC<AboutMeParagraphProps> = ({
    body,
    isBottom
}) => {
    return (
        <Typography
            variant="body1"
            component="p"
            sx={{ maxWidth: 600 }}
            gutterBottom={isBottom}
        >
            {body}
        </Typography>
    );
}

const About: React.FC = () => {
    const aboutMeBodyParagraphs = [
        "I'm currently a Software Engineer Intern at Distributor Data Solutions (DDS), where I get to work with cool tech like AWS, Scala, and Python to build solutions that actually make a difference. I studied Computer Science with a minor in Mathematics at Weber State University.",
        "Tech that solves real problems is what gets me excited. At DDS, I've been deep into Scala development, creating a powerful data-driven sales reporting tool using Scala and Apache Spark. This project has been my main focus, letting me build a system that processes large datasets and generates comprehensive reports that give the Sales team the insights they really need. It's been awesome seeing how the right data visualization can transform decision-making. I've also worked on security improvements, like building an automatic AWS key deactivator that keeps everything secure by monitoring users and dealing with expiring tokens before they become a problem.",
        "Before that, I worked as a Student Technology Assistant at Weber State University, where I set up imaging solutions using SCCM and MDT that made managing the computer labs way more efficient. I'm always down to learn new technologies and love collaborating with different teams to create quality solutions.",
        "When I'm not coding, you can find me playing Valorant as Gekko (currently Silver 1, yeah I'm working on it). Nothing beats unwinding with a few matches after a day of solving tech puzzles!"
    ];
    const aboutMeToHtml = aboutMeBodyParagraphs.map((body, index) =>
        <AboutMeParagraph
            key={index}
            body={body}
            isBottom={!(index == aboutMeBodyParagraphs.length - 1)}
        />
    );

    return (
        <Box
            sx={{
                textAlign: "center"
            }}>
            <Typography variant="h3" component="h2" gutterBottom>
                About Me
            </Typography>
            <Avatar
                sx={{ width: 150, height: 150, mx: 'auto', my: 2 }}
                alt="Spencer Hobert Profile Picture"
                src={profilePicture}
                variant='rounded'
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                {aboutMeToHtml}
            </Box>
        </Box>
    );
};

export default About;