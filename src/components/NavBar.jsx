import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ContactDialog from './ContactDialog';


export default function NavBar() {

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => { setOpen(newOpen) };
  const [isContactDialogOpen, setContactDialogOpen] = useState(false);
  const handleOpenContactDialog = () => setContactDialogOpen(true);
  const handleCloseContactDialog = () => setContactDialogOpen(false);

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)} >
      <List>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
          <ListItem key='about-me' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>About Me</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/portfolio" style={{ color: 'black', textDecoration: 'none' }}>
          <ListItem key='portfolio' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DesktopMacOutlinedIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>Portfolio</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link to="/resume" style={{ color: 'black', textDecoration: 'none' }}>
          <ListItem key='resume' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReceiptLongOutlinedIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>Resume</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <ListItem key='contact' disablePadding>
          <ListItemButton onClick={handleOpenContactDialog}>
            <ListItemIcon>
              <PhoneIphoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography>Contact</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </Box >
  );

  return (
    <>
      {/* <Box sx={{ flexGrow: 1, mb: 20 }} > */}
      <div className='header'>
        <AppBar className='header nav-bar d-flex flex-row justify-content-between align-items-center p-1' sx={{ backgroundColor: 'black' }} >

          <Avatar
            className='avatar'
            alt="Morgan Clarke"
            src="/pngs/headshot.jpg"
            sx={{ width: '7em', height: '7em', border: '5px solid white', boxShadow: 10, position: 'fixed', marginLeft: 10, marginTop: 8, marginRight: 10 }}
          />

          <Grid container className='d-flex flex-row justify-content-end mx-5'>

            {/* <Toolbar > */}
            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
              <h1 className='signature'>Morgan Clarke</h1>
            </Link>

            <Button onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ fontSize: '2rem', color: 'white' }} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right"
              color="neutral"
              size="sm"
              variant="persistent">
              {DrawerList}
            </Drawer>

            {/* </Toolbar> */}

          </Grid>

        </AppBar>

        <ContactDialog open={isContactDialogOpen} handleClose={handleCloseContactDialog} />
      </div>
      {/* </Box> */}
    </>
  );
};