import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export default function NavBarr() {
  const currentPage = useLocation().pathname;
  return (
    // <div className='container'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="p-3">
        <Row >
          <Navbar.brand>
            <Link to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
          </Navbar.brand>
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
            <Image src="../../pngs/headshot.jpg" id="headshot" roundedCircle />
          </Col>
        </Row>
      </Container>
    </Navbar>
    // </div>
  )
};