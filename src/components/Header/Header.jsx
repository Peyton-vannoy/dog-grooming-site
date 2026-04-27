import { useState } from "react";
import "./Header.css";
import logo from "../../assets/Site_Logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <a href="#">
          <img className="header-logo" src={logo} alt="Paws On The Go Logo" />
        </a>

        <nav className={`header-nav ${isMenuOpen ? "header-nav-open" : ""}`}>
          <ul className="header-nav-list">
            <li>
              <a href="#services" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#why-choose-us" onClick={() => setIsMenuOpen(false)}>
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a href="#contact" className="header-nav-button">
          Book an Appointment
        </a>
        <button
          className="header-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Header;
