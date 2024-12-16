import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: '#0d0d0d',
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
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select
            labelId="language-select-label"
            value={language}
            label="Language"
            onChange={handleLanguageChange}
            sx={{ color: 'white' }}
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
  );
};

export default Header;
