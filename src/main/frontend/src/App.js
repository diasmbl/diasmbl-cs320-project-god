// App.js

import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Removed BrowserRouter to avoid duplication
import './App.css';
import Signup from './Signup';
import Page2 from './Page2'; // Import Page2 for Region Roulette
import Page3 from './Page3'; // Import Page3 for Starter Roulette
import Navbar from './Navbar'; // Import Navbar

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/;
    if (regex.test(value)) {
      setter(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setMessage('Please enter both first name and last name.');
    } else {
      setMessage(`Welcome Trainer ${firstName} ${lastName}!`);
    }
  };

  return (
    <div className="App" style={{ minHeight: '100vh', padding: '20px' }}>
      <Navbar /> {/* Navbar with navigation links */}
      <h1>Trainer Name</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleInputChange(setFirstName)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleInputChange(setLastName)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      <Link to="/page2">
        <button>Region Roulette</button>
      </Link>
      <Link to="/page3">
        <button>Starter Roulette</button>
      </Link>
      <Link to="/signup">
        <button>Signup</button>
      </Link>

      <Routes>
        <Route path="/" element={<div>Home Component</div>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/page2" element={<Page2 />} /> {/* Region Roulette */}
        <Route path="/page3" element={<Page3 />} /> {/* Starter Roulette */}
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
