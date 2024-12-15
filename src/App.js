import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
  Box,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GettingStarted from './pages/GettingStarted';

// Custom theme
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

  const [language, setLanguage] = useState('en'); // State to manage language selection

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // You can add logic here to update the language of the app (i.e., use a context or translation library)
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{
            display: 'flex',
            backgroundColor: theme.palette.background.default,
            minHeight: '100vh',
            color: '#ffffff',
            [theme.breakpoints.down('sm')]: {
              width:'100%'
            },
          }}
        >
          <Stack width="100%" alignItems={'center'}>
            {/* Header */}
            <AppBar
              sx={{
                backgroundColor: '#0d0d0d',
                padding: { xs: '20px', sm: '10px' }, // Increase padding on small screens
                [theme.breakpoints.down('sm')]: {
                  height: '100px', // Make AppBar taller on mobile
                },
              }}
            >
              <Toolbar>
                <Typography
                  variant="h5" // Make the text larger on smaller screens
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: { xs: '1rem', sm: '1.5rem' }, // Increase font size on mobile
                  }}
                >
                  CoD Nintendo
                </Typography>
                 {/* Dropdown Menu for Language */}
                 <FormControl >
                  <InputLabel id="language-select-label">Language</InputLabel>
                  <Select
                    labelId="language-select-label"
                    value={language}
                    label="Language"
                    onChange={handleLanguageChange}
                    sx={{ color: 'white', }}
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  color="inherit"
                  onClick={() => alert('Contact button clicked!')}
                  sx={{ ml: 'auto' }}
                >
                  Need Support?
                </Button>
              </Toolbar>
            </AppBar>

            {/* Main Layout */}
            <Stack height="100%" width={'100%'} direction="row">
              {/* Main content */}
              <Box sx={{ flexGrow: 1, minWidth:'100px', display: 'flex', flexDirection: 'column', width:'90%' }}>
                {/* Routing Configuration */}
                <Box sx={{ p: 3 }}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/getting-started" element={<GettingStarted language={language} />} />
                  </Routes>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
