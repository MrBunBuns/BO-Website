import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, Grid, ButtonBase, Card, CardMedia, CardContent, Box, List, ListItem, useTheme, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ImageDisplay from '../components/ImageDisplay';  // Assuming this component exists
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // English translations

import { LanguageContext } from '../contexts/LanguageContext';

const translations = { en, es };

const AboutPage = () => {
  const theme = useTheme();
 
  const { language } = useContext(LanguageContext);

  let categories = translations[language].aboutPage
 
 
  
  useEffect(() => {

  }, []);

  return (
    <Stack padding={2} spacing={8}>
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '5rem', md: '2.5em' } }}>
          {categories.title}
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }}>
          {categories.description}
        </Typography>
    </Stack>
  );
};

export default AboutPage;
