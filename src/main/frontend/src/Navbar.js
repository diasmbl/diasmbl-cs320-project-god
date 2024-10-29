import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/page2">Region Roulette</Link>
        <span> | </span>
        <Link to="/page3">Starter Roulette</Link>
      </div>
      <div className="navbar-buttons">
        <button>Signup</button>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
