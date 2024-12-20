import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, useTheme, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageDisplay = ({ open, onClose, image, title }) => {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
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
        <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
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
