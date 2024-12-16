import React, { useContext, useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // English translations

const translations = { en, es };

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const theme = useTheme();
  
  // Initialize button text using the correct key
  const [buttonText, setButtonText] = useState(translations[language].supportButton); 

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Update button text when the language changes
  useEffect(() => {
    setButtonText(translations[language].supportButton); // Access the correct key
  }, [language]);

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.background.header,
        padding: { xs: '20px', sm: '10px' },
        height: { xs: '100px', sm: 'auto' },
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: { xs: '1rem', sm: '1.5rem' },
          }}
        >
          CoD Nintendo
        </Typography>

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
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
          </Select>
        </FormControl>

        <Button
          color="inherit"
          onClick={() => alert('Contact button clicked!')}
          sx={{ ml: 'auto' }}
        >
          {buttonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;