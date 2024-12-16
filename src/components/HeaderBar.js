import React, { useContext, useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  Box
} from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // Spanish translations
import { useNavigate } from 'react-router-dom';

const translations = { en, es };

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [buttonText, setButtonText] = useState(translations[language].supportButton); 
  const theme = useTheme();
  
  const navigate = useNavigate();
  const handleHomeRedirect = () => {
    navigate('/');
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // On language switch we update button
  useEffect(() => {
    setButtonText(translations[language].supportButton);
  }, [language]);

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.background.header,
        height: { xs: '100px', sm: 'auto' },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button
          onClick={handleHomeRedirect} 
          sx={{
            textTransform: 'none', 
            fontSize: { xs: '1rem', sm: '1.5rem' },
            color: theme.palette.text.primary
          }}
        >
          <Typography variant="h5" component="div">
            CoD Nintendo
          </Typography>
        </Button>

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

          <Button
            color="inherit"
            onClick={() => alert('Contact button clicked!')}
            sx={{ ml: 2 }}
          >
            {buttonText}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
