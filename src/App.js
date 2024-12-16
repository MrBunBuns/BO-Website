import React from 'react';
import { ThemeProvider, createTheme, Box, Stack } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/HeaderBar';
import HomePage from './pages/HomePage';
import GettingStarted from './pages/GettingStarted';

const theme = createTheme({
  palette: {
    background: {
      default: '#262626',
    },
    text: {
      primary: '#aaaaaa',
      secondary: '#b9bbbe',
    },
  },
});

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
            <Stack width="100%" alignItems={'center'}>
              {/* Header */}
              <Header />
              {/* Main Content */}
              <Stack height="100%" width={'100%'} direction="row">
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
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/getting-started" element={<GettingStarted />} />
                    </Routes>
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
