import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

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
  return (
    <Box sx={{ flexGrow: 1, mb: 20 }}>
      <AppBar className='p-4' >
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
            </IconButton>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="contact"
              sx={{ mr: 2 }}
              href='/contact'
            >
              <PhoneIphoneOutlinedIcon />
            </IconButton>

          </Toolbar>
        </Grid>
      </AppBar>
    </Box>
  );
};