import { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div>
            <span className="logo">Kunal Sharma</span>
          </div>
          <nav className={`desktop-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
            <Link to="/home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/project" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacts</Link>
          </nav>
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;