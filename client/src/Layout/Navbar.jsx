import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Login from '../Login/Login';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const closeMenu = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setMenuOpen(false); // Close menu when switching to desktop view
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src\assets\tfc.jpg" alt="" className="tfc-image" />
      </div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/events" onClick={closeMenu}>
          Events
        </Link>
        <Link to="/rankings" onClick={closeMenu}>
          Rankings
        </Link>
        <Link to="/athletes" onClick={closeMenu}>
          Athletes
        </Link>
        <Link to="/news" onClick={closeMenu}>
          News
        </Link>
        <Link to="/tuf32" onClick={closeMenu}>
          TUF 32
        </Link>
        <Link to="/login" onClick={closeMenu}>
          Connect
        </Link>
      </div>
      {isMobile && (
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ 
        </button>
      )}
    </nav>
  );
};

export default Navbar;