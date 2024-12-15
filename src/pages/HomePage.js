import { AppBar, Toolbar, Link, Typography, Container, Box, Grid, Card, CardMedia, CardContent, ButtonBase, Button, createTheme, ThemeProvider, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
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
                <Button onClick={handleClick} style={{ color: '#fff', textDecoration: 'none' }}>Getting Started</Button>
            </Box>


        </Box>
       
    );
};

export default HomePage;
