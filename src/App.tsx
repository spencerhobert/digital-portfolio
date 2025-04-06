import { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container
} from '@mui/material';

// Import components
import Header from './components/Header';
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
      error: {
        main: '#b71c1c',
      },
      success: {
        main: '#1b5e20',
      },
    },
  });

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Container maxWidth="lg">
        <Projects />
        <Skills />
        <About />
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;