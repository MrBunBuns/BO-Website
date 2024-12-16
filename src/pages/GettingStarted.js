import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, Grid, ButtonBase, Card, CardMedia, CardContent, List, ListItem, useTheme, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ImageDisplay from '../components/ImageDisplay';  // Assuming this component exists
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // English translations

import { LanguageContext } from '../contexts/LanguageContext';

const translations = { en, es };

const GettingStarted = () => {
  const theme = useTheme();
  const [steps, setSteps] = useState([]); 
  const [guideTitle, setGuideTitle] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0); 

  const [selectedCategory, setSelectedCategory] = useState(null); 
  const { language } = useContext(LanguageContext);

  let categories = translations[language].gettingStartedPage

  // Handle image click in step
  const handleImageClick = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setOpenDialog(true);
  };

  useEffect(() => {
    categories = translations[language].gettingStartedPage
    setSteps(categories.methods[selectedIndex].steps);
  }, [language]);

  return (
    <Stack marginTop={14} width={'100%'} alignItems={'center'} justifyContent={'center'} spacing={8}>
      {/* Introduction Section */}
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '5rem', md: '3em' } }}>
          {categories.header }
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }}>
          { categories.description} 
        </Typography>
      </Container>

      {/* Categories Section */}
      <Container>
        <Typography marginBottom={5} variant="h4" gutterBottom>
          {categories.methodHeader}
        </Typography>
        <Grid container spacing={4} justifyContent="flex-start">
          {categories.methods.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ButtonBase
                onClick={() => {
                  setSteps(category.steps);
                  setGuideTitle(category.title);
                  setSelectedCategory(category.title); // Set selected category
                  setSelectedIndex(index);
                }}
                sx={{ width: '100%' }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#4d4d4d',
                    border: selectedCategory === category.title ? '3px solid #1976d2' : 'none', // Add border if selected
                    transition: 'border 0.3s ease', // Smooth transition for border
                    width: '100%', // Ensure the card width is flexible
                    maxWidth: '250px', // Adjust the card to shrink if needed
                    minWidth: '200px', // Ensure it doesn’t shrink too much
                    maxHeight: '300px',
                    minHeight: '300px'
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: 'auto', 
                      width: '100%',
                      objectFit: 'cover',
                      maxHeight: '360px', // Control the height of the image
                    }}
                    image={category.image}
                    alt={category.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                      {category.title}
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Step-by-Step Expanded List */}
      {steps.length > 0 && (
        <Container>
          <Typography variant="h5" sx={{ fontSize: { sm: '2rem', md: '2rem' } }} gutterBottom>
            {categories.methods[selectedIndex].title}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.secondary} sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }} gutterBottom>
            * {categories.methodHelperText}
          </Typography>
          <List>
            {steps.map((step, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: '16px',
                  marginBottom: '16px',
                  border: '1px solid #ccc',
                  padding: '16px',
                  borderRadius: '8px',
                  [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column', // Stack items vertically on small screens
                    alignItems: 'center', // Center items
                  },
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontSize: { xs: '1.4rem', sm: '1.5rem', md: '1.2em' } }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }}>
                    {step.description}
                  </Typography>
                </CardContent>
                {step.image && (
                  <CardMedia
                    component="img"
                    sx={{
                      width: '100%',
                      maxWidth: '300px', // Maintain image width
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                    image={step.image}
                    alt={step.title}
                    onClick={() => handleImageClick(step.image, step.title)}
                  />
                )}
              </ListItem>
            ))}
          </List>
        </Container>
      )}

      {/* Image Dialog */}
      <ImageDisplay
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        image={selectedImage}
        title={selectedTitle}
      />
    </Stack>
  );
};

export default GettingStarted;
