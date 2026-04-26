import "./Header.css";
import logo from "../../assets/Site_logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#">
          <img className="header-logo" src={logo} alt="Paws On The Go Logo" />
        </a>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#why-choose-us">Why Choose Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-nav-button">
          <a href="#contact" className="header-nav-button-link">
            Book an Appointment
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
