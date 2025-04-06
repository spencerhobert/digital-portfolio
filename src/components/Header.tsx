import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@mui/material';
import {
    Brightness4 as DarkModeIcon,
    Brightness7 as LightModeIcon
} from '@mui/icons-material';

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
    return (
        <AppBar position="static" color="primary" elevation={0}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Spencer Hobert's Portfolio
                </Typography>
                <Button
                    color="inherit"
                    onClick={toggleDarkMode}
                    startIcon={darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                >
                    {darkMode ? 'Light' : 'Dark'} Mode
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;