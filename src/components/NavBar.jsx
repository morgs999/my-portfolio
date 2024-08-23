import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { IoHomeSharp } from "react-icons/io5";

export default function NavBar() {
  const currentPage = useLocation().pathname;
  return (
    // <div className='container'>
    <Navbar className='bg-dark data-bs-theme-dark'>
      <Container className="">
        <Row className='d-flex flex-row justify-content-end'>
          <Col>
            <Link to="/"><IoHomeSharp /></Link>
          </Col>
          <Col>
            <Link to="/portfolio">Portfolio</Link>
          </Col>
          <Col>
            <Link to="/resume">Resume</Link>
          </Col>
          <Col>
            <Link to="/contact">Contact</Link>
          </Col>
          <Col>
            <Image src="../../pngs/headshot.jpg" className='rounded-circle w-75 h-75' />
          </Col>
        </Row>
      </Container>
    </Navbar>
    // </div>
  )
};