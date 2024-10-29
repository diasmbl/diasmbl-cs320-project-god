// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/page2">Region Roulette</Link>
        <Link to="/page3">Starter Roulette</Link>
      </div>
      <div>
        <button className="btn">Login</button>
        <button className="btn">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
