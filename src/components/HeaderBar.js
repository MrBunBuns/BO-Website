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
  IconButton,
} from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // Spanish translations
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const translations = { en, es };

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [buttonTexts, setButtonTexts] = useState({
    supportButton: translations[language].headerBar.supportButton,
    home: translations[language].headerBar.home,
    gettingStarted: translations[language].headerBar.gettingStarted,
    about: translations[language].headerBar.about,
  });

  const theme = useTheme();
  const isNotMobile = !useMediaQuery(theme.breakpoints.down('sm') || theme.breakpoints.down('xs'));

  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    setButtonTexts({
      supportButton: translations[language].headerBar.supportButton,
      home: translations[language].headerBar.home,
      gettingStarted: translations[language].headerBar.gettingStarted,
      about: translations[language].headerBar.about,
      faq: translations[language].headerBar.faq,

    });
  }, [language]);

  // Button configurations
  const buttons = [
    { text: buttonTexts.home, action: () => navigate('/') },
    { text: buttonTexts.gettingStarted, action: () => navigate('/getting-started') },
   // { text: buttonTexts.about, action: () => navigate('/about') }, Disabling about for now
    { text: buttonTexts.faq, action: () => navigate('/faq') },
    {
      text: buttonTexts.supportButton,
      action: () => window.open('https://discord.gg/gXsgTUWquc', '_blank', 'noopener,noreferrer'),
      icon: <FontAwesomeIcon icon={faDiscord} />,
    },
  ];

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.background.header,
        height: { xs: 'auto', sm: 'auto' },
      }}
    >
      <Toolbar
        sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
      >
        <Stack direction="row">
          {isNotMobile ? (
            <Button
              onClick={() => navigate('/')}
              sx={{
                textTransform: 'none',
                fontSize: { xs: '1rem', sm: '1.5rem' },
                color: theme.palette.text.primary,
              }}
            >
              <Typography variant="h5" component="div">
                CoDN
              </Typography>
            </Button>
          ) : (
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
          {isNotMobile && (
            <Stack direction="row" spacing={2} sx={{ marginLeft: '50px' }}>
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  onClick={button.action}             
                  startIcon={button.icon || null}
                  sx={{ color: '#fff', textDecoration: 'none' }}
                >
                  {button.text}
                </Button>
              ))}
            </Stack>
          )}
        </Stack>

        <Box
          sx={{ display: 'flex', alignItems: 'center', marginRight: '24px' }}
        >
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
              <MenuItem value="en" sx={{ color: 'black' }}>
                English
              </MenuItem>
              <MenuItem value="es" sx={{ color: 'black' }}>
                Español
              </MenuItem>
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
          {buttons.map((button, index) => (
            <Button
              key={index}
              startIcon={button.icon || null}
              onClick={() => {
                button.action();
                setDrawerOpen(false);
              }}
              sx={{
                textAlign: 'left',
                color: theme.palette.text.primary,
                marginBottom: '10px',
              }}
            >
              {button.text}
            </Button>
          ))}
        
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
