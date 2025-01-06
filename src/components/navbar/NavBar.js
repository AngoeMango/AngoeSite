import React from 'react';
import './NavBar.css'; // We'll style this separately
import { ReactComponent as Logo } from '../../media/images/angoemango.svg'; // Import your SVG

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
      </div>

      <div className="nav-logo">
        <Logo className="logo" />
      </div>

      <div className="nav-right">
        <a href="mailto:your-email@example.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#fr">
          fr
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
