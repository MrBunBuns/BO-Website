import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageDisplay = ({ open, onClose, image, title }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {title}
        <IconButton edge="end" color="inherit" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
      </DialogContent>
      <DialogActions>
        <IconButton onClick={onClose} color="primary">
          Close
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDisplay;