import React, { useState, useContext } from 'react';
import { Container, Typography, Grid, ButtonBase, Card, CardMedia, CardContent, List, ListItem, useTheme, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ImageDisplay from '../components/ImageDisplay';  // Assuming this component exists
import categoriesDataEn from '../assests/stepText/stepsEnglish.json';  // English data
import categoriesDataEs from '../assests/stepText/stepsSpanish.json';  // Spanish data
import { LanguageContext } from '../contexts/LanguageContext';

const GettingStarted = () => {
  const theme = useTheme(); // Access theme
  const [steps, setSteps] = useState([]); // State to hold steps
  const [guideTitle, setGuideTitle] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected category
  const { language } = useContext(LanguageContext);
  // Use the appropriate categories data based on the selected language
  const categories = language === 'en' ? categoriesDataEn : categoriesDataEs;

  // Handle image click in step
  const handleImageClick = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setOpenDialog(true);
  };

  return (
    <Stack marginTop={14} width={'100%'} alignItems={'center'} justifyContent={'center'} spacing={8}>
      {/* Introduction Section */}
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '5rem', md: '3em' } }}>
          {language === 'en' ? 'Getting Started' : 'Comenzando'}
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }}>
          {language === 'en'
            ? 'This page will guide you in getting online for Black Ops Wii. If you are having difficulties please click the "Need Support" button in the top right of the page to get help.'
            : 'Esta página te guiará para conectarte en línea en Black Ops Wii. Si tienes dificultades, haz clic en el botón "Need Support" en la parte superior derecha de la página para obtener ayuda.'}
        </Typography>
      </Container>

      {/* Categories Section */}
      <Container>
        <Typography marginBottom={5} variant="h4" gutterBottom>
          {language === 'en' ? 'Select Your Method:' : 'Selecciona tu método:'}
        </Typography>
        <Grid container spacing={4} justifyContent="flex-start">
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ButtonBase
                onClick={() => {
                  setSteps(category.steps);
                  setGuideTitle(category.title);
                  setSelectedCategory(category.title); // Set selected category
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
            {guideTitle} {language === 'en' ? 'Setup Instructions' : 'Instrucciones de configuración'}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.secondary} sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }} gutterBottom>
            * {language === 'en' ? 'Click images to expand' : 'Haz clic en las imágenes para expandir'}
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
