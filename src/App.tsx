import { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box
} from '@mui/material';
// Extend the theme interfaces to include our custom property
declare module '@mui/material/styles' {
  interface TypeBackground {
    sidebar?: string;
  }
}
// Import components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // State for theme toggle
  const [darkMode, setDarkMode] = useState(false);

  // Create a theme instance
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4caf50',
      },
      secondary: {
        main: '#1b5e20',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
        sidebar: darkMode ? '#0a0a0a' : '#e0e0e0',
      },
      error: {
        main: '#b71c1c',
      },
      success: {
        main: '#1b5e20',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      {/* Main content with colored sides */}
      <Box sx={{
        display: 'flex',
        bgcolor: 'background.sidebar',
        minHeight: '100vh' // Adjust based on your header height
      }}>
        {/* Left colored padding */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Center content area */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            width: '100%',
            maxWidth: 'lg',
            // Enhanced shadow effect
            boxShadow: darkMode
              ? '0px 0px 20px rgba(0, 0, 0, 0.7), 0px 0px 40px rgba(0, 0, 0, 0.4)'
              : '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 8px 30px rgba(0, 0, 0, 0.05)',
            position: 'relative',
            zIndex: 1, // Ensures shadow appears above the background
            borderRadius: { xs: 0, md: '8px 8px 0 0' }, // Rounded top corners on medium+ screens
            marginTop: { xs: 0, md: 2 }, // Add some space at the top on medium+ screens
            overflow: 'hidden' // Ensures content respects border radius
          }}
        >
          <Hero />
          <Box sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <Projects />
            <Skills />
            <About />
            <Contact />
          </Box>
          <Footer />
        </Box>

        {/* Right colored padding */}
        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </ThemeProvider>
  );
}

export default App;