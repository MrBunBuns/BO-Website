import React, { useContext, useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  Box,
  Stack,
  useMediaQuery,
  Drawer,
  IconButton

} from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // Spanish translations
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const translations = { en, es };

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [buttonText, setButtonText] = useState(translations[language].headerBar.supportButton); 
  const [homeButtonText, setHomeButtonText] = useState(translations[language].headerBar.home); 
  const [gettingStartedButtonText, setGettingStartedButtonText] = useState(translations[language].headerBar.gettingStarted); 
  const [aboutButtonText, setAboutButtonText] = useState(translations[language].headerBar.supportButton); 

  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();
  const handleHomeRedirect = () => {
    navigate('/');
    setDrawerOpen(false);
  };
  const handleAboutRedirect = () => {
    navigate('/about');
    setDrawerOpen(false);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleClick = () => {
    setDrawerOpen(false);
    navigate('/getting-started');
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  // On language switch we update button
  useEffect(() => {
    setButtonText(translations[language].headerBar.supportButton);
    setHomeButtonText(translations[language].headerBar.home);
    setGettingStartedButtonText(translations[language].headerBar.gettingStarted);
    setAboutButtonText(translations[language].headerBar.about);
  }, [language]);

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.background.header,
        height: { xs: 'auto', sm: 'auto' },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Stack direction='row'>
        {isMobile ? (
          <Button
          onClick={handleHomeRedirect} 
          sx={{
            textTransform: 'none', 
            fontSize: { xs: '1rem', sm: '1.5rem' },
            color: theme.palette.text.primary
          }}
        >
          <Typography variant="h5" component="div">
            CoDN
          </Typography>
        </Button>
           
          ) : (
             // Mobile menu icon
             <IconButton
             color="inherit"
             edge="start"
             onClick={toggleDrawer(true)}
             sx={{ mr: 2 }}
           >
             <MenuIcon />
             <Typography variant="h5" marginLeft={1} component="div">
               CoDN
            </Typography>
           </IconButton>
          )}
          {isMobile && <Stack direction={'row'}>
            <Button onClick={handleClick} style={{ color: '#fff', marginLeft:'50px', textDecoration: 'none' }}>{gettingStartedButtonText}</Button>
            <Button onClick={handleAboutRedirect} style={{ color: '#fff', marginLeft:'20px', textDecoration: 'none' }}>{aboutButtonText}</Button>
            <Button onClick={handleClick} style={{ color: '#fff', marginLeft:'20px', textDecoration: 'none' }}> {buttonText}</Button>
          </Stack>}
        </Stack> 
        
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}>
          <FormControl>
            <Select
              value={language}
              onChange={handleLanguageChange}
              IconComponent={ArrowDropDownIcon}
              sx={{
                
                color: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '.MuiSelect-icon': {
                  color: 'white',
                },
                '&:focus-visible': {
                  outline: 'none',
                },
              }}
            >
              <MenuItem value="en" sx={{ color: 'black' }}>English</MenuItem>
              <MenuItem value="es" sx={{ color: 'black' }}>Español</MenuItem>
            </Select>
          </FormControl>

        </Box>
      </Toolbar>
      {/* Drawer for mobile menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
          role="presentation"
        >
          <Button onClick={handleHomeRedirect} sx={{ textAlign: 'left', color: theme.palette.text.primary, marginBottom: '10px' }}>
            {homeButtonText}
          </Button>
          <Button onClick={handleClick} sx={{ textAlign: 'left', color: theme.palette.text.primary, marginBottom: '10px' }}>
            Getting Started
          </Button>
          <Button onClick={handleAboutRedirect} sx={{ textAlign: 'left', color: theme.palette.text.primary, marginBottom: '10px' }}>
            About
          </Button>
          <Button
            color="inherit"
            onClick={() => alert('Contact button clicked!')}
            sx={{ textAlign: 'left', color: theme.palette.text.primary, marginBottom: '10px' }}
          >
            {buttonText}
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
