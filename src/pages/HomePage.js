import { AppBar, Toolbar, Link, Typography, Container, Box, Grid, Card, CardMedia, useMediaQuery, CardContent, ButtonBase, Button, createTheme, ThemeProvider, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // Spanish translations
import { useTheme } from '@mui/material/styles';

const translations = { en, es };

const HomePage = () => {

    const { language, setLanguage } = useContext(LanguageContext);
    const [bannerText, setBannerText] = useState(translations[language].homePage.imageBanner); 
    const [headerText, setHeaderText] = useState(translations[language].homePage.header); 
    const [description, setDescription] = useState(translations[language].homePage.description); 
    const [compatibilityText, setCompatibilityText] = useState(translations[language].homePage.compatibilityText); 
    const [getConnected, setGetConnected] = useState(translations[language].homePage.getConnected); 
    const [regionCompatibility, setRegionCompatibility] = useState(translations[language].homePage.compatibility);
    const theme = useTheme();
    const navigate = useNavigate();

    const isMobile = !useMediaQuery(theme.breakpoints.down('sm') || theme.breakpoints.down('xs'));
    const isUltraWide = useMediaQuery('(min-width: 2200px)');
    const contained = isUltraWide ? (isMobile ? 'lg' : 'sm') : false;

    const handleClick = () => {
        navigate('/getting-started');
    };
   
    
    useEffect(() => {
        setBannerText(translations[language].homePage.imageBanner);
        setHeaderText(translations[language].homePage.header);
        setDescription(translations[language].homePage.description);
        setRegionCompatibility(translations[language].homePage.compatibility);
        setCompatibilityText(translations[language].homePage.compatibilityText);
      }, [language]); 

    return (
        <Container maxWidth={contained}>
            <Box sx={{
                position: 'relative',
                height: isMobile ? ('400px') : ('250px'),
                backgroundImage: 'url(/BO-Website/images/homepagebanner3.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
            }}>
                <Typography color='white' variant={isMobile ? ('h3') : ('h4')} sx={{ padding: '10px' }}>
                   {bannerText}
                </Typography>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ padding: '20px' }}></Box>

            <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '5rem', md: '3em' } }}>
                {headerText}
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }}>
                {description}
            </Typography>
            <Button onClick={handleClick} style={{ color: '#fff', backgroundColor: theme.palette.background.primary, textDecoration: 'none', marginTop: '30px' }}>{getConnected}</Button>

            {/* Region Compatibility Section */}
            <Box sx={{ marginTop: '40px' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                    {compatibilityText}
                </Typography>
                <Grid container spacing={2}>
                    {regionCompatibility.map((region, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ padding: '10px', backgroundColor: '#2f3030' }}>
                                <CardContent>
                                    <Typography variant="h6">{region.language} - {region.code} </Typography>
                                    <Typography variant="body2">{region.status}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default HomePage;
