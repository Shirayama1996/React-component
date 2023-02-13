import "./Navigation.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar bg="success" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-around w-100">
            <Nav.Link href="" className="nav-item">
              Home
            </Nav.Link>
            <NavDropdown
              title="Category"
              id="basic-nav-dropdown"
              className="nav-item"
            >
              <NavDropdown.Item href="#action/3.1">
                Cheap products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Luxurious products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Best sellers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                New products
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" className="nav-item">
              About us
            </Nav.Link>
            <Nav.Link href="#link" className="nav-item">
              Contact
            </Nav.Link>
            <Nav.Link href="#link" className="nav-item">
              Order
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
