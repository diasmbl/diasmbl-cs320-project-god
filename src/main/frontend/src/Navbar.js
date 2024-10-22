import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Link the CSS file for styling

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <span> | </span> {/* For spacing */}
        <Link to="/region">Region Roulette</Link>
        <span> | </span>
        <Link to="/starter">Starter Roulette</Link>
      </div>
    </nav>
  );
};

export default Navbar;

