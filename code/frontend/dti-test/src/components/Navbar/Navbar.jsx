import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          
          <span className="logo-text">Canil do Eduardo</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Início</a>
          </li>
          <li className="navbar-item">
            <a href="#calculadora" className="navbar-link">Calculadora</a>
          </li>
          <li className="navbar-item">
            <a href="#petshops" className="navbar-link">Petshops</a>
          </li>
          <li className="navbar-item">
            <a href="#contato" className="navbar-link">Contato</a>
          </li>
          <li className="navbar-item">
            <a href="#sobre" className="navbar-link">Sobre</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
