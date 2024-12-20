import React from 'react';
import { ThemeProvider, createTheme, Box, Stack } from '@mui/material';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/HeaderBar';
import HomePage from './pages/HomePage';
import GettingStarted from './pages/GettingStarted';
import AboutPage from './pages/AboutPage';
import { useLayoutEffect } from 'react';
import FAQPage from './pages/FAQPage';

const theme = createTheme({
  palette: {
    background: {
      default: '#262626',
      header: '#1a1a1a',
      dark: '#4d4d4d',
      primary : '#1976d2',
      alternate: '#333333'
    },
    text: {
      primary: '#ffffff',
      secondary: '#b9bbbe',
    },
  },
});

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Router>
          <Box
            sx={{
              display: 'flex',
              backgroundColor: theme.palette.background.default,
              minHeight: '100vh',
              color: '#ffffff',
            }}
          >
            <Stack width="100%" alignItems="center">
              {/* Header */}
              <Header />
              {/* Main Content */}
              <Stack height="100%" width="100%" marginTop={8} direction="row">
                <Box
                  sx={{
                    flexGrow: 1,
                    minWidth: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '90%',
                  }}
                >
                  <Box sx={{ p: 3 }}>
                    <Wrapper>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/getting-started" element={<GettingStarted />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/FAQ" element={<FAQPage />} />
                      </Routes>
                    </Wrapper>
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
