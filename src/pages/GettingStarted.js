import React, { useState, useContext, useEffect } from 'react';
import { Container, useMediaQuery, Typography, Grid, ButtonBase, Card, CardMedia, CardContent, Button, List, ListItem, useTheme, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import ImageDisplay from '../components/ImageDisplay';  // Assuming this component exists
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // English translations
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { LanguageContext } from '../contexts/LanguageContext';

const translations = { en, es };

const GettingStarted = () => {
  const theme = useTheme();
  const [steps, setSteps] = useState([]); 
  const [guideTitle, setGuideTitle] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1); 
  const [selectedYoutubeLink, setSelectedYoutubeLink] = useState(""); 
  const isNotMobile = !useMediaQuery(theme.breakpoints.down('sm') || theme.breakpoints.down('xs'));

  const [selectedCategory, setSelectedCategory] = useState(null); 
  const { language } = useContext(LanguageContext);

  let categories = translations[language].gettingStartedPage
 
  const waitForElementAndScroll = (selector) => {
    return new Promise(resolve => {
      const intervalId = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
          const offset = 100; // Prevents us from scrolling too far
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const scrollPosition = elementPosition - offset;
          
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
          });
          clearInterval(intervalId);
          resolve();
        }
      }, 100); // Check every 100ms
    });
  }
  
  // Handle image click in step
  const handleImageClick = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setOpenDialog(true);
  };

  useEffect(() => {
    categories = translations[language].gettingStartedPage;
    console.log(selectedYoutubeLink);
    steps.length > 0 ? setSteps(categories.methods[selectedIndex].steps) : setSteps([]);
  }, [language]);

  useEffect(() => {
    setSteps([]);
  }, []);

  return (
    <Stack width={'100%'} alignItems={'center'} justifyContent={'center'} spacing={8}>
      {/* Introduction Section */}
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '5rem', md: '3em' } }}>
          {categories.header }
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }}>
          { categories.description} 
        </Typography>
        {/* Highlighted Card */}
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.background.alternate,
            border: '1px solid red',
            transition: 'border 0.3s ease',
            width: '100%',
            marginTop: '40px',
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
              {categories.prereqTextTitle}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '25px',  color: theme.palette.text.secondary }}>
              {categories.prereqTextDesc}
            </Typography>
            <Stack display='flex' marginTop={3} spacing={4} justifyContent='center' width={'100%'} direction={'row'}>
              <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowOutwardIcon/>}
                  sx={{ textTransform: 'none', backgroundColor: '#4d4d4d',  width:'170px', height: '65px' }}
                  onClick={() => window.open('https://wii.hacks.guide/get-started.html', '_blank', 'noopener,noreferrer')}
                >
                  {categories.wiiModLink}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowOutwardIcon/>}
                  sx={{ textTransform: 'none', backgroundColor: '#4d4d4d', width:'170px', height: '65px' }}
                  onClick={() => window.open('https://wiiu.hacks.guide/', '_blank', 'noopener,noreferrer')}
                >
                  {categories.wiiUModLink}
                </Button>
            </Stack>
          </CardContent>
        </Card>
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
                  setSelectedCategory(category.title);
                  setSelectedIndex(index);
                  setSelectedYoutubeLink(category.youtubeLink);
                  waitForElementAndScroll(category.youtubeLink ? '#video-container' : '#step-by-step-container')

                }}
                sx={{ width: '100%' }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: theme.palette.background.alternate,
                    border: selectedIndex === index ? '3px solid #1976d2' : 'none',
                    transition: 'border 0.3s ease',
                    width: '100%',
                    maxWidth: '250px',
                    minWidth: '200px',
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
      
      {selectedYoutubeLink && (
        <Container id="video-container">
          <Typography variant="h4" gutterBottom textAlign="center">
            {categories.methods[selectedIndex].youtubeTitle}
          </Typography>
          <Card
            sx={{
              maxWidth: '720px',
              width: '100%', 
              margin: '0 auto', 
              borderRadius: '8px',
              overflow: 'hidden',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <iframe
              width="100%"
              height={isNotMobile ? "400px" : "200px"}
              src={selectedYoutubeLink}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                border: 'none',
              }}
            ></iframe>
          </Card>
        </Container>
      )}


      {/* Step-by-Step Expanded List */}
      {steps.length > 0 && (
        <Container id="step-by-step-container">
          <Typography variant="h5" sx={{ fontSize: { sm: '2rem', md: '2rem' } }} gutterBottom textAlign="center">
            {categories.methods[selectedIndex].title}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.secondary} sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }} gutterBottom textAlign="center">
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
                {step.link && (
                   <CardContent
                   sx={{
                     display: 'flex', // Enable Flexbox
                     justifyContent: 'center', // Center horizontally
                     alignItems: 'center', // Center vertically
                     width: '100%',
                     height: '100%',
                     maxWidth: '300px',
                     paddingTop: '20px', // You can adjust/remove this if needed
                   }}
                 >
                   <Button
                     variant="contained"
                     color="primary"
                     endIcon={<ArrowOutwardIcon/>}
                     sx={{ textTransform: 'none', backgroundColor: '#4d4d4d', width:'300px', height: '100px' }}
                     onClick={() => window.open(step.link, '_blank', 'noopener,noreferrer')}
                   >
                     {step.linkName}
                   </Button>
                 </CardContent>
                 
                )}
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
