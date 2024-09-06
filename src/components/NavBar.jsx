import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ContactDialog from './ContactDialog';
import Avatar from '@mui/material/Avatar';

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

  const [isContactDialogOpen, setContactDialogOpen] = useState(false);
  const handleOpenContactDialog = () => setContactDialogOpen(true);
  const handleCloseContactDialog = () => setContactDialogOpen(false);

  return (
    <Box sx={{ flexGrow: 1, mb: 20 }}>
      <AppBar className='d-flex flex-row justify-content-between align-items-center p-4'
        sx={{ backgroundColor: 'black' }} >

        <Avatar
          alt="Morgan Clarke"
          src="/pngs/headshot.jpg"
          sx={{ width: '7em', height: '7em', border: '5px solid white', boxShadow: 10, marginLeft: 10, marginTop: 5, position: 'fixed' }}
        />

        <Grid container justifyContent="flex-end" alignItems="center"
          marginLeft={10} marginRight={5}>
          <Toolbar >

            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="home"
                sx={{ mr: 2, ":hover": { color: 'grey', textSizeAdjust: '120%' } }}
              >
                <HomeOutlinedIcon />
                <Typography>About Me</Typography>
              </IconButton>
            </Link>

            <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="portfolio"
                sx={{ mr: 2, ":hover": { color: 'grey', textSizeAdjust: '120%' } }}
              >
                <DesktopMacOutlinedIcon />
                <Typography>Portfolio</Typography>
              </IconButton>
            </Link>

            <Link to="/resume" style={{ color: 'white', textDecoration: 'none' }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="resume"
                sx={{ mr: 2, ":hover": { color: 'grey', textSizeAdjust: '120%' } }}
              >
                <ReceiptLongOutlinedIcon />
                <Typography>Resume</Typography>
              </IconButton>
            </Link>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="contact"
              sx={{ mr: 2, ":hover": { color: 'grey', textSizeAdjust: '120%' } }}
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