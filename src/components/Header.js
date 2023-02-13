import logo from "../assets/images/logo.png";
import "./Header.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Header() {
  return (
    <header>
      <div>
        <p>Welcome to our shop</p>
        <img src={logo} alt="technology" />
        <div>
          <Button>Register</Button>
          <Button>Login</Button>
        </div>
        <div>
          <InputGroup className="mb-3" id="search-box">
            <Form.Control
              placeholder="Type here for searching"
              aria-label="search"
              aria-describedby="search-input"
            />
            <Button variant="outline-secondary" id="search-button">
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
    </header>
  );
}

export default Header;
