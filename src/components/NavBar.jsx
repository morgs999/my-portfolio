// import { Link, useLocation } from 'react-router-dom';
// import { Container, Row, Col } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image';
// import { IoHomeSharp } from "react-icons/io5";

// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
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
// import Link from '@mui/material/Link';

// export default function NavBar() {
//   const currentPage = useLocation().pathname;
//   return (
//     // <div className='container'>
//     <Navbar className='navbar bg-dark data-bs-theme-dark'>
//       <Container className='border border-white'>
//         <Row className='d-flex p-3 flex-row justify-content-end'>
//           <Col>
//             <Link to="/"><IoHomeSharp /></Link>
//           </Col>
//           <Col>
//             <Link to="/portfolio">Portfolio</Link>
//           </Col>
//           <Col>
//             <Link to="/resume">Resume</Link>
//           </Col>
//           <Col>
//             <Link to="/contact">Contact</Link>
//           </Col>
//           <Col>
//             <Image src="../../pngs/headshot.jpg" className='rounded-circle w-75 h-75 border border-white' />
//           </Col>
//         </Row>
//       </Container>
//     </Navbar>
//     // </div>
//   )
// };

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className='navbar'>
      <AppBar position="fixed" className='p-4'>
        <Toolbar>

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
}