import { Box, Container } from '@mui/material';
import { ThemeProvider } from './themes/ThemeContext';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <ThemeProvider>
      <Header />

      {/* Main content with colored sides */}
      <Box component="main" className="theme-transition" sx={{
        display: 'flex',
        bgcolor: 'background.sidebar',
        minHeight: '100vh',
      }}>
        {/* Left colored padding */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Center content area */}
        <Container
          maxWidth="lg"
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 'var(--shadow-medium)',
            position: 'relative',
            zIndex: 1,
            borderRadius: { xs: 0, md: '8px 8px 0 0' },
            marginTop: { xs: 0, md: 2 },
            overflow: 'hidden',
            p: 0
          }}
        >
          <Hero />

          <Box component="section" id="main-content">
            <Projects />
            <Skills />
            <About />
            <Contact />
          </Box>

          <Footer />
        </Container>

        {/* Right colored padding */}
        <Box sx={{ flexGrow: 1 }} />
      </Box>

      {/* Vercel Analytics */}
      <Analytics />
    </ThemeProvider>
  );
}

export default App;