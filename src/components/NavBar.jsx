import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
// import ContactModal from './ContactModal';
import ContactDialog from './ContactDialog';

import { createTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(0,0,0,0.81)',
    },
    secondary: {
      main: 'rgba(9,0,129,0.78)',
    },
  },
});

export default function NavBar() {
  // const [isContactModalOpen, setContactModalOpen] = useState(false);
  // const handleOpenContactModal = () => setContactModalOpen(true);
  // const handleCloseContactModal = () => setContactModalOpen(false);

  const [isContactDialogOpen, setContactDialogOpen] = useState(false);
  const handleOpenContactDialog = () => setContactDialogOpen(true);
  const handleCloseContactDialog = () => setContactDialogOpen(false);

  return (
    <Box sx={{ flexGrow: 1, mb: 20 }}>
      <AppBar className='p-4' >
        <Typography>Morgan Clarke</Typography>
        <Grid container justifyContent="flex-end">
          <Toolbar>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              sx={{ mr: 2, color: theme.palette.primary.main }}
              href='/'
            >
              <HomeOutlinedIcon />
              <Typography>About Me</Typography>
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="portfolio"
              sx={{ mr: 2 }}
              href='/portfolio'
            >
              <DesktopMacOutlinedIcon />
              <Typography>Portfolio</Typography>
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="resume"
              sx={{ mr: 2 }}
              href='/resume'
            >
              <ReceiptLongOutlinedIcon />
              <Typography>Resume</Typography>
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="contact"
              sx={{ mr: 2 }}
              onClick={handleOpenContactDialog}
            >
              <PhoneIphoneOutlinedIcon />
              <Typography>Contact</Typography>
            </IconButton>

          </Toolbar>
        </Grid>
      </AppBar>
      <ContactDialog
        open={isContactDialogOpen}
        handleClose={handleCloseContactDialog} />
    </Box>
  );
};