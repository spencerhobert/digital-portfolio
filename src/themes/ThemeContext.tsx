import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, Theme, PaletteMode } from '@mui/material';

// Extend the theme interfaces to include our custom property
declare module '@mui/material/styles' {
    interface TypeBackground {
        sidebar?: string;
    }
}

type ThemeContextType = {
    mode: PaletteMode;
    toggleColorMode: () => void;
    theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    toggleColorMode: () => { },
    theme: createTheme(),
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Check for stored preference or use system preference
    const getInitialMode = (): PaletteMode => {
        const savedMode = localStorage.getItem('themeMode');
        if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
            return savedMode;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    };

    const [mode, setMode] = useState<PaletteMode>(getInitialMode);

    useEffect(() => {
        localStorage.setItem('themeMode', mode);
    }, [mode]);

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const getLightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#4caf50',
                light: '#80e27e',
                dark: '#087f23',
            },
            secondary: {
                main: '#1b5e20',
                light: '#4c8c4a',
                dark: '#003300',
            },
            background: {
                default: '#f5f5f5',
                paper: '#ffffff',
                sidebar: '#e0e0e0',
            },
            error: {
                main: '#b71c1c',
            },
            success: {
                main: '#1b5e20',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
                        }
                    }
                }
            }
        }
    });

    const getDarkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#4caf50',
                light: '#80e27e',
                dark: '#087f23',
            },
            secondary: {
                main: '#81c784',
                light: '#b2fab4',
                dark: '#519657',
            },
            background: {
                default: '#121212',
                paper: '#1e1e1e',
                sidebar: '#0a0a0a',
            },
            error: {
                main: '#f44336',
            },
            success: {
                main: '#81c784',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 8px rgba(76, 175, 80, 0.2)',
                        },
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 12px 20px rgba(76, 175, 80, 0.15)'
                        }
                    }
                }
            }
        }
    });

    const theme = mode === 'light' ? getLightTheme : getDarkTheme;

    return (
        <ThemeContext.Provider value={{ mode, toggleColorMode, theme }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};