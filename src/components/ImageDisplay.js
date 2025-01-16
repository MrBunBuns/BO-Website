import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, useTheme, useMediaQuery, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageDisplay = ({ open, onClose, image, title }) => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery('(min-width: 900px)');
  if(!isNotMobile) {
    open = false;
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      display='flex'
      justifyContent="center"
      
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: theme.palette.background.dark, // Change dialog background
          color: theme.palette.text.primary, // Change dialog text color
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: theme.palette.background.dark, // Change title background
          color: theme.palette.text.primary, // Change title text color
        }}
      >
        {title}
        <IconButton edge="end" color="inherit" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src={image} alt={title} style={{
          maxWidth: '80%', // Adjust the percentage as needed
          width: 'auto',
          height: 'auto',
          objectFit: 'contain', // Ensures the image doesn't stretch
        }} />
      </DialogContent>
      <DialogActions
        sx={{
          backgroundColor: theme.palette.background.dark, // Change footer background
          justifyContent: 'center',
        }}
      >
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDisplay;
