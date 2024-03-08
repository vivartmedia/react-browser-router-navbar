import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'} href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'} href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to={'/SecondPageComponent'}  href="#link">SecondPageComponent</Nav.Link>
            <Nav.Link as={Link} to={'/ThirdPageComponent'}  href="#link">ThirdPageComponent</Nav.Link>
            <Nav.Link as={Link} to={'/FourthPageComponent'}  href="#link">FourthPageComponent</Nav.Link>
            <Nav.Link as={Link} to={'/FifthPageComponent'}  href="#link">FifthPageComponent</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;