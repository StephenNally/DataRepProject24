import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'


const NavigationBar = () => {
  return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Nav.Link href="/create">Write Review</Nav.Link>
              <Nav.Link href="/read">Review Library</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;