import { AppBar, Toolbar, Link, Typography, Container, Box, Grid, Card, CardMedia, CardContent, ButtonBase, Button, createTheme, ThemeProvider, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // Spanish translations
import { useTheme } from '@mui/material/styles';

const translations = { en, es };

const HomePage = () => {

    const { language, setLanguage } = useContext(LanguageContext);
    const [headerText, setHeaderText] = useState(translations[language].homePage.header); 
    const [description, setDescription] = useState(translations[language].homePage.description); 

    const theme = useTheme();
    

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/getting-started');
      };
    return (
        <Box>
            <Box sx={{
                position: 'relative',
                height: '400px',
                backgroundImage: 'url(https://via.placeholder.com/1500)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
                }}>
                <Typography variant="h3" sx={{ padding: '10px' }}>
                    Welcome to This Site
                </Typography>
            
                </Box>
                {/* Navigation Links */}
                <Box sx={{ padding: '20px' }}>
            </Box>


            <Typography variant="h3" gutterBottom sx={{ fontSize: { xs: '2rem', sm: '5rem', md: '3em' } }}>
                {headerText }
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.2em' } }}>
                { description } 
            </Typography>
            <Button onClick={handleClick} style={{ color: '#fff', textDecoration: 'none' }}>Getting Started</Button>

        </Box>
       
    );
};

export default HomePage;
