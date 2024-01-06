import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NaviBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Vacago</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#locations">Locations</Nav.Link>
            <Nav.Link href="#contactus">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </>
  );
}

export default NaviBar;