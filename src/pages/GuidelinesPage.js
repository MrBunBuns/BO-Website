import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, Grid, ButtonBase, Card, CardMedia, CardContent, useMediaQuery, Box, List, ListItem, useTheme, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ImageDisplay from '../components/ImageDisplay';  // Assuming this component exists
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // English translations

import { LanguageContext } from '../contexts/LanguageContext';

const translations = { en, es };

const GuidelinesPage = () => {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.down('sm') || theme.breakpoints.down('xs'));
  const isUltraWide = useMediaQuery('(min-width: 2200px)');
  const contained = isUltraWide ? (isMobile ? 'lg' : 'sm') : false;

  const { language } = useContext(LanguageContext);

  let categories = translations[language].guidelinesPage
 
 
  
  useEffect(() => {

  }, []);

  return (
    <Container maxWidth={contained}>
        <Stack alignItems='center' padding={2} spacing={8} width={'100%'}>
      <Typography
        width={'80%'}
        variant="h4"
        sx={{ fontSize: { xs: '2rem', sm: '5rem', md: '2.5rem' }}}
      >
        {categories.title}
      </Typography>
      <Typography
        width={'80%'}
        variant="body1"
        sx={{ color: theme.palette.text.secondary, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.5rem' }, whiteSpace: 'pre-line', textAlign: 'justify' }}
      >
        {categories.guidelineText}
      </Typography>
    </Stack>

    </Container>
    
  );
};

export default GuidelinesPage;
