import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewHeader(props) {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      style={{ height: "7vh", marginLeft: "5vw" }}
    >
      <Navbar.Brand as={Link} to="/">
        Gavin Southerland
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/interests">
            Interests
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NewHeader;
