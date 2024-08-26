import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { FaBlackTie } from 'react-icons/fa';

import { createTheme } from '@mui/material/styles';


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
      <AppBar className='p-4' color='primary'  >
        <Toolbar sx={{ color: theme.palette.primary.main }}>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
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
      </AppBar>
    </Box>
  );
};