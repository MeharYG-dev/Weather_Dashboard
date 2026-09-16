import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./Header.css";

function Header({ darkMode, setDarkMode }) {
  return (
    <Navbar className="weather-navbar">
      <Container>
        <Navbar.Brand className="brand-logo">
          <i className="bi bi-cloud-sun-fill"></i>

          <span>Weather App</span>
        </Navbar.Brand>

        <Button
          className="theme-button"
          variant="outline-primary"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <>
              <i className="bi bi-sun-fill"></i>
              Light Mode
            </>
          ) : (
            <>
              <i className="bi bi-moon-stars-fill"></i>
              Dark Mode
            </>
          )}
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;