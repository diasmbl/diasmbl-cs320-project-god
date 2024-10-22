import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        {/*Using "span" here to add a space between links
          You'll want to get rid of it when you add proper CSS formatting*/}
        <span> </span>
        <Link to="/page2" >Page 2</Link>
      </div>
    </nav>
  );
};

export default Navbar;
