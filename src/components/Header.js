import User from "./User";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from "./Login";
import Logout from "./Logout";

const Header = () => {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand>Email to Speech</Navbar.Brand>
          <Nav>
            <Login />
          </Nav>
          <Nav>
            <Logout />
          </Nav>
        </Container>
      </Navbar>
      <User />
    </Container>
  );
};

export default Header;
